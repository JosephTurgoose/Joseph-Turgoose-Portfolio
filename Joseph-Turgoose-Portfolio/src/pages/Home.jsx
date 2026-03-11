
import { useState } from 'react';

import '../styles/Home.css';
// Images
import Me from '../assets/imgs/Me.jpg';
import KeyCove1 from '../assets/imgs/KeyCove1.png';
import KeyCove2 from '../assets/imgs/KeyCove2.png';
import KeyCove3 from '../assets/imgs/KeyCove3.png';
import KeyCove4 from '../assets/imgs/KeyCove4.png';

// Functionality
function ImageGallery({ images }) {
    //
    const [selected, setSelected] = useState(null);
    //
    const open = (img) => {
        setSelected(img);
        document.body.style.overflow = "hidden"; // disable scroll
        };
    const close = () => {
        setSelected(null);
        document.body.style.overflow = ""; // restore scroll
    };
    ////
    return (
        <>
            <div className="image-gallery">
                {images.map((img, i) => (
                    <img
                        key={i}
                        src={img}
                        className="thumb"
                        onClick={() => open(img)}
                    />
                ))}
            </div>

            {selected && (
                <div className="overlay" onClick={close}>
                    <img src={selected} className="large" />
                </div>
            )}
        </>
    );
}

/////////////////////

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <img className="me" src={Me}></img>
                <h1 className="hero-title">Joseph Turgoose</h1>
                <p className="hero-subtitle">Fullstack Software Engineer</p>
                <p className="hero-subtitle-2">Free-Time Game Developer</p>

                <p className='summary'>
                    Software engineer specializing in full-stack development with experience in React, Node.js, and C#.
                    Passionate about building practical tools and systems, with leadership experience
                    delivering production software.
                </p>
            </section>

            {/* About Me Section */}
            <section className="about-me">
                <h3>About Me</h3>
                <div>
                    <p>I'm a software engineer with a strong passion for building and learning new technologies.
                        I graduated from Brigham Young University-Idaho in July 2025 with a Bachelor's degree in
                        Software Engineering and a 3.8 GPA.
                    </p><br></br>
                    <p>
                        Hobbies include game development, cooking, walks around the city, D&D, Magic: The Gathering,
                        and pretty much anything else to do with art or general nerd stuff.
                    </p><br></br>
                    <p className='my-info'>Email: 21jturgoose@gmail.com</p><br></br>
                    <p className='my-info'>GitHub: https://github.com/JosephTurgoose</p><br></br>
                    <p className='my-info'>LinkedIn: www.linkedin.com/in/joseph-turgoose-b41471281</p><br></br>

                    {/* <p className='disclaimer'>(Images coming soon)</p> */}
                </div>
            </section>

            {/* Skills */}
            <section className="skills">
                <div>
                    <h3>My Skills</h3>
                    <ul className='list'>
                        <li className='bullet'>Programming Languages:
                            <p className='bullet-text'>Primary: C# (.NET), Python, JavaScript</p>
                            <p className='bullet-text'>Secondary: Typescript, Java, C++, SQL</p>
                            <p className='bullet-text'>Design: HTML/CSS, Kotlin/XML</p>
                        </li><br></br>
                        <li className='bullet'>Frameworks:
                            <p className='bullet-text'>React (Node.JS), Angular, Express</p>
                        </li><br></br>
                        <li className='bullet'>Tools:
                            <p className='bullet-text'>GitHub, Git, Tableau, AWS (Foundations Graduate), Docker, Firebase, Supabase</p>
                        </li><br></br>
                        <li className='bullet'>Software Fundamentals:
                            <p className='bullet-text'>Object-Oriented Programming, Functional Programming, Data Structures,
                                Algorithms, Test Cases, Code and Data Security, Software and UI Design</p>
                        </li><br></br>
                        <li className='bullet'>General:
                            <p className='bullet-text'>Leadership, Communication, Documentation,
                                Business Mindset, Task Management, Problem Solving</p>
                        </li><br></br>
                    </ul>
                </div>
            </section>

            {/* Projects */}
            <section className="projects">
                <div>
                    <h3>Projects and Experience</h3>
                    <ul className='list'>
                        <li className='bullet'> (Professional) Calendar App:
                            <br></br>
                            <p className='bullet-text'>React | Node.JS | HTML/CSS | SQL | Express | Supabase</p>
                            <p className='bullet-text'>I led a team of backend and full-stack developers to build a
                                functional MVP for a calendar application that surpassed the client's previous tool.
                                This involved heavy coding, documentation, supervision of my team's work, and several meetings
                                with the project manager and client.  Despite being set back by technological changes halfway through,
                                we still finished ahead of schedule with lots of documentation to guide future development.
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                        <li className='bullet'>Password Manager App:
                            <br></br>
                            <p className='bullet-text'>Android Studio | Kotlin/XML | PKCS5 encryption + Hashing</p>
                            <p className='bullet-text'>Despite having no team and no prior experience with Android Studio,
                                I made a full password manager application in order to create an option free from the bloat and
                                limitations of other password managers on the Google Play Store.
                                This project strengthened my ability to quickly learn new tools and
                                opened the door to future mobile development.</p>
                            <a className='link' href="https://github.com/JosephTurgoose/KeyCove-Password-Manager">Click here to visit the GitHub repo</a>
                            <ImageGallery images={[KeyCove1, KeyCove2, KeyCove3, KeyCove4]}>
                            </ImageGallery>
                        </li><br></br>
                        <li className='bullet'>(Professional) Contract Frontend Development:
                            <br></br>
                            <p className='bullet-text'>CSS | React | Node.JS</p>
                            <p className='bullet-text'> I was hired as a contract developer to design, implement, and document web forms for several
                                of my employer's clients.
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                        <li className='bullet'>Custom Web Card Game:
                            <br></br>
                            <p className='bullet-text'>Firebase | JavaScript</p>
                            <p className='bullet-text'> I was the primary gameplay developer for an online card game similar to both
                                Uno and Solitaire.  My biggest contributions to the code included developing gameplay
                                action functions and creating a secure connection between the frontend and backend systems.
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                        <li className='bullet'>Angular Course:
                            <br></br>
                            <p className='bullet-text'>Angular | Typescript | HTML/CSS</p>
                            <p className='bullet-text'>During my job hunt, I found that a lot of companies use Angular instead of React,
                                so I took it upon myself to complete a full course to Angular.  In addition to learning Angular,
                                this project also helped me develop my skills with Typescript and web design.
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                        <li className='bullet'>Full-Sandbox TTRPG (In-Progress):
                            <br></br>
                            <p className='bullet-text'>React | Node.JS | HTML/CSS | Google web developer tools</p>
                            <p className='bullet-text'>Since 2021, I've been steadily designing an immersive
                                tabletop role-playing game in which players spend points to create ANY character they can imagine
                                (within the GM's boundaires).  To accomplish this, I've created a balanced trait system
                                that's more flexible than any other existing TTRPG.
                                Now that most of the rules have been sorted out
                                I'm currently developing the website and formulating a public launch plan.
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                        <li className='bullet'>Terraria Mod (In-Progress):
                            <br></br>
                            <p className='bullet-text'>C# | tModLoader | Aseprite</p>
                            <p className='bullet-text'>I'm building a mod to enhance Terraria's gameplay experience.  I've implemented
                                some features already, but to keep it short, the mod will include: New and rebalanced gear for all classes;
                                several new classes; a new dynamic damage system; a brand new system for enchanting certain types of equipment;
                                and more.
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                        <li className='bullet'>Private Game Projects (In-Progress):
                            <br></br>
                            <p className='bullet-text'>C# (Unity) | GdScript (Godot) | Aseprite</p>
                            <p className='bullet-text'>I've spent years learning game development in my free time and
                                there are currently two major projects I'm working on — one in Unity and
                                another in Godot.  Although I have halted the Unity project for reasons involving the job search and artistic limitations,
                                the Godot project is still going strong.  All I will say now is that it'll be a
                                Metroidvania-esque platformer with a unique twist :D
                            </p>
                            <p className='bullet-text'> Images and links unavailable at this time.</p>
                        </li><br></br>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer></footer>


        </div>
    
    );
}
