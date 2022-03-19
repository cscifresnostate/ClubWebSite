import React, {useEffect, useState} from 'react';
import './Schedule.css'; 
import CalendarIcon from '../Util/calendar.png'; 
import FresnoStateLogo from '../../../Util/logo.png';
import { ImYoutube2 } from "react-icons/im";
import { GoLogoGithub } from "react-icons/go";
import { SiDiscord } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { youtube_link, instagram_link, discord_link, github_link } from '../../../Components/constants';
import { getEvents } from '../../../Firebase/Queries';

const Schedule = (props) => {

    const [events, setEvents] = useState([]); 

    useEffect(() => {
        const getData = async () => {
            const res = await getEvents();
            setEvents(res); 
        }
        getData(); 
    }, [])

    return (
        <div style={{paddingTop: '50px', paddingBottom: '50px'}}> 
            <h1 className="title-schedule"> 2022 Events, Workshops, and Study Room Hours: </h1>
            
            <div className="container-schedule">

                <div className='left-schedule'> 
                    <div className='wrap-schedule'> 
                        <img
                            className='imgCal'
                        style={{height: '200px'}}
                          src={CalendarIcon}
                          alt="First slide"
                        />
                        <div style={{width: 'auto'}}> 
                        <h1> Workshop and Study Times </h1>
                        <ul>
                            <li className='text-schedule'>
                              The Computer Science Club Meets Every Wedsday. 
                            </li>
                            <li className='text-schedule'>
                                From 12pm-1pm on wednesday we hold workshops for students to learn new technologies or share they projects.  
                            </li>
                            <li className='text-schedule'>
                                From 10am-12pm and 1pm-3pm the Computer Science Romm will be open for students to study, or hang out and meet other students!
                            </li>
                        </ul>
                    </div>

                    </div>

                    <a rel="noopener noreferrer" target="_blank" href={youtube_link} style={{alignSelf: 'center'}}> 
                        <p style={{ fontWeight: 'bold'}}><ImYoutube2 color='red' size={100} />Check Out Our Videos on Previous Workshops! </p>
                    </a>

                    <a rel="noopener noreferrer" target="_blank" href={github_link} style={{alignSelf: 'center'}}> 
                        <p style={{ fontWeight: 'bold'}}><GoLogoGithub color='black' size={100} />Check Out The Code Our Previous Workshops! </p>
                    </a>

                </div>

                <div className="right-schedule"> 
                    <div className="wrap-schedule"> 
                        <img
                            className='imgCal'
                            style={{height: '200px'}}
                              src={FresnoStateLogo}
                              alt="First slide"
                        />
                        <div style={{width: 'auto'}}>
                            <h1> Upcoming Events: </h1>
                            <ul>
                                {events ? events.map((i) => {
                                    return <li className='text-schedule' key={i.date}> {i.date}: {i.title} @ {i.location} </li>;
                                }): (                               
                                     <>
                            <li className='text-schedule'>
                                3/23/2022: Workshop on Version Control with git and github by Masters student Christian Vann 
                            </li>
                            <li className='text-schedule'>
                                3/30/2022: Pizza Party for Club!
                            </li>
                            <li className='text-schedule'>
                                4/06/2022: Career Development Talk - student alumni
                            </li>
                            <li className='text-schedule'>
                                4/13/2022: Leetcode and coding interview questions reivew - student alumni
                            </li>
                            <li className='text-schedule'>
                                4/20/2022: Apply for jobs and intership talk - CSM Job Advisor
                            </li>
                            <li className='text-schedule'>
                                4/27/2022: Research Opportunities at Fresno State - Professor Talk and Research Assistants 
                            </li> 
                                        </>) 
                                }

                            </ul>
                        </div>
                    </div>

                    <a rel="noopener noreferrer" target="_blank" href={discord_link} style={{alignSelf: 'center'}}> 
                        <p style={{ fontWeight: 'bold'}}><SiDiscord color='#7289da' size={80} /> Join Disocrd for latets updates on events! </p>
                    </a>

                    <a rel="noopener noreferrer" target="_blank" href={instagram_link} style={{alignSelf: 'center'}}> 
                        <p style={{ fontWeight: 'bold'}}><SiInstagram color='#C13584' size={80} /> Also Follow our Instagram page for latest updates! </p>
                    </a>

                </div>

            </div> 

        </div>
    );
}

export default Schedule