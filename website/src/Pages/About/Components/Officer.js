import React from 'react'; 
import Card from '../Components/Card'; 
import Data from '../Util/officer.json'; 
import './Officer.css';

const Officers = (props) => {

    return (
        <div> 
            <div className='title'> 
                <p> Officers for Spring 2022 </p>
            </div>
            <div className='cards-container'> 
            {
                Data.map((i, k) => {
                    return <Card key={k} name={i.name} tech={i.tech} year={i.year} pos={i.position} />
                })
            }
            </div>

        </div>
    )
}

export default Officers; 