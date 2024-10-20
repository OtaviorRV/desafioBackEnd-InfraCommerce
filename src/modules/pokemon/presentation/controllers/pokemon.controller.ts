import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import * as UseCases from '../../application/use-cases';
import * as Dtos from '../../application/dtos';

@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly getPokemonsByColorIdUseCase: UseCases.GetPokemonsByColorIdUseCase,
    private readonly getPokemonByIdOrNameUseCase: UseCases.GetPokemonByIdOrNameUseCase,
    private readonly getPokemonPaginated: UseCases.GetPokemonsPaginatedUseCase,
  ) {}

  @Get('color-id/:colorId')
  async getPokemonByIdOrName(@Param('colorId') colorId: string) {
    try {
      const dto: Dtos.GetPokemonsByColorIdDto = { colorId };

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
      const dto: Dtos.GetPokemonByIdOrNameDto = { idOrName };

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

  @Get('/page/:page')
  async getPokemonsPaginated(@Param('page') page: number) {
    try {
      const dto: Dtos.GetPokemonsPaginatedDto = { page };
      const response = this.getPokemonPaginated.execute(dto);

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
