import React from 'react'
import HomeCarousel from './Section/HomeCarousel'
import NewsSection from './Section/NewsSection'
import InformationSection from './Section/InformationSection'
import Introduce from './Section/Introduce'

const Home = () => {
  return (
    <div className=''>
      <HomeCarousel />
      <Introduce />
      <InformationSection />
      <NewsSection />
    </div>
  )
}

export default Home
