export const getGifs = async (category) => {
  const API_KEY = 'hZEWkFARsMLv8I23zCebHyYNkIC7c5ZI'
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=15`

  const response = await fetch(URL)
  const { data } = await response.json()

  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url
  }))

  return gifs
}
