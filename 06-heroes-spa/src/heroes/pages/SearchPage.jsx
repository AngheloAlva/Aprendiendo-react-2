import { Navigate } from 'react-router-dom'
import HeroCard from '../components/HeroCard'
import { useForm } from '../hooks/useForm'
import { useState } from 'react'
import queryString from 'query-string'
import { getHeroesByName } from '../helpers/getHeroesByName'

const SearchPage = () => {
  const [toNavigate, setToNavigate] = useState(false)
  const query = queryString.parse(window.location.search)
  const { q = '' } = query
  const { searchText, onInputChange } = useForm({
    searchText: ''
  })

  const heroes = getHeroesByName(q)

  const onSearchSubmit = (event) => {
    event.preventDefault()
    if (searchText.trim().length <= 3) return

    setToNavigate(true)
  }

  return (
    <div className='mt-5 mx-10'>
      <h1 className='text-2xl font-bold'>Search Page</h1>
      <hr className='mt-3 mb-5' />

      <div className='flex gap-10'>
        <div onSubmit={onSearchSubmit} className='flex-1'>
          <h2 className='text-xl font-bold'>Search Form</h2>
          {toNavigate && <Navigate to={`/search?q=${searchText}`} replace />}
          <form onSubmit={onSearchSubmit}>
            <input
              type='text'
              placeholder='Find your hero'
              value={searchText}
              name='searchText'
              onChange={onInputChange}
              className='w-full border border-gray-300 rounded-md px-5 py-2 my-1 focus:outline-none focus:border-blue-400'
            />
            <button type='submit' className='w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline'>
              Search
            </button>
          </form>
        </div>

        <div className='flex-1'>
          <h2 className='text-xl font-bold'>Results</h2>
          {
            heroes.length === 0 && (
              <div className='flex flex-col gap-2 text-white font-semibold text-lg bg-red-400 rounded-lg px-5 py-5'>
                No results found for &quot;{q}&quot;
              </div>
            )
          }

          {
            q !== '' && (
              heroes.map((hero) => (
                <HeroCard key={hero.id} {...hero} />
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage
