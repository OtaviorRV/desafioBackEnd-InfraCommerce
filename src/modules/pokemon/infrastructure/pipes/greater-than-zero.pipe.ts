import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class GreaterThanZeroPipe implements PipeTransform {
  transform(value: any) {
    // Verifica se o valor é uma string numérica
    if (!/^\d+$/.test(value)) {
      throw new BadRequestException('O valor deve ser uma string numérica');
    }

    // Converte o valor para número
    const parsedValue = parseInt(value, 10);

    // Verifica se o número é maior que zero
    if (isNaN(parsedValue) || parsedValue <= 0) {
      throw new BadRequestException('O valor deve ser um número maior que 0');
    }

    // Verifica se há zeros à esquerda
    if (/^0[0-9]+/.test(value)) {
      throw new BadRequestException(
        'O valor numérico não pode ter zeros à esquerda',
      );
    }

    return value; // Retorna o valor original como string
  }
}
