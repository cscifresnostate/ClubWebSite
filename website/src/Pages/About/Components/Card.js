import React from 'react'
import placeholder from '../Util/placeholder.png';
import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

//You can also parse out the props in (props) by doing ({name, etc....})
const OffInfo = ({name, pos, tech, year, ghLink }) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title> {name} </Card.Title>
                        <Card.Text>
                          Officer Position: {pos} <br/> 
                          Tech Interst: {tech} <br/>
                          School Year: {year}
                        </Card.Text>
                    <Button  rel="noopener noreferrer" target="_blank"  href={ghLink} variant="primary">Github Link of Officer!</Button>
                </Card.Body>
            </Card>
        );
}


export default OffInfo; 