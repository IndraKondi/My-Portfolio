import { motion } from 'framer-motion';
import '../styles/About.css'; // Import the combined CSS file

const About = () => {
  return (
    <section className="about-education-section">
      {/* About Section */}
      <div className="about-section">
        <h1 className="about-title">About Me</h1>
        <motion.hr
          className="about-divider"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        />
        <motion.p
          className="about-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          Aspiring Computer Science graduate with a solid foundation in programming and a keen aptitude for learning, eager to contribute fresh perspectives and technical expertise to a dynamic professional environment.
        </motion.p>
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h3 className="education-title">Education</h3>
        <motion.hr
          className="about-divider"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        />
        <ol className="education-list">
          <li className="education-item">
            <pre><h3>Gayatri Vidhya Parishad College Of Engineering</h3><br />B.Tech in Computer Science Engineering<br></br>2021 - 2025<h4>Semester : 9.30 CGPA</h4></pre>
          </li>
          <li className="education-item">
            <pre><h3>Adithya Junior College</h3><br></br>Intermediate (MPC)<br></br>2019 - 2021<br></br><h4>Intermediate : 977/1000</h4></pre>
          </li>
          <li className="education-item">
            <pre><h3>Sri Sathya Sai Vidhya Vihar E.M School</h3><br />Secondary Education (SSC)<br></br>2019<br></br><h4>SSC : 10 GPA</h4></pre>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default About;
