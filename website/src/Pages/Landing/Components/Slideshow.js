import React from 'react'; 
import { Carousel } from 'react-bootstrap';
import Image2 from '../../../Util/background.png';

const SlideShow = (props) => {

    return (
        <Carousel>

            <Carousel.Item>
              <div
                className='w-100'
                style={{height: 500, background: 'black'}}
              />
              <Carousel.Caption>
                <h3 style={{color: 'white'}}>First slide label</h3>
                <p style={{color: 'white'}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img
                className='w-100'
                style={{height: 500}}
                  src={Image2}
                  alt="First slide"
              />
              <Carousel.Caption>

                <h3 style={{color: 'black'}}>Second slide label</h3>
                <p style={{color: 'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <div
                className='w-100'
                style={{height: 500, background: 'green'}}
              />
              <Carousel.Caption>
                <h3 style={{color: 'black'}}>Third slide label</h3>
                <p style={{color: 'black'}}>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    )
}


export default SlideShow; 
