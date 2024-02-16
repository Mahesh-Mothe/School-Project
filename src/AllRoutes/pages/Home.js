import React from 'react'
import NavBar from '../../navbar/NavBar'
import Carousel from '../../courosel/Courosel'
import Question from '../../Question/Question'
import Footer from '../../footer/Footer'
import NavBar2 from '../../navbar/NavBar2'
import Bulletin from '../../Bulletin/Bulletin'
import Advantage from '../../Advantage/Advantage'
import Gallery from '../../Gallery/Gallery'

export default function Home() {
  return (
    <div>
    <NavBar />
    <NavBar2 />
     <Carousel />
     <Bulletin />
     <Question />
     <Advantage />
     <Gallery />
     <Footer />
    </div>
  )
}
