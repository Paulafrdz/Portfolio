import { useState } from 'react'
import ContactButton from './components/Btn/Contact.jsx';
import ProjectCard from './components/Card/ProjectCard.jsx';
import "./components/styles/Variables.css"
import './App.css'
import Intro from './components/Intro/Intro.jsx';
import StoryCard from './components/StoryCard/StoryCard.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactButton />
      <Intro/>
      <StoryCard/>
      <Intro/>

      
    </>
  )
}

export default App
