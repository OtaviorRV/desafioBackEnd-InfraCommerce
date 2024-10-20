export interface PokemonRepository {
  getPokemonsByColorId(colorId: string): Promise<any>;
  getPokemonByIdOrName(idOrName: string): Promise<any>;
}
