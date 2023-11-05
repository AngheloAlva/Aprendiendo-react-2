import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks'

const PokemonApp = () => {
  const dispatch = useDispatch()
  const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons)

  useEffect(() => {
    dispatch(getPokemons())
  }, [dispatch])

  return (
    <>
      <div>PokemonApp</div>
      <div>Page: {page}</div>

      {isLoading && <div>Loading...</div>}
      <ul>
        {
          pokemons.map(({ name }) => (
            <li key={name}>{name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default PokemonApp
