import React from 'react'

function NewAboutCard(props) {
    const {name,desig} =  props
  return (
    <div className=' md:border-t-[6px] border hover:scale-[102%] border-[#e7b472] px-8 py-6 w-[340px] md:w-[250px] text-center '>
        <div className='text-[#e7b472] font-abril-fatface text-2xl'>{name}</div>
        <div className='font-mono text-white'>{desig}</div>
      
    </div>
  )
}

export default NewAboutCard
