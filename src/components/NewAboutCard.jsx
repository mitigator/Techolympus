import React from 'react'

function NewAboutCard(props) {
    const {name,desig} =  props
  return (
    <div className=' md:border-t-[6px] border group hover:scale-[102%] hover:bg-[#e7b472] border-[#e7b472] transition duration-[0.5s] px-8 py-6 w-[350px] md:w-[300px] text-center '>
        <div className='text-[#e7b472] font-abril-fatface text-2xl group-hover:text-[#1d1d1d]'>{name}</div>
        <div className='font-mono text-white group-hover:text-[#1d1d1d]'>{desig}</div>
      
    </div>
  )
}

export default NewAboutCard
