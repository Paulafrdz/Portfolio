import { useState } from 'react'
import ContactButton from './components/Btn/Contact.jsx';
import ProjectCard from './components/Card/ProjectCard.jsx';
import "./components/styles/Variables.css"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactButton />
       <section style={{ display: "flex", gap: "32px",}}>
      <ProjectCard
        index="01"
        title="IT recruiting"
        description="We develop a customised search strategy for each client, taking into account business needs and objectives."
        image="https://i.pinimg.com/736x/da/60/4e/da604eb933ae9e9f86a0359e582e1633.jpg"
        variant="dark"
      />

      <ProjectCard
        index="02"
        title="HR consulting"
        description="We examine your recruitment strategy, find problems and suggest solutions."
        image="https://i.pinimg.com/736x/da/60/4e/da604eb933ae9e9f86a0359e582e1633.jpg"
        variant="light"
      />
      <ProjectCard
        index="03"
        title="HR consulting"
        description="We examine your recruitment strategy, find problems and suggest solutions."
        image="https://i.pinimg.com/736x/da/60/4e/da604eb933ae9e9f86a0359e582e1633.jpg"
        variant="medium"
      /><ProjectCard
        index="02"
        title="HR consulting"
        description="We examine your recruitment strategy, find problems and suggest solutions."
        image="https://i.pinimg.com/736x/da/60/4e/da604eb933ae9e9f86a0359e582e1633.jpg"
        variant="light"
      /><ProjectCard
        index="02"
        title="HR consulting"
        description="We examine your recruitment strategy, find problems and suggest solutions."
        image="https://i.pinimg.com/736x/da/60/4e/da604eb933ae9e9f86a0359e582e1633.jpg"
        variant="light"
      />
    </section>
        
      
    </>
  )
}

export default App
