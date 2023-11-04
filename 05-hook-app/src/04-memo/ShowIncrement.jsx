// eslint-disable-next-line react/prop-types
const ShowIncrement = ({ increment }) => {
  return (
    <button className='btn btn-outline-info' onClick={() => { increment(5) }}>
      Increment
    </button>
  )
}

export default ShowIncrement
