import { Inject, Injectable } from '@nestjs/common';

import { GetPokemonDto } from '../dtos/get-pokemon-by-id-or-name.dto';
import { PokemonRepository } from '../../domain/repositories/pokemon.repository';

@Injectable()
export class GetPokemonByIdOrNameUseCase {
  constructor(
    @Inject('PokemonRepository')
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(getPokemonDto: GetPokemonDto) {
    return this.pokemonRepository.findByIdOrName(getPokemonDto.idOrName);
  }
}
