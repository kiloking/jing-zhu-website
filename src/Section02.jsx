import React from 'react'

const Section02 = () => {
  return (
    <div className='bg-[#F7E4D2] relative'>
      <div className='flex pt-[10%]'>
        <div className='px-[6%] pt-[0%] w-1/2'>
          <img src="./images/section02_title.png" alt="" data-aos="fade-right" data-aos-duration="1000"/>
        </div>
        <div className='w-[50%] ml-auto' data-aos="fade-up" data-aos-duration="1000">
          <img src="./images/section02_p01.png" alt=""  className='w-full'/>
        </div>

      </div>
      <div className='flex pt-[0%] '>
        <div className='w-[50%] -mt-[10%] ' data-aos="fade-up" data-aos-duration="1000">
          <img src="./images/section02_p02.png" alt="" className='w-full' />
        </div>
        <div className='px-[5%] flex items-center w-1/2 ' data-aos="fade-left" data-aos-duration="1000">
          <img src="./images/section02_title02.png" alt="" />
        </div>


      </div>
      <div className=' absolute right-0 -bottom-[50%] w-[20%]'>
        <img src="./images/section_right01.png" alt="" />
      </div>
    </div>
  )
}

export default Section02