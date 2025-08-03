<<<<<<< HEAD
import React from 'react';
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from './components/Hero/Hero.jsx';
import About from './components/About/About.jsx';
import Skill from './components/Skill/Skill.jsx';
import Project from './components/project/Project.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';


const App = () => {
  return (
    <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
=======
import React from 'react'
import Weather from './components/Weather'

const App = () => {
  return (
    <div className='app'>
      <Weather />
>>>>>>> 145e06e (first commit)
    </div>
  )
}

export default App