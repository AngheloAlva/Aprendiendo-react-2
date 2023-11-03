import { PropTypes } from 'prop-types'

import GifItem from './GifItem'
import { useFecthGifs } from '../hooks/useFetchGifs'

// eslint-disable-next-line react/prop-types
const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFecthGifs(category)

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Loading...</h2>}
      <div className='card-grid'>
        {gifs.map(({ id, title, url }) => (
          <GifItem title={title} url={url} key={id} />
        ))}
      </div>
    </>
  )
}

export default GifGrid

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
