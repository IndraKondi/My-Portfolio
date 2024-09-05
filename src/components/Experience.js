import { motion } from 'framer-motion';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="experience-title">Internship</h2>
      <div className="experience-list">
        {/* Experience Item */}
        <motion.div
          className="experience-item"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="experience-title-item">KeshavSoft - <span>Software Developer Intern</span></h3>
          <p className="experience-description">
            Worked as a Software Developer Intern for 6 weeks, contributing to two real-time projects.<br/><br/>
            Developed and implemented various features and functionalities for business E-commerce websites using HTML, CSS, JavaScript, Node.js.<br/><br/>
            Utilized Git and GitHub for version control and collaborations.<br/><br/>
            Coordinated with team members on code reviews and testing processes, ensuring high-quality deliverables and adherence to project requirements.
          </p>
          {/* Add Offer Letter and Completion Certificate Links */}
          <div className="document-links">
            <a href="https://drive.google.com/file/d/1yxSvI35v4IxdFu9ny8-tKPERQzs0026u/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="document-link">
              View Offer Letter
            </a>
            <a href="https://drive.google.com/file/d/1ofqwM6C6igGTY3Yq6Hq5H8GDvqsa4w8o/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="document-link">
              View Completion Certificate
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
