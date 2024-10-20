import * as Responses from '../entities/responsePokeApi';

export interface PokemonRepository {
  getPokemonsByColorId(
    colorId: string,
  ): Promise<Responses.ResponsePokemonByIdColor>;
  getPokemonByIdOrName(
    idOrName: string,
  ): Promise<Responses.ResponsePokemonByIdOrName>;
  getPokemonsPaginated(
    limit: number,
    offset: number,
  ): Promise<Responses.ResponsePokemonPaginated>;
}
