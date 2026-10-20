function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true"></div>

      <div className="hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Hi, I'm Dagmawit 👋</p>
          <h1 className="hero__title">
            Computer Science student &amp;<br />
            aspiring <em>full-stack developer</em>
          </h1>
          <p className="hero__description">
            I enjoy building responsive web applications and turning ideas
            into functional digital experiences. I'm passionate about
            learning new technologies and developing both frontend and
            backend solutions.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn--ghost"
            >
              GitHub
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__card hero__card--code">
            <div className="hero__card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>{`const dev = {
  name: "Dagi",
  stack: ["React", "C#", ".NET"],
  learning: true,
  태 권 도: "required",
};`}</pre>
          </div>
          <div className="hero__ring"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
