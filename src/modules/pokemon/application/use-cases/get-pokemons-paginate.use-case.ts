import { Inject, Injectable } from '@nestjs/common';

import { GetPokemonsPaginatedDto } from '../dtos/get-pokemons-paginated.dto';
import { PokemonRepository } from '../../domain/repositories/pokemon.repository';

@Injectable()
export class GetPokemonsPaginatedUseCase {
  constructor(
    @Inject('PokemonRepository')
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute({ page }: GetPokemonsPaginatedDto) {
    const limit = 10;
    const offset = (page - 1) * limit;

    const response = await this.pokemonRepository.getPokemonsPaginated(
      limit,
      offset,
    );

    return {
      total: response.data.count,
      paginas: Math.ceil(response.data.count / limit),
      paginaAtual: page,
      registroPorPagina: limit,
      dados: response.data.results,
    };
  }
}
