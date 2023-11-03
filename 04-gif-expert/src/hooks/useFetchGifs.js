import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'

export const useFecthGifs = (category) => {
  const [gifs, setGifs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getGifs(category)
      .then((gifs) => {
        setGifs(gifs)
        setIsLoading(false)
      })
  }, [category])

  return { gifs, isLoading }
}
