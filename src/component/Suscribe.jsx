import React from 'react'

const Suscribe = () => {
  return (
    <>
        <div className='outline-none mb-20 bg:gray-100 dark:bg-gray-800 text-white bg-gradient-to-r to-primary from-secondary'  data-aos = "zoom-in">
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl  font-semibold'>
                        Get Notified About New Products
                    </h1>
                    <input type='text' data-aos = "fade-up" placeholder='Enter Your Email ' 
                      className='w-full p-3 outline-none focus:ring-0 focus:border-transparent text-primary rounded-lg'
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Suscribe