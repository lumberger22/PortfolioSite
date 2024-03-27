export default function AboutMe() {

    return (
        <section id="AboutMe" className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me.png" alt="About Me"/>
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">About</p>
                    <h1 className="skills-section--heading">About Me</h1>
                    <p className="hero--section-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit temporibus necessitatibus ea iure autem labore! Commodi harum fugiat facere, numquam maxime distinctio? Error quasi iste perspiciatis ipsa nobis animi pariatur?</p>
                    <a href="./LucasUmbergerResume24.pdf" target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-primary">View Resume</button>  
                    </a>
                </div>
            </div>
        </section>
    )
}