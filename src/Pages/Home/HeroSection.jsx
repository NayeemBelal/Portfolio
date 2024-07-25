import { Link } from "react-scroll";

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title" id="hero--section--name">
            Hey, I'm Nayeem
          </p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">
              Full Stack Developer
            </span>
          </h1>
          <p className="hero--section-description" id="heroSectionColorThing">
            I'm a passionate developer who thrives on solving complex problems
            and creating innovative solutions.
          </p>
        </div>
        <br />

        <Link
          to="Contact"
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-primary"
          id="connectBTN"
        >
          Let's Connect!
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/heroPic.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
