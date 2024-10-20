import { Inject, Injectable } from '@nestjs/common';

import { PokemonRepository } from '../../domain/repositories/pokemon.repository';
import { GetPokemonsByColorIdDto } from '../dtos/get-pokemons-by-color-id.dto';

@Injectable()
export class GetPokemonsByColorIdUseCase {
  constructor(
    @Inject('PokemonRepository')
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(getPokemonDto: GetPokemonsByColorIdDto): Promise<any> {
    return this.pokemonRepository.getPokemonsByColorId(getPokemonDto.colorId);
  }
}
