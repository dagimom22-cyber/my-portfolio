const highlights = [
  {
    title: "Computer Science Student",
    text: "Currently studying Computer Science with a focus on practical, real-world software development.",
  },
  {
    title: "Frontend Development",
    text: "Building clean, responsive interfaces with React, JavaScript, and Angular.",
  },
  {
    title: "Backend Development",
    text: "Working with C#, ASP.NET Core, PHP, and REST APIs to build the systems behind the interface.",
  },
  {
    title: "Continuous Learning",
    text: "Always exploring new tools and technologies — currently deepening my full-stack skill set.",
  },
];

function About() {
  return (
    <section id="about" className="section about">
      <div className="section__inner">
        <p className="eyebrow">About</p>
        <h2 className="section__title">A bit about how I work</h2>
        <p className="about__intro">
          I'm a Computer Science student who enjoys the full arc of building
          software — from sketching an interface to wiring it up to a working
          backend. I like projects that make me learn something new, and I'm
          steadily building toward a full-stack skill set I can rely on.
        </p>

        <div className="about__grid">
          {highlights.map((item) => (
            <div className="card about__card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
