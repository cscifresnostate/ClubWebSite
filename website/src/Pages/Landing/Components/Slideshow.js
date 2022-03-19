import React from 'react'; 
import { Carousel } from 'react-bootstrap';
import Testing_Img from '../Util/testing.jpg'; 
import Workshop_Img from '../Util/workshop.jpg'; 
import Workshop_Img2 from '../Util/workshop_2.jpg'; 
import './Slideshow.css'; 

const Img_Heigth = 'auto'; 

const SlideShow = (props) => {


    return (
        <Carousel>

            <Carousel.Item>
            <img
                className='w-100'
                style={{height: Img_Heigth}}
                  src={Workshop_Img}
                  alt="First slide"
              />
              <Carousel.Caption className="card-slideshow" >
                <div>
                  <h3 className='text'>Network with other students!</h3>
                  <p className='text'>Network with other csci students and code enthusiats to share ideas!</p>
                </div> 

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className='w-100'
                style={{height: Img_Heigth}}
                  src={Testing_Img}
                  alt="First slide"
              />
              <Carousel.Caption className="card-slideshow">

                <h3 style={{color: 'white', fontWeight: 'bold'}}>Be Part of Computer Science Research!</h3>
                <p style={{color: 'white', fontWeight: 'bold'}}>Help other students test applications and learn about exciting opportunites at Fresno State. </p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className='w-100'
                style={{height: Img_Heigth}}
                  src={Workshop_Img2}
                  alt="First slide"
              />
              <Carousel.Caption className="card-slideshow">
                <h3 className="text">Learn how to deploy React Apps!</h3>
                <p className='text'>CSCI Club Learned to create and deploy a React App to their how github pages.</p>
              </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}



export default SlideShow; 
