import React, { useEffect } from 'react'
import AOS from 'aos'
import { Content1 } from './views/Content1'
import { Experiences } from './views/Experiences'
import { Footer } from './views/Footer'
import { GetInTouch } from './views/GetInTouch'
import { Navbar } from './views/Navbar'
import { Projects1 } from './views/Projects1'

export default function App() {
  useEffect(()=> {
    AOS.init()
  },[])
  return (
    <>
    <Navbar/>
    <Content1/>
    <Projects1/>
    <Experiences/>
    <GetInTouch/>
    <Footer/>
    </>
  )
}
