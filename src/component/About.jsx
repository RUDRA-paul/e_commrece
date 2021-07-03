import React from 'react';
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
            <div className='about-text'>
                <h1>UPCOMING EVENT</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat sequi error porro dolore repellendus,
                     voluptates eligendi. 
                    Repellat similique accusamus quibusdam? Ipsum vitae temporibus 
                    dignissimos reprehenderit repellendus ab blanditiis, accusamus nesciunt!</p>
                    <button>Read More</button>
                
            </div>
            <div className='about-image'>
                <img src={aboutimage} alt=''/>
            </div>
            
        </div>
    )
}

export default About
