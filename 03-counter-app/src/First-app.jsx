/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

export const FirstApp = ({ title, subtitle }) => {
  return (
    <>
      <h1 data-testid='test-title'>{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
    </>
  )
}

FirstApp.prototypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  // title: 'Titulo por defecto',
  subtitle: 'Subtitulo'
}
