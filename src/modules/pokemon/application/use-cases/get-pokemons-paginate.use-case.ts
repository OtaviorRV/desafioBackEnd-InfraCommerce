import { Inject, Injectable } from '@nestjs/common';

import { GetPokemonsPaginatedDto } from '../dtos/get-pokemons-paginated.dto';
import { PokemonRepository } from '../../domain/repositories/pokemon.repository';

@Injectable()
export class GetPokemonsPaginatedUseCase {
  constructor(
    @Inject('PokemonRepository')
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute({
    page,
  }: GetPokemonsPaginatedDto): Promise<GetPokemonsPaginatedResponse> {
    const limit = 10;
    const offset = (page - 1) * limit;

    const data = await this.pokemonRepository.getPokemonsPaginated(
      limit,
      offset,
    );

    const repsonse: GetPokemonsPaginatedResponse = {
      total: data.count,
      pages: Math.ceil(data.count / limit),
      currentPage: page,
      recordsPerPage: limit,
      data: data.results,
    };

    return repsonse;
  }
}
