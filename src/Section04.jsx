import React from 'react'

const Section04 = () => {
  return (
    <div className='bg-[#F7E4D2] relative'>
      <div className=' absolute top-0 left-0 w-[27%]'  data-aos="fade-down" data-aos-duration="1000"><img src="./images/section_left01.png" alt="" /></div>
      <div className='w-[35%] mx-auto py-[10%]' data-aos="fade-up" data-aos-duration="1000">
        <img src="./images/section04_title.png" alt="" />
      </div>
      <div className='grid grid-cols-2 gap-8 px-[5%]'>
        <div data-aos="fade-up" data-aos-duration="1000"><img src="./images/section04_p01.png" alt="" /></div>
        <div data-aos="fade-up" data-aos-duration="1000"><img src="./images/section04_p02.png" alt="" /></div>
        <div data-aos="fade-up" data-aos-duration="1000"><img src="./images/section04_p03.png" alt="" /></div>
        <div data-aos="fade-up" data-aos-duration="1000"><img src="./images/section04_p04.png" alt="" /></div>
        <div data-aos="fade-up" data-aos-duration="1000"><img src="./images/section04_p05.png" alt="" /></div>
        <div data-aos="fade-up" data-aos-duration="1000"><img src="./images/section04_p06.png" alt="" /></div>
      </div>
      <div className='w-full pt-[5%] relative' data-aos="fade-up" data-aos-duration="1000">
      <div className=' absolute -top-44 right-0 w-[27%] -z-10 mix-blend-multiply'  data-aos="fade-left" data-aos-duration="1000"><img src="./images/section_right02.png" alt="" /></div>
        <img src="./images/section04_p07.png" alt="" className='w-full' />
      </div>
      <div className=' w-full relative z-10'>
        <img src="./images/footer_p01.png" alt="" className='w-full' />
        
      </div>
    </div>
  )
}

export default Section04