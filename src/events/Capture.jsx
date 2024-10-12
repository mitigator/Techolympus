import React, { useState, useEffect } from 'react';
import bg from '../assets/bgleaf.svg';
import Navbar from '../components/Navbar';
import img from '../assets/Hermes.svg';
import end from '../assets/borderline.svg';
import Preloader from '../components/Preloader'
import SingleEventPage from '../components/SingleEventPage';
import Footer from '../components/Footer';

export const Capture = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch data from API
        fetch('https://mitigator.github.io/EventApi/event.json')
            .then(response => response.json())
            .then(data => {
                setEventData(data[5]);  
            })
            .catch(error => console.error('Error fetching event data:', error));
    }, []);

    // if (!eventData) {
    //     return <div><Preloader/></div>;     
    // }

    return (
        <>{
            !eventData?
            <Preloader/>:
        <div>
            <Navbar />
            <SingleEventPage eventData={eventData} img={img}/>
        </div>
        }
        
        </>
    );
};
