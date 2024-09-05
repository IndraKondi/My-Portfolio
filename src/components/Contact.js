import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="section contact-section">
      <div className="container">
        <div className="contact-info">
          <div className="section-header">
            <h2>Contact</h2>
          </div>
          <div className="contact-content">
            <div className="contact-left">
              <h3>Get in Touch</h3>
              <form id="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <input type="text" placeholder="Subject" required />
                <textarea rows="4" placeholder="Write your Message" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="contact-right">
              <div className="intro">
                <h3>Lets Talk about everything!</h3>
              </div>
              <div className="intro-1">
                You can also contact me here...<br />
                <i className='bx bx-envelope'></i> indrakondi@gmail.com<br />
                <i className='bx bx-mobile'></i> +91 7981205052
              </div>
              <div className="social-icons">
                <a href="https://www.instagram.com/indraveerababu.kondi"><i className='bx bxl-instagram-alt'></i></a>
                <a href="https://www.linkedin.com/in/kindraveerababu/"><i className='bx bxl-linkedin-square'></i></a>
                <a href="https://github.com/IndraKondi"><i className='bx bxl-github'></i></a>
              </div>
              <div className="contact-image">
                <img src="https://thumbs.dreamstime.com/b/e-mail-social-media-hands-using-smartphone-new-messages-icon-business-marketing-concept-black-background-e-mail-237089657.jpg" alt="Contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <p>&copy; 2024 KONDI INDRA VEERABABU. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
