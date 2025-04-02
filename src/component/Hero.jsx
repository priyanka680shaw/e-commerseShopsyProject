import React from 'react'
import img1 from "/images/banner1.png"
import img2 from "/images/banner2.png"
import img3 from "/images/banner3.png"
import Slider from 'react-slick'
const Hero = () => {
  const imageList = [
    {
        id  :1,
        img : img1,
        title : "Up to 50% off on all Men's Wear" , 
        descreption : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
    },
    {
      id  :2,
      img : img2,
      title : "Up to 50% off on all Women's Wear" , 
      descreption : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
  },
  {
    id  :3,
    img : img3,
    title : "Up to 50% off on all Kids's Wear" , 
    descreption : "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
},

  ]




  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
   
  };   

  return (
    <>
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px]  bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
      {/* background pattern */}
      <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
      {/* hero section */}
      <div className='pb-8 container mx-auto w-[90%]  sm:pb-0'>
        <Slider {...settings}>
          {
            imageList?.map((data , idx)=>{
                return(
                  <div key={data.id}>
          <div className='grid grid-cols-1 sm:grid-cols-2 px-4'>
            {/* text content section */}
            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
              <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold' 
              data-aos="zoom-out" data-aos-once = "true" data-aos-duration = "500">{data.title}</h1>
              <p className='text-sm' data-aos="fade-up" data-aos-once = "true" data-aos-duration = "500" data-aos-delay ="100">
               {data.descreption}
              </p>
              <div>
                <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full '>
                  Order Now
                </button>
              </div>
            </div>
            {/* image section */}
          <div className='order-1 sm:order-2'>
          <div className='relative z-10' data-aos="zoom-in" data-aos-once = "true">
              <img  src= {data.img} alt = "bannerImage" data-aos="flip-right" className='w-[350px] h-[350px] sm:w-[450px] sm:h-[450px]  object-contain mx-auto sm:scale-125 lg:scale-120'/>
            </div>
          </div>
          </div>
        </div>
                )
            })
          }
        
        </Slider>
        
      </div>
    </div>
    </>
  )
}

export default Hero