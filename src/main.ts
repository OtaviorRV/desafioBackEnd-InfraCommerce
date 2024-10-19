import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import morgan from 'morgan';
import { AppModule } from './app.module';
import * as net from 'net';

const findAvailablePort = async (startPort: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    const server = net.createServer(); // Cria um servidor TCP temporário para verificar se a porta está em uso

    server.listen(startPort, '0.0.0.0'); // Tenta ouvir na porta especificada no IP 0.0.0.0 (acessível externamente)

    // Evento chamado quando o servidor consegue ouvir na porta (a porta está livre)
    server.on('listening', () => {
      server.close(() => resolve(startPort)); // Fecha o servidor e resolve a promise com a porta disponível
    });

    // Evento chamado se houver um erro ao tentar ouvir na porta
    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        // Se o erro for 'EADDRINUSE', significa que a porta está ocupada
        resolve(findAvailablePort(startPort + 1)); // Tenta a próxima porta recursivamente
      } else {
        reject(err); // Se o erro não for 'EADDRINUSE', rejeita a promise com o erro
      }
    });
  });
};

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: {
        level: 'info',

        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true, // Adiciona cores aos logs
          },
        },
      },
    }),
  );

  // Chama a função para encontrar uma porta, começando pela porta 3000
  const port = await findAvailablePort(3000);

  await app.listen({ port, host: '0.0.0.0' });
}
bootstrap();
