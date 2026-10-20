import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <p className="eyebrow">Skills</p>
        <h2 className="section__title">What I build with</h2>

        <div className="skills__vine" aria-hidden="true">
          <svg
            viewBox="0 0 1200 60"
            preserveAspectRatio="none"
            className="skills__vine-svg"
          >
            <path
              d="M0,30 C150,60 300,0 450,30 C600,60 750,0 900,30 C1000,50 1100,10 1200,30"
              fill="none"
              stroke="url(#vineGradient)"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="vineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
                <stop offset="15%" stopColor="var(--accent)" stopOpacity="0.9" />
                <stop offset="85%" stopColor="var(--accent-2)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="skills__grid">
          {skills.map((group, index) => (
            <div
              className="card skills__group"
              key={group.category}
              style={{ "--delay": `${index * 90}ms` }}
            >
              <h3 className="skills__category">{group.category}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li className="skills__chip" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
