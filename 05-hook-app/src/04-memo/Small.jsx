import { memo } from 'react'

// eslint-disable-next-line react/prop-types
const Small = memo(({ value }) => {
  console.log('Small component rendered')
  return (
    <small>{value}</small>
  )
})

Small.displayName = 'Small'

export default Small
