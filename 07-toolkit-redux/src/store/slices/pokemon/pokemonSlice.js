import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  page: 0,
  pokemons: [],
  isLoading: false
}

export const PokemonSlice = createSlice({
  name: 'Pokemon',
  initialState,
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      state.isLoading = false
      state.page += action.payload.page
      state.pokemons = action.payload.pokemons
    }
  }
})

export const { startLoadingPokemons, setPokemons } = PokemonSlice.actions
