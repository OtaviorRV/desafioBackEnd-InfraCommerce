import { Inject, Injectable } from '@nestjs/common';

import { PokemonRepository } from '../../domain/repositories/pokemon.repository';
import { GetPokemonsByColorIdDto } from '../dtos/get-pokemons-by-color-id.dto';
import { ResponsePokemonColor } from '../../domain/entities/responsePokeApi';

@Injectable()
export class GetPokemonsByColorIdUseCase {
  constructor(
    @Inject('PokemonRepository')
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(
    getPokemonDto: GetPokemonsByColorIdDto,
  ): Promise<ResponsePokemonColor> {
    const data = await this.pokemonRepository.getPokemonsByColorId(
      getPokemonDto.colorId,
    );

    return data;
  }
}
