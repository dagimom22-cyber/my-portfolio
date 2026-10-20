const responsibilities = [
  "Website review and documentation",
  "React learning and development",
  "Frontend development",
  "Git/GitHub workflow",
];

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner">
        <p className="eyebrow">Experience</p>
        <h2 className="section__title">Where I've worked</h2>

        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__marker"></div>
            <div className="card timeline__content">
              <h3>Software Development Intern</h3>
              <ul>
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
