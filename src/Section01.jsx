import React,{useState,useRef,useEffect} from 'react'

function Section01() {
  const [isDisplay, setIsDisplay] = useState(true);
  const scrollContainerRef = useRef(null);

  const handleResize = () => {
    const scrollContainer = scrollContainerRef.current;
    const halfWindowWidth = window.innerWidth / 2;
    scrollContainer.scrollLeft = halfWindowWidth +90;
  };
  useEffect(() => {
    // 初始化時設置一次
    handleResize();

    // 監聽視窗大小改變事件
    window.addEventListener('resize', handleResize);

    return () => {
      // 組件卸載時移除事件監聽
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div 
      className=' w-full  relative  bg-center bg-cover bg-no-repeat'
      data-aos="fade" data-aos-duration="1000"
    >
      {isDisplay ?
          <div className='bg-[#00000080] w-full h-full sm:min-h-60vh  absolute top-0 z-10 flex items-end justify-center lg:hidden' onClick={()=>setIsDisplay(!isDisplay)}>
            <div className="bottom-0 w-4/5 sm:w-3/5 items-center pb-20">
              <img src={'./images/section_icon1.png'} alt="" className='w-full'/>

              <img src={'./images/section_icon2.png'} alt="" className='animate-slide-flow tesxt-scenter block mx-auto w-1/5'/>
        
            </div>
          </div> : ''
        }
      <div className='aspect-[747/1000]  w-full  relative  z-0  lg:hidden overflow-x-scroll ' ref={scrollContainerRef}> 
        <div className='w-[300vw]  h-full lg:min-h-[70vh] overflow-x-hidden overflow-y-hidden bg-bottom bg-cover bg-no-repeat transition-width'
          style={{ backgroundImage: `url('./images/section01_bg.png')`}}
        >
        </div>


      </div>  
      <div
        className='w-full bg-cover bg-no-repeat bg-center hidden lg:block  relative'
      //  style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/release/section02_bg.png'})`}}
       >
        <img src={'./images/section01_bg.png'} alt="" className='w-full' />
      </div>

    </div>
  )
}

export default Section01