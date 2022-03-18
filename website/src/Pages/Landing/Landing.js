import React from 'react'; 
import SlideShow from './Components/Slideshow';
import Banner from './Components/Banner'; 

const Landing = (props) => {


    return (
        <div> 
            <SlideShow />
            <Banner motto="Our Motto is to: !" /> 
        </div>
    )
}

export default Landing; 

