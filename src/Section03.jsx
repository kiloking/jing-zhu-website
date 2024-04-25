import React from 'react'

const Section03 = () => {
  return (
    <div className='bg-[#F7E4D2]'>
      <div className='w-[40%] mx-auto py-[10%]' data-aos="fade-up" data-aos-duration="1000">
        <img src="./images/section03_title.png" alt="" />
      </div>
      <div className='flex gap-4 pr-[20%] pl-[3%] w-full justify-start ' data-aos="fade-up" data-aos-duration="1000">
        <div><img src="./images/work01.png" alt="" className='w-full' /></div>
        <div><img src="./images/work02.png" alt="" className='w-full' /></div>
        <div><img src="./images/work03.png" alt="" className='w-full' /></div>
      </div>
      <div className='flex gap-4 pl-[20%] pr-[3%] pt-[5%] w-full justify-end ' data-aos="fade-up" data-aos-duration="1000" >
        <div><img src="./images/work04.png" alt="" className='w-full' /></div>
        <div><img src="./images/work05.png" alt="" className='w-full' /></div>
        <div><img src="./images/work06.png" alt="" className='w-full' /></div>
      </div>
      <div className='w-full pt-[10%] px-[3%]' data-aos="fade-up" data-aos-duration="1000">
        <img src="./images/work07.png" alt="" className='w-full' />

      </div>
    </div>
  )
}

export default Section03