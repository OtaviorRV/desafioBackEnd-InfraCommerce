import { Injectable } from '@nestjs/common';
import { PokemonRepository } from '../domain/repositories/pokemon.repository';
import pokeApiClient from './axios-pokeapi';
import * as Responses from '../domain/entities/responsePokeApi';
@Injectable()
export class PokemonRepositoryImpl implements PokemonRepository {
  async getPokemonsPaginated(
    limit: number,
    offset: number,
  ): Promise<Responses.ResponsePokemonPaginated> {
    const { data } =
      await pokeApiClient.get<Responses.ResponsePokemonPaginated>(
        `pokemon?limit=${limit}&offset=${offset}`,
      );
    return data;
  }
  async getPokemonsByColorId(
    colorId: string,
  ): Promise<Responses.ResponsePokemonByIdColor> {
    const {
      data: { data, status },
    } = await pokeApiClient.get<Responses.ResponsePokemonByIdColor>(
      `pokemon-color/${colorId}`,
    );
    return { data, status };
  }
  async getPokemonByIdOrName(
    idOrName: string,
  ): Promise<Responses.ResponsePokemonByIdOrName> {
    const {
      data: { data, status },
    } = await pokeApiClient.get<Responses.ResponsePokemonByIdOrName>(
      `pokemon/${idOrName}`,
    );

    return { data, status };
  }
}
