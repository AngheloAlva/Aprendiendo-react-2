import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/counterSlice'
import { PokemonSlice } from './slices/pokemon/pokemonSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: PokemonSlice.reducer
  }
})
