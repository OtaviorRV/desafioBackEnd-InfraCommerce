import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import * as net from 'net';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';

const findAvailablePort = async (startPort: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    const server = net.createServer();

    server.listen(startPort, '0.0.0.0');

    server.on('listening', () => {
      server.close(() => resolve(startPort));
    });

    server.on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        resolve(findAvailablePort(startPort + 1));
      } else {
        reject(err);
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
            colorize: true,
          },
        },
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Pokémon API')
    .setDescription('API para buscar Pokémons')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useStaticAssets({
    root: join(__dirname, '..', 'public'),
    prefix: '/public/',
  });

  const port = await findAvailablePort(3000);

  app.enableCors({
    origin: 'localhost',
    methods: 'GET',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen({ port, host: '0.0.0.0' });
}
bootstrap();
