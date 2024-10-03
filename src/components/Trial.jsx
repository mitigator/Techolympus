import React from 'react'

function Trails() {
  return (
    <div className="relative bg-[url('./assets/img.svg')] bg-contain bg-no-repeat hover:scale-105 transition-all w-[385px] h-[297px] flex justify-center items-center cursor-pointer">
        <div className="w-[210px] h-[210px] bg-[url('./assets/img2.svg')] bg-center bg-contain bg-no-repeat relative flex justify-center items-center">
          <p className="text-[#E7B472] font-primary text-[20px] text-nowrap">
            Hera's Trails
          </p>
        </div>
      </div>
  )
}

export default Trails