import React from "react";
import Navbar from "../components/Navbar";
import Shubh from "../sshubh/profilebw.jpg";
import textureImg from "../resources/images/background_texture.png";
import "../styles/Credentials.css";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Credentials = () => {
  return (
    <>
      <Helmet>
        <title>About | {process.env.REACT_APP_APP_NAME || "Portfolio"}</title>
      </Helmet>
      <Navbar />
      <section className="credential_area">
        <div className="container">
          <div className="gx-row d-flex">
            {/* Sidebar */}
            <div className="credential_sidebar_wrap" data-aos="zoom-in">
              <div className="credential_sidebar text-center">
                <div className="shadow_box">
                  <img src={textureImg} alt="" className="bg_img" />
                  <div className="img_box">
                    <img src={Shubh} alt="About Me" />
                  </div>
                  <h2>Shubham Raj</h2>
                  <p>@sshubh</p>
                  <ul className="social_links d-flex justify-content-center">
                    <li>
                      <Link
                        to="https://github.com/shubhcoding01"
                        target="_blank"
                      >
                        <svg
                          width="16px"
                          height="16px"
                          strokeWidth="1.6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#FFFFFF"
                        >
                          <path
                            d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="https://www.linkedin.com/in/shubhamrajshubh/"
                        target="_blank"
                      >
                        <svg
                          width="16px"
                          height="16px"
                          strokeWidth="1.6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#FFFFFF"
                        >
                          <path
                            d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://x.com/shubh__coding" target="_blank">
                        <svg
                          width="16px"
                          height="16px"
                          strokeWidth="1.6"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          color="#FFFFFF"
                        >
                          <path
                            d="M23 3.01s-2.018 1.192-3.14 1.53a4.48 4.48 0 00-7.86 3v1a10.66 10.66 0 01-9-4.53s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83C21.94 5.674 23 3.01 23 3.01z"
                            stroke="#FFFFFF"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  </ul>
                  <NavLink to="/contact" className="theme_btn">
                    <img src={textureImg} alt="" className="bg_img" />
                    Contact Me
                  </NavLink>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="credential_content flex-1">
              <div className="credential_about" data-aos="zoom-in">
                <h2>About Me</h2>
                <p>
                  Hi, I’m <b>Shubham Raj</b> — a results-driven <b>Full Stack Developer</b> 
                  passionate about building scalable and secure web applications. 
                  I combine strong backend development skills with creative problem-solving to deliver 
                  impactful digital products.
                </p>
                <p>
                  My expertise lies in <b>Java, Spring Boot, React.js, Python, and MySQL</b>. 
                  I enjoy translating ideas into functional, reliable, and efficient code. 
                  I’ve developed full-stack systems, internal dashboards, and CMS-integrated web apps. 
                  Alongside development, I’m also exploring the world of <b>Cybersecurity</b> — 
                  ensuring software is not only powerful but also secure.
                </p>
              </div>

              {/* Experience Section */}
              <div className="credential_edc_exp credential_experience">
                <h2 data-aos="fade-up">Experience</h2>

                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>AUG 2025 - SEP 2025</h4>
                  <h3>Full Stack Developer (Wix Studio)</h3>
                  <h5>Ingenious Prime</h5>
                  <p>
                    Built an advanced internal dashboard for content and member management 
                    using <b>Wix Studio</b> and <b>Velo (JavaScript)</b>. Designed and implemented 
                    backend data workflows, integrated role-based access, and automated business logic. 
                    Delivered a <b>Leave & Attendance Management System</b> for real-time tracking.
                  </p>
                </div>

                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>JAN 2025 - APR 2025</h4>
                  <h3>Full Stack Developer (Project)</h3>
                  <h5>E-Commerce Seller Management Platform</h5>
                  <p>
                    Developed a full-stack multi-vendor e-commerce platform using 
                    <b> React.js</b> and <b>Spring Boot</b> with <b>MySQL</b>. 
                    Implemented product management, authentication (JWT), 
                    and real-time order tracking. Focused on optimizing API performance and responsive UI design.
                  </p>
                </div>
              </div>

              {/* Education Section */}
              <div className="credential_edc_exp credential_education">
                <h2 data-aos="fade-up">Education</h2>

                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>2022 - 2025</h4>
                  <h3>Bachelor of Computer Applications (BCA)</h3>
                  <h5>Aryabhatta Knowledge University</h5>
                </div>

                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>2020 - 2021</h4>
                  <h3>Intermediate of Science (12th)</h3>
                  <h5>O.I.P.V Kesarbagh Khaira – Bihar Board</h5>
                </div>

                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <h4>2017 - 2018</h4>
                  <h3>Secondary School (ICSE)</h3>
                  <h5>International School</h5>
                </div>
              </div>

              {/* Skills Section */}
              <div className="skills_wrap">
                <h2 data-aos="fade-up">Technical Skills</h2>
                <div className="d-grid skill_items flex-wrap">
                  {[
                    "Java", "Python", "Spring Boot", "React.js", "JavaScript",
                    "HTML", "CSS", "C++", "MySQL", "MongoDB", "Django", 
                    "Node.js", "Express.js", "RESTful APIs", "Git & GitHub", 
                    "Docker (Basics)", "Firebase", "Wix Studio", "Webflow", 
                    "Computer Networking", "Linux", "Cybersecurity (Learning)"
                  ].map((skill, i) => (
                    <div className="skill_item" data-aos="zoom-in" key={i}>
                      <span className="percent">{Math.floor(80 + Math.random() * 15)}%</span>
                      <h3 className="name">{skill}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="credential_edc_exp credential_certifications">
                <h2 data-aos="fade-up">Certifications & Achievements</h2>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <p>✅ Introduction to Generative AI</p>
                  <p>✅ Computer Hardware</p>
                  <p>🏆 RBI90 Quiz – State Level</p>
                </div>
              </div>

              {/* Interests Section */}
              <div className="credential_edc_exp credential_interests">
                <h2 data-aos="fade-up">Interests & Hobbies</h2>
                <div className="credential_edc_exp_item" data-aos="zoom-in">
                  <p>💻 Exploring Cybersecurity & Ethical Hacking</p>
                  <p>🧠 Learning Emerging Technologies</p>
                  <p>🏏 Playing Cricket</p>
                  <p>🎵 Listening to Music</p>
                  <p>🏍️ Riding Bikes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Credentials;
