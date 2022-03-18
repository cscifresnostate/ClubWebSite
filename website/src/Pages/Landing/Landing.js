import React from 'react'; 
import SlideShow from './Components/Slideshow';
import Banner from './Components/Banner'; 

const Landing = (props) => {


    return (
        <div> 
            <SlideShow />
            <Banner motto="This is the motto!" /> 
        </div>
    )
}

export default Landing; 

