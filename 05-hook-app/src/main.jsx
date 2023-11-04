import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// import MemoHook from './04-memo/MemoHook'
// import HooksApp from './HooksApp.jsx'
// import SimpleForm from './02-useEffect/SimpleForm'
// import CounterApp from './01-useState/CounterApp.jsx'
// import CounterWithCustomHookl from './01-useState/CounterWithCustomHook.jsx'
// import FormWhitCustomHook from './02-useEffect/FormWithCustomHook'
// import FocusScreen from './03-useRef/FocusScreen'
// import Memorize from './04-memo/Memorize'
// import CallbackHook from './04-memo/CallbackHook'
import { Padre } from './05-tarea-memo/Padre'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    {/* <CounterApp /> */}
    {/* <CounterWithCustomHookl /> */}
    {/* <SimpleForm /> */}
    {/* <FormWhitCustomHook /> */}
    {/* <FocusScreen /> */}
    {/* <Memorize /> */}
    {/* <MemoHook /> */}
    {/* <CallbackHook /> */}
    <Padre />
  </React.StrictMode>
)
