import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/controllers/pokemon.controller';

import { GetPokemonByIdOrNameUseCase } from './application/use-cases/get-pokemon-by-id-or-name.use-case';
import { GetPokemonsByColorIdUseCase } from './application/use-cases/get-pokemons-by-id-color.use-case';
import { PokemonRepositoryImpl } from './infrastructure/pokemon.repository.impl';

@Module({
  controllers: [PokemonController],
  providers: [
    { provide: 'PokemonRepository', useClass: PokemonRepositoryImpl },
    GetPokemonsByColorIdUseCase,
    GetPokemonByIdOrNameUseCase,
  ],
})
export class PokemonModule {}
