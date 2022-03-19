import React from 'react'; 
import SlideShow from './Components/Slideshow';
import Banner from './Components/Banner';
import Schedule from './Components/Schedule';
import Fountains from './Components/Accordians'; 
import FresnoStateLogo from './Util/fslogo.png'; 
import TechLogo from './Util/techs.png';
import Data from './Util/text_landing.json'; 

const Landing = (props) => {


    return (
        <div> 
            <SlideShow />
            <Banner 
                mainText={Data.mission.mainText} 
                img={FresnoStateLogo} 
                header={Data.mission.header} 
                direction={Data.mission.direction} 
                spinType={Data.mission.spinType}
                height={Data.mission.height}
                style={Data.mission.style}
            /> 
            <Banner 
                mainText={Data.events.mainText} 
                img={TechLogo} 
                header={Data.events.header} 
                direction={Data.events.direction} 
                spinType={Data.events.spinType}
                height={Data.events.height}
                style={Data.events.style}
            /> 

            <Schedule />

            <Fountains />
            
        </div>
    )
}

export default Landing; 

