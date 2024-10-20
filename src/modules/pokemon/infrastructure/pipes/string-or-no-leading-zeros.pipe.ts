import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class StringOrNoLeadingZerosPipe implements PipeTransform {
  transform(value: any) {
    const stringValue = value.toString();

    if (!isNaN(Number(stringValue)) && /^0[0-9]+/.test(stringValue)) {
      throw new BadRequestException(
        'O valor numérico não pode ter zeros à esquerda',
      );
    }

    return value;
  }
}
