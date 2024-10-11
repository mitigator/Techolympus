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
     <h1
     data-aos="fade-down"
    data-aos-duration="1000"
     className="mt-[100px] text-4xl font-bold text-transparent mb-[30px]  font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">
        {eventData.title}

    </h1>
    {/* Image Section */}
    <div
    data-aos="zoom-in-up"
                    data-aos-duration="1500"
    className=" h-[40%] md:pb-auto pb-10 md:h-[50%] w-[90%] md:w-[75%]  flex items-center  justify-center overflow-hidden">
        <img src={img} alt="image" className="scale-[120%] w-[300px] object-contain md:h-[400px] md:w-[400px]" />
    </div>

    {/* Event Details Section */}
    <div className="text-[#FFD6A1] font-abril-fatface  w-[90%] md:w-[75%] flex flex-col gap-4 md:flex-row md:justify-between px-4 md:px-0 text-lg md:text-2xl">
        <div
        
        className="flex flex-col items-start w-full gap-4 md:flex-row md:items-center">
            <div
            data-aos="zoom-in"
        data-aos-duration="500"
            className='flex flex-col w-full h-full'>
                <div className='text-base font-bold bg-[#E7B472] font-mono text-[#030520] px-2 py-1'>Event Type</div>
            <p className='px-4 h-full items-center justify-center flex  text-center  py-2  border-[#E7B472] border-2  '>{eventData.eventType}</p>
            </div>
            <div
            data-aos="zoom-in"
        data-aos-duration="1000"
            className='flex flex-col w-full h-full'>
                <div className='text-base font-bold bg-[#E7B472] font-mono text-[#030520] px-2 py-1'>Team Size</div>
                <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.teamSize} Per Team</p>
                </div>
            <div 
            data-aos="zoom-in"
        data-aos-duration="1500"
            className='flex flex-col w-full h-full'>
                <div className='  text-base font-bold bg-[#E7B472] font-mono text-[#030520] px-2 py-1'>Event Venue</div>
                <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.venue}</p>
                </div>
            <div
            data-aos="zoom-in"
        data-aos-duration="2000"
            className='flex flex-col w-full h-full'>
                <div className=' text-base font-bold bg-[#E7B472] font-mono text-[#030520] px-2 py-1'>Rounds</div>
                <p className='px-4 h-full items-center justify-center flex w-full text-center  py-2  border-[#E7B472] border-2  '>{eventData.rounds}</p>
                </div>

        </div>

    </div>
    <img data-aos="fade-up"
        data-aos-duration="1000" src={end} alt="Border" className="object-contain w-[70%] md:w-auto" />


   

    {/* Description */}
    <p
    data-aos="fade-up"
   data-aos-duration="1000"
    className="border-[#E7B472] text-justify  md:border mx-8 md:mx-20 py-5  font-mono text-[#fff] text-sm md:text-lg md:text-center  md:px-10">
        {eventData.description}
    </p>
    <img  data-aos="fade-up"
   data-aos-duration="1000" src={end} alt="Border" className="object-contain w-[70%] md:w-auto" />


    {/* Prize Section */}
    <div className="text-[#FFD6A1] text-2xl text-center">
        <h2 
         data-aos="zoom-in"
   data-aos-duration="1000"
        className="text-4xl font-bold text-transparent mb-[30px]  font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">Prize Pool</h2>
        <div className='mt-5  md:mt-10 flex flex-col  font-bold text-[40px] md:text-[70px] gap-[2rem]'>
        <p className='p-5 font-atomic-age text-[#E7B472]  color-animation '>{eventData.firstPrize}</p>
        {/* <p  className='p-5 text-[#d6d6d6]     '>2nd Prize: {eventData.secondPrize}</p>
        <p  className='p-5 text-[#ab6a2a] '>3rd Prize: {eventData.thirdPrize}</p> */}
        </div>
    </div>

    <img  data-aos="fade-up"
   data-aos-duration="1000" src={end} alt="Border" className="object-contain w-[70%] md:w-auto" />

     {/* Prerequsites Section */}
     <div className="text-[#FFD6A1] text-center px-4 md:px-0 mt-6 mb-[100px] md:mb-[50px]">
        <h2
         data-aos="zoom-in"
   data-aos-duration="1000"
        className="pb-10 text-4xl font-bold text-transparent mb-[30px]  font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">Prerequisites</h2>
        <ul className="  justify-center  text-lg md:text-2xl text-justify list-none list-inside flex flex-col gap-[1rem]">
            {eventData.prerequisites.map((rule, index) => (
                <li 
                data-aos-anchor-placement="top-center" 
                data-aos="zoom-in"
                data-aos-duration={1000+100*index}
                className='mx-auto max-w-[80%] md:max-w-[60%] text-center  font-mono px-4 py-2' key={index}>{``}{rule}{``}</li>
            ))}
        </ul>
    </div>

    <img  data-aos="fade-up"
   data-aos-duration="1000" src={end} alt="Border" className="object-contain w-[70%] md:w-auto" />



    {/* Rules Section */}
    <div className="text-[#FFD6A1] text-center px-4 md:px-0 mt-6 mb-[100px] md:mb-[100px]">
        <h2  data-aos="zoom-in"
   data-aos-duration="1000" className="text-4xl font-bold text-transparent mb-[30px]  font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">Rules</h2>
        <ul className="  justify-center  text-lg md:text-2xl text-justify list-none list-inside flex flex-col gap-[1rem]">
            {eventData.rules.map((rule, index) => (
                <li
                data-aos-anchor-placement="bottom" 

                data-aos="zoom-in"
                data-aos-duration={1000+100*index}
                className='mx-auto max-w-[80%] md:max-w-[60%] text-center  font-mono px-4 py-2' key={index}>{``}{rule}{``}</li>
            ))}
        </ul>
    </div>

    <img  data-aos="fade-up"
    // data-aos-anchor-placement="top-center"
   data-aos-duration="1000" src={end} alt="Border" className="object-contain w-[70%] md:w-auto" />


    {/* Constact Section */}
    <div className="text-[#FFD6A1] text-center px-4 md:px-0 mt-6 mb-[100px] md:mb-[50px]">
        <h2  data-aos="zoom-in"
   data-aos-duration="1000" className="pb-5 text-4xl font-bold text-transparent mb-[30px]  font-abril-fatface md:text-6xl bg-clip-text bg-gradient-text">Contact Info</h2>
              <div className='flex flex-col gap-3 mx-auto bebas-neue-regular'>
                <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className='mx-auto max-w-[100%] font-bold text-center text-3xl  font-mono px-4 py-2' >{eventData.contactPerson}</div>
                <div
                data-aos="zoom-in"
                data-aos-duration="2000"
                className='text-xl font-bold  tracking-[8px]'>{eventData.contactNumber}</div>
              </div>
           
    </div>

   

    {/* External Link Button */}
    <div
     data-aos="zoom-in-up"
     data-aos-duration="1000"
     data-aos-anchor-placement="bottom"

    className="mb-[100px] md:my-[100px]">
        <a 
            href={eventData.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="  transition-all px-10 md:px-20 py-5  md:py-10 mb-10   hover:text-[#0f0f19] text-[#E7B472] text-lg md:text-3xl font-bold border-4 hover:bg-[#E7B472] border-[#E7B472] font-abril-fatface"
        >
            Register Now
        </a>

    </div>

    {/* <img src={end} alt="Border" className="object-contain w-[70%] md:w-auto" /> */}
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
        prerequisites:PropTypes.string.isRequired
    }).isRequired,
    img: PropTypes.string.isRequired,
};

export default SingleEventPage
