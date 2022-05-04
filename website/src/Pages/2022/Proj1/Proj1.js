import React from 'react';
import { Card } from 'react-bootstrap';

const Proj1 = (props) => {


    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Card >
                <Card.Header as="h5">Dumb Ways To Doctor</Card.Header>
                <Card.Body>
                    <Card.Title> Category: Game Development </Card.Title>
                    <Card.Text>
                        <p style={{ width: '100%' }}>
                            Summary: Lots of patients with serious illness are in need of treatment! As an amazing doctor, it is your job to save these patients, even from their death!
                            There are up to 9 possible illnesses and 13 types of items available, plus a growing difficulty each day, challenge yourself to save as many patients as possible!
                            For some reason, patients can turn into ZOMBIES if left unchecked! Should you prevent it or make it happen? You need to be careful because using a wrong item can lead to disasters!
                        </p>
                        <p> This Game was developed using: Unity, C#, Piskel </p>
                        <p style={{ fontWeight: 'bold' }}> Contributors: Ren Hao Wong, Jia Le Soong, Boon Hui Khong </p>
                    </Card.Text>
                    <div className="text-center" style={{ alignSelf: 'center' }}>
                        <iframe frameborder="0" src="https://itch.io/embed-upload/2263349?color=8ac4fa" allowfullscreen="" width="980" height="688"><a href="https://specturnal.itch.io/dumb-ways-to-doctor"> </a></iframe>
                    </div>
                    <Card.Text>
                        <p>
                            <b>Controls: WASD, Space (interact), E (view patient report)</b><br /><br />
                            Strategy Guide:<br /><br />

                            - Patient can resist treatment when their fragility is too high, use tranquilizers to lower it.<br />
                            - Use tools(Stun Gun, Plunger, Air Pump, Welding Tool) to attack zombies.<br />
                            - Apply blood packs to reduce blood loss.<br />
                            - Use steroids to increase heart rate, but treat them quickly before heart rate goes above 150.<br />
                            - Use tranquilizers to lower heart rate and fragility.<br />
                            - Use tranquilizers on patients that went lunatic and get off from the bed themselves. You can then put them back on bed.<br />
                            Remember to prioritize conditions with greater threat!<br />
                        </p>
                    </Card.Text>
                    <div className="text-center" style={{ alignSelf: 'center' }}>
                        <iframe frameborder="0" src="https://itch.io/embed/618633?border_width=5&amp;link_color=2ce8f4" width="560" height="175"><a href="https://specturnal.itch.io/dumb-ways-to-doctor">Dumb Ways to Doctor by Specturnal, TheBlitzzz</a></iframe>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Proj1; 