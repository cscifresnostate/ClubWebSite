import React, {useState, useEffect} from 'react';
import { getWorkshops } from '../../../Firebase/Queries';
import { Accordion } from 'react-bootstrap';
import { ImYoutube2 } from "react-icons/im";
import './Accordians.css'; 

const Accordians = (props) => {
    const [workshops, setWorkshops] = useState([]); 

    useEffect(() => {
        const getData = async () => {
            const res = await getWorkshops();
            setWorkshops(res); 
        }
        getData(); 
    }, []); 

    return (
        <div className='accord-container'> 
            <div> 
                <h1> Check out our previous workshops! </h1>
                <Accordion defaultActiveKey="0">
                    {workshops ? workshops.map((i, k) => {
                        return (
                            <Accordion.Item eventKey={k}>
                                <Accordion.Header> {i.title} </Accordion.Header>
                                <Accordion.Body>
                                    <div> 
                                        <img
                                            className='img-accord'
                                            style={{height: '200px'}}
                                            src={i.img}
                                            alt="Workhop"
                                        />
                                        <div> 
                                            <p> Technologies Used: {i.tech} </p>
                                            <p style={{display: 'flex', flexWrap: 'wrap'}}> {i.summary} </p>
                                            {
                                                i.ytLink.length > 3 ? 
                                                <a rel="noopener noreferrer" target="_blank" href={i.ytLink} style={{alignSelf: 'center'}}> 
                                                    <p style={{ fontWeight: 'bold'}}><ImYoutube2 color='red' size={100} />Check Out This Workshops Video Here! </p>
                                                </a>
                                                :
                                                <p> We are still editing this workshops video, check back for updates on the new video!</p>
                                            }

                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        )
                    }): <p> Data Could Not Load! Refresh or Check Your Internet Connection! </p>}
                </Accordion>
            </div>
        </div>

    );
}

export default Accordians