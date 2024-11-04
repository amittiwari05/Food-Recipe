import React from 'react'
import Navbar  from './Navbar'
import PopularSlider from './PopularSlider'
import Trendingslider from './Trendingslider'

const Home = () => {
  return (
    <> 
    <div className="main">
    <Navbar/>
    <PopularSlider/>
    <Trendingslider/>
    </div>
    </>
  )
}

export default Home