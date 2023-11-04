import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import HooksApp from './HooksApp.jsx'
// import SimpleForm from './02-useEffect/SimpleForm'
// import CounterApp from './01-useState/CounterApp.jsx'
// import CounterWithCustomHookl from './01-useState/CounterWithCustomHook.jsx'
import FormWhitCustomHook from './02-useEffect/FormWithCustomHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHookl /> */}
    {/* <SimpleForm /> */}
    <FormWhitCustomHook />
  </React.StrictMode>
)
