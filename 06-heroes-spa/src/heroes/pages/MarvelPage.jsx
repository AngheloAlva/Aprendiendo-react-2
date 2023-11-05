import HeroList from '../components/HeroList'

const MarvelPage = () => {
  return (
    <div className='mx-10 my-5'>
      <h1 className='text-2xl font-bold mb-5'>MarvelPage</h1>
      <HeroList publisher='Marvel Comics' />
    </div>
  )
}

export default MarvelPage
