export default function AboutMe() {

    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/headshot_splash.png" alt="About Me"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">I'm a Computer Science junior at Virginia Tech, passionate about merging technology with creativity. Known for my adaptability and visionary approach, I excel in solving complex problems. My skills span leadership, detail orientation, effective communication, strategic thinking, and teamwork.</p>
                    <a href="./LucasUmberger_Resume24.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">View Resume</button>  
                    </a>
                </div>
            </div>
        </section>
    )
}