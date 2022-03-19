import React, {useState} from 'react';
import './Banner.css'; 


const Banner = ({mainText, img, direction, header, spinType, height, style}) => {

    const [spin, setSpin] = useState(style); 

    return (
        <div className="banner" 
            onMouseEnter={() => setSpin(spinType)}
            onMouseLeave={() => setSpin(style)}
            style={{flexDirection: direction ? "row" : 'row-reverse',}}>
            <div> 
                <p className="banner-header"> {header} </p>
                <p className="text-banner"> {mainText} </p>
            </div>

            <img
                className={spin}
                style={{height: height}}
                src={img}
                alt="Icon"
              />
        </div> 
    );
}



export default Banner