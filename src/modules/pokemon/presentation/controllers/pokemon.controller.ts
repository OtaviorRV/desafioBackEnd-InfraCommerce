import { Controller, Get, Param } from '@nestjs/common';
import { GetPokemonByIdOrNameUseCase } from '../../application/use-cases/get-pokemon-by-id-or-name.use-case';
import { GetPokemonDto } from '../../application/dtos/get-pokemon-by-id-or-name.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly getPokemonByIdOrNameUseCase: GetPokemonByIdOrNameUseCase,
  ) {}

  @Get('/name-or-id/:idOrName')
  async getPokemon(@Param('idOrName') idOrName: string) {
    const dto: GetPokemonDto = { idOrName };
    return this.getPokemonByIdOrNameUseCase.execute(dto);
  }
}
