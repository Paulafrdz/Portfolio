import { useState } from 'react'
import ContactButton from './components/Btn/Contact.jsx';
import "./components/styles/Variables.css"

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
            <ContactButton />
    </>
  )
}

export default App
