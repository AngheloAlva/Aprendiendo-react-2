import { useEffect, useState } from 'react'

const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMouseMove = (event) => {
      const coors = { x: event.x, y: event.y }
      setCoords(coors)
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <>
      <h3>Eres genial</h3>
      {JSON.stringify(coords)}
    </>
  )
}

export default Message
