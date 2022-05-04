import React from 'react';
import { Card } from 'react-bootstrap';

const Proj2 = (props) => {

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Card >
                <Card.Header as="h5">Fight the Darkness</Card.Header>
                <Card.Body>
                    <Card.Title> Category: Game Development </Card.Title>
                    <Card.Text>
                        <p style={{ width: '100%' }}>
                            Summary: What a wonderful nap... wait, where am I? Awakening from your peaceful slumber, you find yourself in a mysterious cave. Your curiosity leads you to explore the cave ultimately stumbling upon an ancient evil, THE CORRUPTION. It's spreading... it's coming towards you! With your trusty pistol and reliable pickaxe (don't ask why you carry these), stop the approaching darkness... However, a small voice in your head tells you that it is inevitable, the CORRUPTION SHALL CONSUME.


                            Have FUN!
                        </p>
                        <p> This Game was developed using: Unity, C#, Aseprite </p>
                        <p style={{ fontWeight: 'bold' }}> Contributors: Ren Hao Wong, Jia Le Soong, Jorge Ochoa Reyes, Wei Xiang </p>
                    </Card.Text>
                    <div className="text-center" style={{ alignSelf: 'center' }}>
                        <iframe frameborder="0" src="https://itch.io/embed-upload/5551959?color=9429b9" allowfullscreen="" width="980" height="688"><a href="https://specturnal.itch.io/fight-the-darkness">Play Fight The Darkness on itch.io</a></iframe>
                    </div>
                    <Card.Text>
                        <p style={{ fontWeight: 'bold' }}>
                            Controls:<br />
                            'WASD' keys : to move around in the cave<br />
                            Mouse       : aim<br />
                            Left click  : use Melee weapon<br />
                            Right click : use  Ranged weapon<br />
                            'E'         : pickup/swap weapons on the ground<br />
                            Side note: The progress bar above indicates the area coverage of the darkness,  destroy darkness cells to slow it down!
                        </p>
                    </Card.Text>
                    <div className="text-center" style={{ alignSelf: 'center' }}>
                        <iframe frameborder="0" src="https://itch.io/embed/1472841?border_width=5&amp;link_color=fb922b" width="560" height="175"><a href="https://specturnal.itch.io/fight-the-darkness">Fight The Darkness by Specturnal, TheBlitzzz</a></iframe>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Proj2; 