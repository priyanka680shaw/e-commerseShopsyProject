import React from 'react'
import {Hero , Products , BestProducts , Banner , Suscribe , TopSelligProducts , Testimonial} from '../component/indexComponent'
const Home = () => {
  return (
    <>
  <div className='dark:bg-gray-950 dark:text-white duration-200 w-full h-auto'>

  <Hero/>
     <Products/>
     <BestProducts/>
     <Banner/>
     <Suscribe/>
     {/* <TopSelligProducts/> */}
     <Testimonial/>

  </div>
    
    </>
  )
}

export default Home