import '../styles/Skills.css'; // Import the CSS file

const Skills = () => {
  return (
    <section className="skills-section">
      <h2 className="skills-title">My Skills</h2>

      {/* Languages */}
      <h3 className="category-title">Languages</h3>
      <div className="skills-list">
        <div className="skill-card">
          <h3 className="skill-title">C</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">C++</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Python</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">SQL</h3>
        </div>
      </div>

      {/* Frontend */}
      <h3 className="category-title">Frontend Development</h3>
      <div className="skills-list">
        <div className="skill-card">
          <h3 className="skill-title">HTML</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">CSS</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Bootstrap</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">JavaScript</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">React</h3>
        </div>
      </div>

      {/* Backend */}
      <h3 className="category-title">Backend Development</h3>
      <div className="skills-list">
        <div className="skill-card">
          <h3 className="skill-title">Node.js</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Express.js</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">MongoDB</h3>
        </div>
      </div>

      <h3 className="category-title">Tools/Frameworks</h3>
      <div className="skills-list">
        <div className="skill-card">
          <h3 className="skill-title">Git</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Github</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">VS Code</h3>
        </div>
        <div className="skill-card">
          <h3 className="skill-title">Jupyter Notebook</h3>
        </div>
      </div>
    </section>
  );
};

export default Skills;
