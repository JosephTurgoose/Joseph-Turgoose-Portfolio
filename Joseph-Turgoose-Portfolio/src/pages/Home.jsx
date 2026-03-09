

import '../styles/Home.css';

export default function Home() {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero">
                <h1 className="hero-title">Joseph Turgoose</h1>
                <p className="hero-subtitle">Fullstack Software Engineer</p>
            </section>

            {/* About Me Section */}
            <section className="about-me">
                <div>
                    <h3>About Me</h3>
                    <p>Talented programmer with a passion for learning and creation.  Graduated from Brigham Young University - Idaho
                        in July, 2025 with a Bachelor's Degree in Software Engineering and a 3.8 GPA.  Hobbies include game development,
                        cooking, walks around the city, and pretty much anything to do with art or general nerd stuff.
                    </p>
                </div>
            </section>

            {/* Projects */}
            <section className="projects">
                <div>
                    <h3>Projects / Experience</h3>
                    <ul className='list'>
                        <li className='bullet'>Password Manager App:
                            <br></br>
                            <p className='bullet-text'>Android Studio | Kotlin/XML | PKCS5 encryption + Hashing</p>
                            <p className='bullet-text'>Despite no team nor prior experience with Android Studio, I made a full
                                password manager application in order to create an option free from the bloat and
                                limitations of other password managers on the Google Play Store.
                                This was a great project to challenge my ability to learn on my own,
                                as well open the doors to further mobile projects.</p>
                        </li><br></br>
                        <li className='bullet'> (Professional) Calendar App:
                            <br></br>
                            <p className='bullet-text'>React | Node.JS | HTML/CSS | SQL | Express | Supabase</p>
                            <p className='bullet-text'>I led a team of backend and fullstack developers through
                                the creation a functional MVP for a calendar app that exceeded the power of the client's previous
                                tool.  This involved heavy coding, documentation, supervision of my team's work, and several meetings
                                with the project manager and client.  Despite being set back by technological changes half-way through,
                                we still finished ahead of schedule with lots of documentation to guide future development.
                            </p>
                        </li><br></br>
                        <li className='bullet'>Angular Course:
                            <br></br>
                            <p className='bullet-text'>asdf</p>
                            <p className='bullet-text'>asdf</p>
                        </li><br></br>
                        <li className='bullet'>Angular Course:
                            <br></br>
                            <p className='bullet-text'>asdf</p>
                            <p className='bullet-text'>asdf</p>
                        </li><br></br>
                        <li className='bullet'>Angular Course:
                            <br></br>
                            <p className='bullet-text'>asdf</p>
                            <p className='bullet-text'>asdf</p>
                        </li><br></br>
                        <li className='bullet'>Angular Course:
                            <br></br>
                            <p className='bullet-text'>asdf</p>
                            <p className='bullet-text'>asdf</p>
                        </li><br></br>
                    </ul>
                </div>
            </section>

            {/* Footer */}
            <footer></footer>


        </div>
    
    );
}
