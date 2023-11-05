import { useParams, Navigate, Link } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById'
import { useMemo } from 'react'

const HeroPage = () => {
  const { heroId } = useParams()
  const hero = useMemo(() => getHeroById(heroId), [heroId])

  if (!hero) {
    return (<Navigate to='/dc' replace />)
  }

  return (
    <div className='mx-10 mt-5'>
      <h1 className='text-2xl font-bold mb-5'>Hero Page</h1>
      <div className='flex'>
        <div className='flex-1'>
          <img
            className='rounded-lg'
            src={`../assets/${heroId}.jpg`}
            alt={hero.superhero}
          />
        </div>
        <ul className='flex-1 ml-5'>
          <h2 className='text-2xl font-bold mb-3'>{hero.superhero}</h2>
          <li className='text-lg font-bold flex gap-2'>Alter Ego: <p className='font-normal'>{hero.alter_ego}</p></li>
          <hr className='my-2' />
          <li className='text-lg font-bold flex gap-2'>Publisher: <p className='font-normal'>{hero.publisher}</p></li>
          <hr className='my-2' />
          <li className='text-lg font-bold flex gap-2'>First Appearance: <p className='font-normal'>{hero.first_appearance}</p></li>
          <hr className='my-2' />
          <li className='text-lg font-bold flex gap-2 mb-7'>Characters: <p className='font-normal'>{hero.characters}</p></li>
          <Link to={-1} className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-1 rounded-full'>
            Return
          </Link>
        </ul>

      </div>
    </div>
  )
}

export default HeroPage
