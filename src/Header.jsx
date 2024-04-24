import React from 'react'

function Header() {
  return (
    <div 
      className=' relative'
    >
      <img src='/images/header_bg.png' alt="" className='w-full' data-aos="fade" data-aos-duration="1000"/>
      <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/12 '>
        <img src='/images/header_logo.png' alt="" className='w-[100%] mx-auto' data-aos="fade-up" data-aos-delay="200" data-aos-duration="800"/>
        <img src='/images/header_title.png' alt="" className='my-[13%] w-3/4 mx-auto' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"/>
      </div>
      <div className='w-full'>
        <img src="/images/header_subtitle.png" alt="" />
      </div>
    </div>
  )
}

export default Header