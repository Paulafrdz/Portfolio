import { useState } from 'react'
import { motion, useScroll, useTransform } from "framer-motion";
import ContactButton from './components/Btn/Contact.jsx';
import LayoutCards from "./components/LayoutCard/LayoutCards.jsx";
import "./components/styles/Variables.css"
import './App.css'
import Intro from './components/Intro/Intro.jsx';
import StoryCard from './components/StoryCard/StoryCard.jsx';
import { stockeeProject, stockeeCards } from "./projects/Stockee.js";
import { oliwaProject, oliwaCards } from "./projects/Oliwa.js";
import { pelusaProject, pelusaCards } from "./projects/Pelusa.js";
import TechStack from './components/TechStack/TechStack.jsx';
import ProjectHeader from './components/ProjectHeader/ProjectHeader.jsx';



function App() {
  const [count, setCount] = useState(0)
  const { scrollYProgress } = useScroll();


  return (
    <>
      <div className="container">
        <motion.div className="page">
          <ContactButton />
          <Intro />
          <StoryCard />
          <TechStack />

          <ProjectHeader {...stockeeProject} />
          <LayoutCards cards={stockeeCards} />

          <ProjectHeader {...oliwaProject} />
          <LayoutCards cards={oliwaCards} />

          <ProjectHeader {...pelusaProject} />
          <LayoutCards cards={pelusaCards} />

        </motion.div>
      </div>
    </>
  )
}

export default App
