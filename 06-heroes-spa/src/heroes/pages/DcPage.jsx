import HeroList from '../components/HeroList'

const DcPage = () => {
  return (
    <div className='mx-10 my-5'>
      <h1 className='text-2xl font-bold mb-5'>DcPage</h1>
      <HeroList publisher='DC Comics' />
    </div>
  )
}

export default DcPage
