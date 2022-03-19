import React from 'react'; 
import Card from '../Components/Card'; 
import Data from '../Util/officer.json'; 
import './Officer.css';

const Officers = (props) => {

    return (
        <div style={{paddingBottom: '50px'}}> 
            <div className='title'> 
                <p> Officers for Spring 2022 </p>
            </div>
            <div className="officer-center">
                <div className='cards-container'> 
                {
                    Data.map((i, k) => {
                        return (
                            <Card key={k} name={i.name} tech={i.tech} year={i.year} pos={i.position} ghLink={i.githubLink} />
                        );
                    })
                }
                </div>
            </div> 


        </div>
    )
}

export default Officers; 