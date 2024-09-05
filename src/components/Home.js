import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/Home.css'; // Import the CSS file
import profile from '../assets/new1.jpg'; // Make sure to replace with the correct path to your photo

const Home = () => {
    return (
        <section className="home-section">
            <div className="home-content">
                <motion.h1
                    className="home-title"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <span className="color-span" style={{ color: 'white', fontWeight: 'bold', fontSize: '30px' }}>Hello, I am </span><br></br>
                    <TypeAnimation
                        sequence={[
                            'Indra Veerababu Kondi',
                            2000,
                            '',
                            2000,
                            'Full stack developer',
                            2000,
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline',fontSize:35, color: '#deb992', fontWeight: 'bold' }}
                    />
                </motion.h1>
                <motion.p
                    className="home-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <span style={{color: 'white'}}>A Passionate Computer Science Engineer</span>
                </motion.p>
                <div>
                    <motion.a
                        className="home-button"
                        href="#contact"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Contact Info
                    </motion.a>
                    <motion.a
                        className="home-button"
                        href="/Indra_Resume.pdf"
                        download="Indra_Resume.pdf"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        Download CV
                    </motion.a>
                </div>
            </div>
            <div className="home-photo">
                <img src={profile} alt="Indra" className="photo-img" />
            </div>
        </section>
    );
};

export default Home;
