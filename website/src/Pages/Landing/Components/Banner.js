import React from 'react';
import './Banner.css'; 

const Banner = ({motto}) => {
    
    return (
        <div className="banner">
            {motto}
        </div> 
    );
}



export default Banner