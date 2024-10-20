import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../domain/repositories/pokemon.repository';
import pokeApiClient from './axios-pokeapi';

@Injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  async getPokemonsByColorId(colorId: string): Promise<any> {
    const { status, data } = await pokeApiClient.get(
      `pokemon-color/${colorId}`,
    );
    return { status, data };
  }
  async getPokemonByIdOrName(idOrName: string): Promise<any> {
    const { data } = await pokeApiClient.get(`pokemon/${idOrName}`);

    return { status, data };
  }
}
