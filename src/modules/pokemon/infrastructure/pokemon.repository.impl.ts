import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../domain/repositories/pokemon.repository';
import pokeApiClient from './axios-pokeapi';

@Injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  async findByIdOrName(idOrName: string): Promise<any> {
    const { data } = await pokeApiClient.get(`pokemon/${idOrName}`);

    return data;
  }
}
