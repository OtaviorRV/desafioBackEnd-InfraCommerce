import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/controllers/pokemon.controller';
import { PokemonRepositoryImpl } from './infrastructure/pokemon.repository.impl';
import { GetPokemonByIdOrNameUseCase } from './application/use-cases/get-pokemon-by-id-or-name.use-case';

@Module({
  controllers: [PokemonController],
  providers: [
    { provide: 'PokemonRepository', useClass: PokemonRepositoryImpl },
    GetPokemonByIdOrNameUseCase,
  ],
})
export class PokemonModule {}
