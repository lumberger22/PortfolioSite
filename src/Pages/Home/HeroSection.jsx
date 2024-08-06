export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Lucas</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color">Software</span>{" "}
                        <br />
                        Engineer
                    </h1>
                    <p className="hero--section-description">
                   Welcome! Here, you'll discover projects that showcase my passion for transforming challenges into opportunities.
                    </p>
                </div>
                <a href="https://www.linkedin.com/in/lumberger540/" target="_blank">
                  <button className="btn btn-primary">Get In Touch</button>  
                </a>
            </div>
            <div className="hero--section--img">
                <img src="./img/headshot_blue_background.png" alt="Hero Section"/>
            </div>
        </section>
    );
}