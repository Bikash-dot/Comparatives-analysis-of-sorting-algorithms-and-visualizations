import React from 'react';
import './link.css'
import imageKhan from './photo/khan.png';
import freeCode from './photo/freecodecamp.png';
import greeksFor from './photo/geeksforgeeks.jpeg';
import javaTpoint from './photo/javatpoint.png';
import pDrvie from './photo/pdfdrive.png';
import slideShare from './photo/slideshare.jpeg';
import stackOver from './photo/stackoverflow.png';
import tutorialPoint from './photo/tutorialspoint.png';
import wSchol from './photo/w3.png';

function Link() {
    return (<div>
        <nav>

            <a class="page1" href="./">Home</a>
            <a href="/algo">Algorithm</a>

            <a href="/visualization">Visualization</a>
            <a href="/flow">Flowchart</a>



        </nav>

        <section>
            <h2 >Useful link</h2>

            <div class="image-container">

                <a href="https://www.freecodecamp.org/"><img src={freeCode} alt="Freecodecamp" /></a>
                <a href="https://www.geeksforgeeks.org/"><img src={greeksFor} alt="Geeksforgeeks" /></a>
                <a href="https://www.javatpoint.com/"><img src={javaTpoint} alt="JavaTpoint" /></a>
                <a href="https://www.khanacademy.org/"><img src={imageKhan} alt="Khan Academy" /></a>
                <a href="https://www.pdfdrive.com/"><img src={pDrvie} alt="PDFdrive" /></a>
                <a href="https://www.slideshare.net/"><img src={slideShare} alt="SlideShare" /></a>
                <a href="https://stackoverflow.com/"><img src={stackOver} alt="StackOverflow" /></a>
                <a href="https://www.tutorialspoint.com/"><img src={tutorialPoint} alt="TutorialsPoint" /></a>
                <a href="https://www.w3schools.com/"><img src={wSchol} alt="W3Schools" /></a>

            </div>
        </section>
    </div>);
}

export default Link
