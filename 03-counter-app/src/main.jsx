import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HellowWorldApp } from './hellow-world-app'
// import { FirstApp } from './first-app'
import './style.css'
import CounterApp from './Counter-app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HellowWorldApp /> */}
    {/* <FirstApp title='Titulo epico' /> */}
    <CounterApp value={100} />
  </React.StrictMode>
)
