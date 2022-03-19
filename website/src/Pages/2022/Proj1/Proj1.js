import React from 'react'; 
import { Card } from 'react-bootstrap';

const Proj1 = (props) => {


    return (
        <div style={{display: 'flex', flexDirection: 'column'}}> 
            <Card >
              <Card.Header as="h5">Dumb ways To Doctor</Card.Header>
              <Card.Body>
                <Card.Title> Category: Game Development </Card.Title>
                <Card.Text>
                    <p style={{width: '100%'}}> 
                        Summary: Lots of patients with serious illness are in need of treatment! As an amazing doctor, it is your job to save these patients, even from their death!
                        There are up to 9 possible illnesses and 13 types of items available, plus a growing difficulty each day, challenge yourself to save as many patients as possible!
                        For some reason, patients can turn into ZOMBIES if left unchecked! Should you prevent it or make it happen? You need to be careful because using a wrong item can lead to disasters!
                    </p>
                    <p> This Game was developed using: Unity, C#, Piskel </p>
                    <p style={{fontWeight: 'bold'}}> Contributors: Jia Le Soong, Boon Hui Khong </p>
                </Card.Text>
                <div className="text-center" style={{alignSelf: 'center'}}>
                    <iframe frameborder="0" src="https://itch.io/embed-upload/2263349?color=8ac4fa" allowfullscreen="" width="980" height="688"><a href="https://specturnal.itch.io/dumb-ways-to-doctor"> </a></iframe>
                </div>
              </Card.Body>
            </Card>
        </div>
    )
}

export default Proj1; 