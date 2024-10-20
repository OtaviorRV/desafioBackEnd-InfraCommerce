import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class GreaterThanZeroPipe implements PipeTransform {
  transform(value: any) {
    if (!/^\d+$/.test(value)) {
      throw new BadRequestException('O valor deve ser uma string numérica');
    }

    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue) || parsedValue <= 0) {
      throw new BadRequestException('O valor deve ser um número maior que 0');
    }

    if (/^0[0-9]+/.test(value)) {
      throw new BadRequestException(
        'O valor numérico não pode ter zeros à esquerda',
      );
    }

    return value;
  }
}
