import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Services from './components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <h1 className='font-bold'>hello</h1>
        <Header/>
        <Banner/>
        <Navbar/>
        <About/>
        <Services/>
        <Work/>
        <Contact/>
        </div>
    </>
  )
}

export default App
