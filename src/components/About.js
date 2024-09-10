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
        I am a final year Computer Science Engineering student with a strong passion for technology and innovation. My experience includes an internship at KeshavSoft as a Web Developer, where I enhanced my skills in both frontend and backend development using HTML, CSS, JavaScript, and various backend technologies. Notable projects include developing a Netflix clone using React.js and Node.js and building a Stock Market Price Prediction model with time series analysis. I am proficient in C, C++, Python, and experienced with databases like MongoDB and SQL.I also have experience in some developer tools like git, github, jupyter notebook, etc. My certifications in Python Foundations, Google Data Analytics, and Web Development, coupled with my achievements in regional coding competitions and the Smart India Hackathon, highlight my technical capabilities and problem-solving skills. Actively involved in IEEE and ROTRACT GVP clubs, I engage in community service and professional development. I am driven by a desire to explore advanced projects in machine learning and deep learning, aiming to make a significant impact in the tech industry through innovative and effective solutions.        </motion.p>
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
            <h3>Gayatri Vidhya Parishad College Of Engineering</h3>
            <p>B.Tech in Computer Science Engineering</p>
            <p>2021 - 2025</p>
            <h4>Semester: 9.30 CGPA</h4>
          </li>

          <li className="education-item">
            <h3>Aditya Junior College</h3>
            <p>Intermediate (MPC)</p>
            <p>2019 - 2021</p>
            <h4>Intermediate: 977/1000</h4>
          </li>

          <li className="education-item">
            <h3>Sri Sathya Sai Vidhya Vihar E.M School</h3>
            <p>Secondary Education (SSC)</p>
            <p>2019</p>
            <h4>SSC: 10 GPA</h4>
          </li>

        </ol>
      </div>
    </section>
  );
};

export default About;
