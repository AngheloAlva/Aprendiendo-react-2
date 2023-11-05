/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters }) => {
  const heroImageUrl = `./assets/${id}.jpg`

  return (
    <div className='max-w-sm rounded overflow-hidden shadow-lg pb-3'>
      <img className='w-full' src={heroImageUrl} alt={superhero} />
      <div className='px-6 py-4'>
        <Link to={`/hero/${id}`} className='mb-2 text-xl font-bold'>{superhero}</Link>
        <p className='text-base text-gray-700'>
          {alter_ego}
        </p>
        {
          (alter_ego !== characters) && <p className='text-base text-gray-700'>{characters}</p>
        }
        <p className='text-sm text-gray-600'>
          {first_appearance}
        </p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block px-3 py-1 mr-2 text-sm font-semibold text-gray-700 bg-gray-200 rounded-full'>
          {publisher}
        </span>
      </div>
    </div>
  )
}

export default HeroCard
