import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class NoLeadingZerosPipe implements PipeTransform {
  transform(value: any) {
    const stringValue = value.toString();

    if (/^0[0-9]+/.test(stringValue)) {
      throw new BadRequestException('O valor não pode ter zeros à esquerda');
    }

    const parsedValue = parseInt(stringValue, 10);

    if (isNaN(parsedValue)) {
      throw new BadRequestException('O valor deve ser um número válido');
    }

    return parsedValue;
  }
}
