import React from 'react'
import Hero from '../components/Hero'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDocs from '../components/TopDocs'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div>
      <Hero />
      <SpecialityMenu />
      <TopDocs />
      <Banner />
    </div>
  )
}

export default Home
