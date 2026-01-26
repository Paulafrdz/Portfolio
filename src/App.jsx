import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, MotionConfig } from "framer-motion";
import ContactButton from './components/Btn/Contact.jsx';
import LayoutCards from "./components/LayoutCard/LayoutCards.jsx";
import "./components/styles/Variables.css"
import './App.css'
import Intro from './components/Intro/Intro.jsx';
import StoryCard from './components/StoryCard/StoryCard.jsx';
import { stockeeProject, stockeeCards } from "./projects/Stockee.js";
import { oliwaProject, oliwaCards } from "./projects/Oliwa.js";
import { pelusaProject, pelusaCards } from "./projects/Pelusa.js";
import ProjectHeader from './components/ProjectHeader/ProjectHeader.jsx';
import TechToProjectsScene from './components/TechToProjectsScene/TechToProjectsScene.jsx';


function App() {
  const [count, setCount] = useState(0)
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div className="container">
      <div className="page">
        <ContactButton />
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <Intro />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <StoryCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <TechToProjectsScene/>
        </motion.div>

        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <ProjectHeader {...stockeeProject} />
          <LayoutCards cards={stockeeCards} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <ProjectHeader {...oliwaProject} />
          <LayoutCards cards={oliwaCards} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <ProjectHeader {...pelusaProject} />
          <LayoutCards cards={pelusaCards} />
        </motion.div>
      </div>
    </div>
  );

}

export default App
