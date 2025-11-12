import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Timer from '../components/TimerSection-subcomponents/Timer'
import NotifyMe from '../components/NotifyMe'
import Footer from '../components/Footer'

const ComingSoon = () => {
  return (
    <div className='w-dvw m-0'>
      <Header />
      < Timer />
      <HeroSection />
      <NotifyMe />
      <Footer />
        
    </div>
  )
}

export default ComingSoon
