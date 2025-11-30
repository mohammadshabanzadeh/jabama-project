import React from 'react'
import Banner from '../components/Banner'
import HouseList from '../components/HouseList'

function Home() {
  return (
    <div className='overflow-hidden'>
      <Banner />
      <HouseList />
    </div>
  )
}

export default Home