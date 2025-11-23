import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import Pradip from '../sshubh/profilebw.jpg'
import Star from '../resources/images/star-2.png'
import StarIcon from '../resources/images/star-icon.png'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import '../styles/MoreAboutMe.css'
import nextIcon from '../resources/images/Next_icon.svg'
import AboutMe from '../components/AboutMe'
import WorkTogether from '../components/WorkTogether'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const MoreAboutMe = () => {

    return (
        <>
            <Helmet>
                <title>
                    About | {process.env.REACT_APP_APP_NAME || "Portfolio"}
                </title>
            </Helmet>
            <Navbar />
            <section className="about_area">
                <div className="container">
                    <div className='d-flex about_me_wrap align-items-end mb-30'>
                        <div className="about_image_box shadow_box" data-aos="zoom-in">
                            <img src={textureImg} alt="BG" className="bg_img" />
                            <div className="image_inner">
                                <img src={Pradip} alt="About Me" />
                            </div>
                        </div>
                        <div className="about_details" data-aos="zoom-in">
                            <h1 className='section_heading' data-aos="fade-up">
                                <img src={Star} alt="star" />
                                SELF SUMMARY
                                <img src={Star} alt="star" />
                            </h1>
                            <div className='about_details_inner shadow_box'>
                                <img src={StarIcon} alt="bg" className='star_icon' />
                                <h1>Shubham Raj</h1>
                                <p>
                                    Hi, I’m <span className="font-semibold">Shubham Raj</span> — you can call me <span className="font-semibold">Shubh</span>.  
                                    I’m a <span className="font-semibold">Full Stack Java Developer</span> with a passion for building robust, scalable, and secure applications.  
                                    I work primarily with <span className="font-semibold">React.js</span> and <span className="font-semibold">Spring Boot</span>,  
                                    integrating clean frontend design with powerful backend logic.  
                                    <br /><br />
                                    Having completed my <span className="font-semibold">BCA in 2025</span> from Aryabhatta Knowledge University, I’ve built projects ranging from 
                                    full-fledged e-commerce platforms to content dashboards and internal management systems.  
                                    <br /><br />
                                    I’m also exploring <span className="font-semibold">Cybersecurity</span> to deepen my understanding of how systems can stay both efficient and secure.  
                                    My approach blends creativity, logic, and curiosity — helping me craft solutions that truly make an impact.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-in">
                            <div className='about_edc_exp about_experience shadow_box mb-30'>
                                <img src={textureImg} alt="BG" className="bg_img" />
                                <h3>EXPERIENCE</h3>
                                <ul>
                                    <li>
                                        <p className="date">AUGUST 2025 - SEPTEMBER 2025</p>
                                        <h2>Full Stack Developer (Wix Studio)</h2>
                                        <p className="type">Ingenious Prime</p>
                                        <p className="desc">
                                            Developed an internal content and member management dashboard in Wix Studio with custom UI and CMS connectivity.  
                                            Built backend logic using <span className="font-semibold">Velo (JavaScript)</span> for dynamic data flows, workflow automation, and role-based access control.  
                                            Designed and implemented a Leave & Attendance Management System integrated with the company CMS.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="date">2024 - 2025</p>
                                        <h2>Freelance Full Stack Developer</h2>
                                        <p className="type">Independent Projects</p>
                                        <p className="desc">
                                            Worked on multiple full-stack applications using <span className="font-semibold">React.js</span>, 
                                            <span className="font-semibold">Spring Boot</span>, and <span className="font-semibold">MySQL</span>.  
                                            Focused on secure authentication systems, scalable APIs, and responsive web UIs for real-world clients.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="date">MARCH 2025 - PRESENT</p>
                                        <h2>Cybersecurity & Product Development</h2>
                                        <p className="type">Personal Learning & Research</p>
                                        <p className="desc">
                                            Exploring the fundamentals of <span className="font-semibold">cybersecurity</span>, ethical hacking, and secure coding practices.  
                                            Building projects that bridge backend engineering with security-first design principles.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in">
                            <div className='about_edc_exp about_experience shadow_box mb-30'>
                                <img src={textureImg} alt="BG" className="bg_img" />
                                <h3>EDUCATION</h3>
                                <ul>
                                    <li>
                                        <p className="date">2022 - 2025</p>
                                        <h2>Bachelor of Computer Applications (BCA)</h2>
                                        <p className="type">Aryabhatta Knowledge University, Patna</p>
                                        <p className="desc">
                                            {/* Graduated with <span className="font-semibold">8.31 CGPA</span> under Aryabhatta Knowledge University.   */}
                                            Focused on Java, C++, Database Management, and Web Development.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="date">2020 - 2021</p>
                                        <h2>Intermediate (Science)</h2>
                                        <p className="type">O.I.P.V Kesarbagh Khaira — BSEB</p>
                                    </li>
                                    <li>
                                        <p className="date">2017 - 2018</p>
                                        <h2>Matriculation (10th)</h2>
                                        <p className="type">International School, Patna (ICSE)</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <div className="info_box shadow_box">
                                <img src={textureImg} alt="bg" className='bg_img' />
                                <div className='inner_profile_icons inner_profile_icons_2 shadow_box'>
                                    <Link to="https://www.linkedin.com/in/shubhamrajshubh/" target='_blank'>
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                    <Link to="https://github.com/shubhcoding01" target="_blank">
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                                    </Link>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="infos">
                                        <h4>STAY WITH ME</h4>
                                        <h1>Profiles</h1>
                                    </div>
                                    <Link to="/contact" className="about_btn">
                                        <img src={nextIcon} alt="Button" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <WorkTogether />
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <AboutMe />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MoreAboutMe
