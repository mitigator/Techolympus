import React from 'react'
import bg from '../assets/bgleaf.svg';
import end from '../assets/borderline.svg';
import PropTypes from 'prop-types'; 


function SingleEventPage(props) {
    const { eventData,img } = props;
  return (
    <div
    className="bg-[#0f0f19] min-h-screen bg-bgleaf bg-no-repeat bg-cover bg-center bg-fixed flex flex-col items-center gap-10  pt-20"
    style={{ backgroundImage: `url(${bg})` }}
>
     {/* Title */}
     <h1 className="mt-[50px] text-4xl font-bold text-transparent mb-[-30px]  font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">
        {eventData.title}

    </h1>
    {/* Image Section */}
    <div className=" h-[40%] md:h-[50%] w-[90%] md:w-[75%]  flex items-center  justify-center overflow-hidden">
        <img src={img} alt="image" className="scale-[120%] w-[650px] object-contain md:h-[400px] md:w-[400px]" />
    </div>

    {/* Event Details Section */}
    <div className="text-[#FFD6A1] font-abril-fatface  w-[90%] md:w-[75%] flex flex-col gap-4 md:flex-row md:justify-between px-4 md:px-0 text-lg md:text-2xl">
        <div className="flex flex-col items-start w-full gap-4 md:flex-row md:items-center">
            <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.eventType}</p>
            <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.teamSize} Per Team</p>
            <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.venue}</p>
            <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.rounds} Rounds</p>
        </div>

    </div>
    <img src={end} alt="Border" className="object-contain" />


   

    {/* Description */}
    <p className="border-[#E7B472] md:border mx-5 md:mx-20 py-5  font-mono text-[#fff] text-sm md:text-lg text-center  md:px-10">
        {eventData.description}
    </p>
    <img src={end} alt="Border" className="object-contain" />


    {/* Prize Section */}
    <div className="text-[#FFD6A1] text-2xl text-center">
        <h2 className="pb-10 text-4xl font-bold text-transparent font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">Prizes</h2>
        <div className=' mt-10 flex flex-col font-mono font-bold text-[30px] md:text-[60px] gap-[2rem]'>
        <p className='p-5 text-[#FFD700]   '>1st Prize: {eventData.firstPrize}</p>
        <p  className='p-5 text-[#d6d6d6]     '>2nd Prize: {eventData.secondPrize}</p>
        <p  className='p-5 text-[#ab6a2a] '>3rd Prize: {eventData.thirdPrize}</p>
        </div>
    </div>

    <img src={end} alt="Border" className="object-contain" />


    {/* Rules Section */}
    <div className="text-[#FFD6A1] text-center px-4 md:px-0 mt-6 mb-[100px] md:mb-[150px]">
        <h2 className="pb-5 text-5xl font-bold text-transparent font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">Rules</h2>
        <ul className=" justify-center  text-lg md:text-2xl text-justify list-none list-inside flex flex-col gap-[1rem]">
            {eventData.rules.map((rule, index) => (
                <li className='mx-auto max-w-[80%] md:max-w-[60%] text-center border font-mono border-[#FFD6A1] px-4 py-2' key={index}>{rule}</li>
            ))}
        </ul>
        <div className=" mx-auto px-10 text-center w-fit flex flex-col items-start gap-5 mt-10 text-[#FFD6A1] py-5 bg-[#00000038] font-abril-fatface md:items-center ">
            <p className='w-full text-xl text-center'>Contact Person</p>
            <div className='flex flex-row items-center gap-2'> 

            <p className='text-center'>{eventData.contactPerson}<br/>{eventData.contactNumber}</p>
            {/* <p className='w-full px-4 py-2 text-center '></p>
            <p className='w-full px-4 py-2 text-center ' >{eventData.contactNumber}</p> */}
            </div>
        </div>
    </div>
   

    {/* External Link Button */}
    <div className="mb-[100px] md:mb-[200px]">
        <a 
            href={eventData.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className=" px-10 md:px-20 py-5  md:py-10 mb-10   hover:text-[#0f0f19] text-[#E7B472] text-lg md:text-3xl font-bold border-4 hover:bg-[#E7B472] border-[#E7B472] font-abril-fatface transition"
        >
            Register Now
        </a>

    </div>

    {/* <img src={end} alt="Border" className="object-contain" /> */}
</div>
  )

  
}
SingleEventPage.propTypes = {
    eventData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        eventType: PropTypes.string.isRequired,
        teamSize: PropTypes.string.isRequired,
        venue: PropTypes.string.isRequired,
        rounds: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        firstPrize: PropTypes.string.isRequired,
        secondPrize: PropTypes.string.isRequired,
        thirdPrize: PropTypes.string.isRequired,
        rules: PropTypes.arrayOf(PropTypes.string).isRequired,
        contactPerson: PropTypes.string.isRequired,
        contactNumber: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    }).isRequired,
    img: PropTypes.string.isRequired,
};

export default SingleEventPage
