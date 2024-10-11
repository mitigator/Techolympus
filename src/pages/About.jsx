import Navbar from '../components/Navbar';
import bg from '../assets/aboutBackground.svg'; 
import light from '../assets/light.svg';
import logo from '../assets/aboutLogo.svg';
import border from '../assets/borderline.svg';
import NewAboutCard from '../components/NewAboutCard';
import Footer from '../components/Footer';


const About = () => {
  return (
    <div className='bg-[#0f0f19]'>
      <Navbar  activePage = "about"/>
      <div 
        className="relative h-full pt-20 bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed' }} 
      >
        {/* Overlay Background */}
        <div 
          className="absolute inset-0 h-full bg-cover md:bg-contain bg-[#0f0f19] opacity-0" 
          style={{ backgroundImage: `url(${light})`, backgroundAttachment: 'fixed' }} 
        ></div>

        {/* Centered Content */}
        <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col gap-8 md:gap-10 items-center z-10 text-[#e7b472] pt-16 px-4'>
          <h1 className='text-[#e7b472] hidden md:block text-3xl md:text-[50px] mb-6 font-abril-fatface pt-10 text-center  break-words md:w-auto'>CHRIST ( Deemed To Be University )</h1>
          <div className='flex flex-col md:hidden'>
          <h1 className='text-[#e7b472] text-3xl md:text-[50px]  font-abril-fatface pt-10 text-center  break-words md:w-auto'>CHRIST</h1>
          <h1 className='text-[#e7b472] text-3xl md:text-[50px] mb-6 font-abril-fatface  text-center  break-words md:w-auto'>( Deemed To Be University )</h1>

          </div>
          <img data-aos="fade-up" data-aos-duration="1000" src={logo} alt="About Logo" className='' />

         <div
         data-aos="fade-up"
        data-aos-duration="1000"
         className='fle flex-col font-mono  border border-[#e7b472] p-10 text-white md:w-[75%] text-center justify-center'
         >

          <p className='w-full '>
            Welcome to CHRIST (Deemed to be University), a prestigious institution renowned for its pioneering role in Indian higher education. Established as Christ College in 1969, the institution has led the way in offering innovative curricula, promoting academic discipline, and delivering holistic education while adopting global higher education standards, all thanks to its creative and dedicated faculty.
          </p>
          <br/>
          <p className='w-full '>
            Join us as we celebrate this vibrant legacy at our upcoming event!
          </p>
         </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1000"  className='flex justify-center w-full mt-[5rem]'>

<img src={border}  alt="Border" className="object-contain" loading="lazy" />
</div>


        <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col gap-8 md:gap-10 items-center z-10 text-[#e7b472] pt-16 px-4'>
          <h1 className='text-[#e7b472] text-3xl md:text-[50px] mb-6 font-abril-fatface pt-10 text-center  leading-relaxed'>Department of Computer Science<br/>Central Campus, Bangalore</h1>
          <div
          data-aos="fade-up" data-aos-duration="1000" 
         className='fle flex-col font-mono text-center border border-[#e7b472] p-10 text-white md:w-[75%]  justify-center'
         >
          
          <p className='w-full '>
            The Department of Computer Science at CHRIST (Deemed to be University), Bangalore, established in 1990, is committed to shaping skilled computer professionals equipped with strong ethical values and a deep sense of social responsibility. Over the past two decades, we have steadily built our expertise in cutting-edge computer science education and research while maintaining a focus on fostering global perspectives grounded in Indian values.
          </p>
          <br/>
          <p className='w-full '>
            Our mission is to prepare young minds for the evolving challenges of the IT industry, nurturing them to become leaders who will shape the future with both technical excellence and human compassion.
          </p>
          </div>
        </div>
    <div data-aos="fade-up" data-aos-duration="1000"  className='flex justify-center w-full mt-[5rem]'>

        <img src={border} alt="Border" className="object-contain" loading="lazy" />
    </div>


        {/* Team Section */}
        <div   className='flex flex-col items-center gap-10 pb-20 overflow-x-hidden md:gap-20'>
          <h1 data-aos="fade-up" data-aos-duration="1000"  className='text-[#e7b472] text-3xl md:text-[50px] mb-6 font-abril-fatface pt-10 text-center'>Meet Our Team</h1>
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col gap-10 md:flex-row justify-evenly md:gap-12'>
            <NewAboutCard name="Dr. Ashok Immanuel" desig = "Head Of Department"/>
            <NewAboutCard name="Dr. Chandra J" desig = "Program Coordinator"/>
          </div>
          
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col gap-10 md:flex-row justify-evenly md:gap-44'>
            <NewAboutCard name="Dr. Cynthia T" desig = "Fest Coordinator"/>
            <NewAboutCard name="Dr. Sudhakar T" desig = "Fest Coordinator"/>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col flex-wrap gap-10 md:flex-row justify-evenly md:gap-20'>
          <NewAboutCard name="Satyam Jhawar" desig = "Core Team Member"/>
          <NewAboutCard name="Mohit P" desig = "Core Team Member"/>
          <NewAboutCard name="Punith Raj" desig = "Core Team Member"/>


          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col flex-wrap gap-10 md:flex-row justify-evenly md:gap-20'>
          <NewAboutCard name="Anshika Yadav" desig = "Core Team Member"/>
          <NewAboutCard name="Ansh Bhandari" desig = "Core Team Member"/>
          <NewAboutCard name="Aditi Patel" desig = "Core Team Member"/>
          <NewAboutCard name="Hitesh Salimath" desig = "Core Team Member"/>

          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col flex-wrap gap-10 md:flex-row justify-evenly md:gap-20'>
          <NewAboutCard name="Neha Seirah" desig = "Core Team Member"/>
          <NewAboutCard name="Karthikeyan" desig = "Core Team Member"/>
          <NewAboutCard name="Saumya Dwivedi " desig = "Core Team Member"/>
          <NewAboutCard name="Vivek S" desig = "Core Team Member"/>


          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col flex-wrap gap-10 md:flex-row justify-evenly md:gap-20'>
          <NewAboutCard name="R Sharanya" desig = "Core Team Member"/>
          <NewAboutCard name="Anto Kelvin" desig = "Core Team Member"/>
          <NewAboutCard name="Aleena Ealias" desig = "Core Team Member"/>

          </div>
          <div data-aos="fade-up" data-aos-duration="1000"  className='flex flex-col flex-wrap gap-10 md:flex-row justify-evenly md:gap-20'>
          <NewAboutCard name="Mohsin Chunawala" desig = "Core Team Member"/>
          </div>
        


        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default About;
