import { Module } from '@nestjs/common';
import { PokemonController } from './presentation/controllers/pokemon.controller';

import * as useCase from './application/use-cases';
import { PokemonRepositoryImpl } from './infrastructure/pokemon.repository.impl';

@Module({
  controllers: [PokemonController],
  providers: [
    { provide: 'PokemonRepository', useClass: PokemonRepositoryImpl },
    useCase.GetPokemonsByColorIdUseCase,
    useCase.GetPokemonByIdOrNameUseCase,
    useCase.GetPokemonsPaginatedUseCase,
  ],
})
export class PokemonModule {}
