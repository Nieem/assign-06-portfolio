import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header/>
        <Banner/>
        <Navbar/>
        <About/>
        <Services/>
        <Work/>
        <Contact/>
        <div className='h-[4000px]'></div>
        </div>
    </>
  )
}

export default App
