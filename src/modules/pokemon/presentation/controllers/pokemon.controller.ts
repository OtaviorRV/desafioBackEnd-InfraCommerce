import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { GetPokemonByIdOrNameUseCase } from '../../application/use-cases/get-pokemon-by-id-or-name.use-case';
import { GetPokemonByIdOrNameDto } from '../../application/dtos/get-pokemon-by-id-or-name.dto';
import { GetPokemonsByColorIdUseCase } from '../../application/use-cases/get-pokemons-by-id-color.use-case';
import { GetPokemonsByColorIdDto } from '../../application/dtos/get-pokemons-by-color-id.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly getPokemonsByColorIdUseCase: GetPokemonsByColorIdUseCase,
    private readonly getPokemonByIdOrNameUseCase: GetPokemonByIdOrNameUseCase,
  ) {}

  @Get('color-id/:colorId')
  async getPokemonByIdOrName(@Param('colorId') colorId: string) {
    try {
      const dto: GetPokemonsByColorIdDto = { colorId };

      const response = this.getPokemonsByColorIdUseCase.execute(dto);

      return response;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST || error.status,
          error: error.message || 'Erro ao buscar Pokémon',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get('/name-or-id/:idOrName')
  async getPokemonsByColorId(@Param('idOrName') idOrName: string) {
    try {
      const dto: GetPokemonByIdOrNameDto = { idOrName };

      const response = this.getPokemonByIdOrNameUseCase.execute(dto);

      return response;
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST || error.status,
          error: error.message || 'Erro ao buscar Pokémon',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
