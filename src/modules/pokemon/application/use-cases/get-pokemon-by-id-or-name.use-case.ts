import { Inject, Injectable } from '@nestjs/common';

import { GetPokemonByIdOrNameDto } from '../dtos/get-pokemon-by-id-or-name.dto';
import { PokemonRepository } from '../../domain/repositories/pokemon.repository';
import { ResponsePokemonByIdOrName } from '../../domain/entities/responsePokeApi';

@Injectable()
export class GetPokemonByIdOrNameUseCase {
  constructor(
    @Inject('PokemonRepository')
    private readonly pokemonRepository: PokemonRepository,
  ) {}

  async execute(
    getPokemonDto: GetPokemonByIdOrNameDto,
  ): Promise<ResponsePokemonByIdOrName> {
    const data = await this.pokemonRepository.getPokemonByIdOrName(
      getPokemonDto.idOrName,
    );

    return data;
  }
}
