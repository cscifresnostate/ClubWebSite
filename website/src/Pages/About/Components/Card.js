import React from 'react'
import placeholder from '../Util/placeholder.png';
import {Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

//You can also parse out the props in (props) by doing ({name, etc....})
const OffInfo = (props) => {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body>
                    <Card.Title> {props.name} </Card.Title>
                        <Card.Text>
                          Officer Position: {props.pos} <br/> 
                          Tech Interst: {props.tech} <br/>
                          School Year: {props.year}
                        </Card.Text>
                    <Button variant="primary">Github Link of Officer!</Button>
                </Card.Body>
            </Card>
        );
}

OffInfo.propTypes = {
    name: PropTypes.string, 
    tech: PropTypes.string, 
    year: PropTypes.string, 
    pos: PropTypes.string
}

export default OffInfo; 