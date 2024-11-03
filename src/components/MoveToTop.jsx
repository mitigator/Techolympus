import React from 'react'

function MoveToTop() {
    const movetoTop=()=>{
        window.scrollTo({ top: 0, behavior: "smooth" });

    }
  return (
    <div className='flex justify-end px-10 py-10 '>
                <div 
                 data-aos="zoom-in"
                 data-aos-duration="1000"
                onClick={movetoTop} className='p-2 bg-[#e7b472] flex cursor-pointer scale-animation'>
                <svg height={20} width={20} viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                </div>
    </div>
  )
}

export default MoveToTop
