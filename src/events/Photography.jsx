import React, { useState, useEffect } from 'react';
import bg from '../assets/bgleaf.svg';
import Navbar from '../components/Navbar';
import img from '../assets/Apollo.svg';
import end from '../assets/borderline.svg';
import Preloader from '../components/Preloader'
import Footer from '../components/Footer';
import SingleEventPage from '../components/SingleEventPage';

export const Photography = () => {
    const [eventData, setEventData] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        // Fetch data from API
        fetch('https://mitigator.github.io/EventApi/event.json')
            .then(response => response.json())
            .then(data => {
                setEventData(data[1]);  
            })
            .catch(error => console.error('Error fetching event data:', error));
    }, []);

    if (!eventData) {
        return <div><Preloader/></div>;     
    }

    return (
        <div>
            <Navbar />
            <SingleEventPage eventData={eventData} img={img}/>
        </div>
    );
};
