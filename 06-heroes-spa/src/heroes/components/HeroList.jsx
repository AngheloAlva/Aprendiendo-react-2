/* eslint-disable react/prop-types */
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import HeroCard from './HeroCard'
import { useMemo } from 'react'

const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher])

  return (
    <div className='grid grid-cols-3 gap-y-10 gap-x-4'>
      {
        heroes.map(hero => (
          <HeroCard key={hero.id} {...hero} />
        ))
      }
    </div>
  )
}

export default HeroList
