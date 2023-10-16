import React, { Component } from 'react';
import dev from './images/asabeneh.jpg';


const Home = () => {
    return ( 
        <div className='main'>
            <div className='navig'>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>PORTFOLIO</li>
                        <li>CONTACTS</li>
                    </ul>
                </nav>
            </div>
            <div>
            <div>
                <h4>Hello</h4>
                <h2>I'm Christian Mugisha</h2>
                <article>
                i am a senior software developer who has knowledge in .NET WinForms development,
                 SQL development, Git version control system, Unit and integration testing, follows quality standards, communicates with clients. He is sociable, proactive, team player, fast learner. Understands and has experience of agile processes, has time management skills, ability to coach others.
                Solves complex technical problems that other team members may encounter.
                </article>
                <button>Download CV</button>
            </div>
            <div className='devimage'>
                <img scr={dev} alt='photo'/>
            </div>
         </div>
        </div>
     );
}
 
export default Home
