import React from 'react'
import HomeCarousel from './Section/HomeCarousel'
import NewsSection from './Section/NewsSection'
import InformationSection from './Section/InformationSection'

const Home = () => {
  return (
    <div className=''>
      <HomeCarousel />
      <InformationSection />
      <NewsSection />
    </div>
  )
}

export default Home
