import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import * as UseCases from '../../application/use-cases';
import * as Dtos from '../../application/dtos';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
@ApiTags('pokemon')
@Controller('pokemon')
export class PokemonController {
  constructor(
    private readonly getPokemonsByColorIdUseCase: UseCases.GetPokemonsByColorIdUseCase,
    private readonly getPokemonByIdOrNameUseCase: UseCases.GetPokemonByIdOrNameUseCase,
    private readonly getPokemonPaginated: UseCases.GetPokemonsPaginatedUseCase,
  ) {}

  @Get('color-id/:colorId')
  @ApiOperation({ summary: 'Lista Pokémons por id de cor' })
  @ApiParam({
    name: 'colorId',
    description: 'ID da cor do Pokémon, sem zero na frente e maior que zero.',
  })
  @ApiResponse({ status: 200, description: 'Pokémons retornados com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar os Pokémons.' })
  async getPokemonByIdOrName(@Param('colorId') colorId: string) {
    try {
      const dto: Dtos.GetPokemonsByColorIdDto = { colorId };

      const response = await this.getPokemonsByColorIdUseCase.execute(dto);

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
  @ApiOperation({ summary: 'Lista dados do Pokémon por nome ou id' })
  @ApiParam({
    name: 'idOrName',
    description:
      'ID ou Nome do Pokémon,sendo o nome em ingles e id sem zero na frente e maior que zero.',
  })
  @ApiResponse({ status: 200, description: 'Pokémons retornados com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar os Pokémons.' })
  async getPokemonsByColorId(@Param('idOrName') idOrName: string) {
    try {
      const dto: Dtos.GetPokemonByIdOrNameDto = { idOrName };

      const response = await this.getPokemonByIdOrNameUseCase.execute(dto);

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
  @ApiOperation({
    summary: 'Lista dados do Pokémon por pagina em uma quantia de 10.',
  })
  @ApiParam({
    name: 'page',
    description:
      'Numero da página para buscar os Pokémons, deve ser maior que 0.',
  })
  @ApiResponse({ status: 200, description: 'Pokémons retornados com sucesso.' })
  @ApiResponse({ status: 400, description: 'Erro ao buscar os Pokémons.' })
  async getPokemonsPaginated(@Param('page') page: number) {
    try {
      const dto: Dtos.GetPokemonsPaginatedDto = { page };
      const response = await this.getPokemonPaginated.execute(dto);

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
