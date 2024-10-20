import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../domain/repositories/pokemon.repository';
import pokeApiClient from './axios-pokeapi';

@Injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  async getPokemonsPaginated(limit: number, offset: number): Promise<any> {
    const { status, data } = await pokeApiClient.get(
      `pokemon?limit=${limit}&offset=${offset}`,
    );
    return { status, data };
  }
  async getPokemonsByColorId(colorId: string): Promise<any> {
    const { status, data } = await pokeApiClient.get(
      `pokemon-color/${colorId}`,
    );
    return { status, data };
  }
  async getPokemonByIdOrName(idOrName: string): Promise<any> {
    const { data, status } = await pokeApiClient.get(`pokemon/${idOrName}`);

    return { status, data };
  }
}
