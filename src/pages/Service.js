// import React from 'react'
// import textureImg from '../resources/images/background_texture.png'
// import camera from '../resources/images/Camera.svg'
// import design from '../resources/images/design-nib.svg'
// import figma from '../resources/images/figma.svg'
// import code from '../resources/images/dev-mode-laptop.svg'
// import Star from '../resources/images/star-2.png'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import AboutMe from '../components/AboutMe'
// import nextIcon from '../resources/images/Next_icon.svg'
// import WorkTogether from '../components/WorkTogether'
// import "../styles/Service.css"
// import "../styles/Home.css"
// import { Link } from 'react-router-dom'
// import { Helmet } from 'react-helmet-async'

// const Service = () => {
//     return (
//         <>
//             <Helmet>
//                 <title>
//                     Service | {process.env.REACT_APP_APP_NAME}
//                 </title>
//             </Helmet>
//             <Navbar/>
//             <section className="service_area">
//                 <div className="container">
//                     <h1 className='section_heading'>
//                         <img src={Star} alt="" />
//                         MY OFFERINGS
//                         <img src={Star} alt="" />
//                     </h1>
//                     <div className="row mb-30">
//                         <div className="col-md-4">
//                             <div className="service_sidebar" data-aos="fade-right">
//                                 <div className='service_sidebar_inner shadow_box'>
//                                     <ul>
//                                         <li>
//                                             <img src={camera} alt="" />
//                                             Brand Designing
//                                         </li>
//                                         <li>
//                                             <img src={figma} alt="" />
//                                             UI UX DESIGN
//                                         </li>
//                                         <li>
//                                             <img src={design} alt="" />
//                                             WEB DESIGNING
//                                         </li>
//                                         <li>
//                                             <img src={code} alt="" />
//                                             WEB APP DEVELOPMENT
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-8">
//                             <h1 className='section_heading' data-aos="fade-up">
//                                 <img src={Star} alt="" />
//                                 MY OFFERINGS
//                                 <img src={Star} alt="" />
//                             </h1>
//                             <div className="service_content_wrap" data-aos="zoom-in">
//                                 <div className="service_content_inner shadow_box">
//                                     <div className="service_items">
//                                         <div className="service_item">
//                                             <h3>Brand Designing</h3>
//                                             <p>Brand designing involves creating a strong visual identity that aligns with business goals and market positioning. I specialize in developing strategic brand assets, including logos, typography, color palettes, and design systems that enhance brand recognition and credibility. My expertise extends to crafting high-quality brand visuals, storytelling elements, and marketing materials that create a lasting impact. I create custom branding solutions that enhance credibility and customer engagement across all platforms.</p>
//                                         </div>
//                                         <div className="service_item">
//                                             <h3>UI UX DESIGN</h3>
//                                             <p>UI UX design focuses on delivering seamless digital experiences by combining user research, interaction design, and visual aesthetics. I design intuitive and responsive interfaces that enhance usability, improve engagement, and drive conversions. My approach ensures consistency across platforms while maintaining a user-centered focus through prototyping, usability testing, and design system implementation. My expertise includes wireframing, prototyping, usability testing, and building scalable design systems that enhance product usability and brand impact.</p>
//                                         </div>
//                                         <div className="service_item">
//                                             <h3>WEB DESIGNING</h3>
//                                             <p>Web designing is about building visually appealing, high-performance websites that provide excellent user experiences. I create modern and responsive websites that follow the latest design trends while optimizing performance, accessibility, and scalability. My expertise includes interactive elements, motion design, and structured layouts that enhance functionality and visual appeal. I design user-friendly and responsive layouts that adapt to different screen sizes while integrating modern design trends, accessibility standards, and SEO strategies to maximize reach and engagement.</p>
//                                         </div>
//                                         <div className="service_item">
//                                             <h3>WEB APP DEVELOPMENT</h3>
//                                             <p>Web app development involves designing and developing scalable, secure, and high-performance applications that meet business objectives. I specialize in full-stack development, integrating advanced frontend frameworks with efficient backend architectures. My expertise includes optimizing application performance, implementing secure authentication systems, and managing databases for seamless data handling. I build web applications that ensure reliability, scalability, and a smooth user experience across different devices Whether it’s a dynamic single-page application or a feature-rich enterprise solution, I ensure performance, security, and a seamless user experience.</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
//                             <div className="info_box shadow_box">
//                                 <img src={textureImg} alt="bg" className='bg_img' />
//                                 <div className='inner_profile_icons inner_profile_icons_2 shadow_box'>
//                                     <Link to="https://www.linkedin.com/in/ashutoshkumaraashu/" target='_blank'>
//                                         <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path><path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//                                     </Link>
//                                     <Link to="https://github.com/codeaashu" target="_blank">
//                                         <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF"><path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg>
//                                     </Link>
//                                 </div>
//                                 <div className="d-flex align-items-center justify-content-between">
//                                     <div className="infos">
//                                         <h4>STAY WITH ME</h4>
//                                         <h1>Profiles</h1>
//                                     </div>
//                                     <Link to="/contact" className="about_btn">
//                                         <img src={nextIcon} alt="Button" />
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-6 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
//                             <WorkTogether />
//                         </div>
//                         <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
//                             <AboutMe />
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <Footer />

//         </>
//     )
// }

// export default Service


import React from 'react'
import textureImg from '../resources/images/background_texture.png'
import code from '../resources/images/dev-mode-laptop.svg'
import backend from '../resources/images/backend.png'
import design from '../resources/images/design-nib.svg'
import security from '../resources/images/security.png'
import Star from '../resources/images/star-2.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AboutMe from '../components/AboutMe'
import nextIcon from '../resources/images/Next_icon.svg'
import WorkTogether from '../components/WorkTogether'
import "../styles/Service.css"
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Service = () => {
    return (
        <>
            <Helmet>
                <title>Services | {process.env.REACT_APP_APP_NAME}</title>
            </Helmet>
            <Navbar />
            <section className="service_area">
                <div className="container">
                    <h1 className='section_heading'>
                        <img src={Star} alt="" />
                        MY EXPERTISE
                        <img src={Star} alt="" />
                    </h1>

                    <div className="row mb-30">
                        <div className="col-md-4">
                            <div className="service_sidebar" data-aos="fade-right">
                                <div className='service_sidebar_inner shadow_box'>
                                    <ul>
                                        <li>
                                            <img src={code} alt="" />
                                            Full Stack Development
                                        </li>
                                        <li>
                                            <img src={backend} alt="" />
                                            Backend Engineering (Java / Python)
                                        </li>
                                        <li>
                                            <img src={design} alt="" />
                                            UI / UX & Frontend Development
                                        </li>
                                        <li>
                                            <img src={security} alt="" />
                                            Cybersecurity & Secure Coding
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-8">
                            <h1 className='section_heading' data-aos="fade-up">
                                <img src={Star} alt="" />
                                WHAT I DO
                                <img src={Star} alt="" />
                            </h1>

                            <div className="service_content_wrap" data-aos="zoom-in">
                                <div className="service_content_inner shadow_box">
                                    <div className="service_items">

                                        <div className="service_item">
                                            <h3>Full Stack Web Development</h3>
                                            <p>
                                                I build complete web solutions — from database to user interface — using modern technologies like 
                                                <b> React.js, Spring Boot, Django, and MySQL</b>. My focus is on performance, clean architecture, 
                                                and scalability. From multi-vendor e-commerce platforms to content management systems, 
                                                I ensure seamless integration between frontend and backend layers.
                                            </p>
                                        </div>

                                        <div className="service_item">
                                            <h3>Backend Engineering (Java / Python)</h3>
                                            <p>
                                                I develop secure, optimized backend systems using <b>Spring Boot</b> and <b>Django</b>. 
                                                My expertise includes building RESTful APIs, authentication systems (JWT / OAuth), 
                                                database schema design, and backend automation. I follow modular and maintainable code practices 
                                                for long-term scalability.
                                            </p>
                                        </div>

                                        <div className="service_item">
                                            <h3>UI / UX & Frontend Development</h3>
                                            <p>
                                                I design and develop intuitive user interfaces with <b>React.js, Tailwind CSS, and MUI</b>. 
                                                My frontend work emphasizes user-centric design, responsiveness, and interactivity. 
                                                I combine design thinking with efficient development to create seamless user experiences 
                                                across all devices.
                                            </p>
                                        </div>

                                        <div className="service_item">
                                            <h3>Cybersecurity & Secure Coding</h3>
                                            <p>
                                                I’m exploring the field of <b>cybersecurity</b> to integrate security principles into web development. 
                                                My goal is to design applications that are not just functional but also resilient against threats. 
                                                I follow secure coding practices, input validation, and authentication hardening 
                                                while learning ethical hacking and network security fundamentals.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 mb-30" data-aos="zoom-in">
                            <div className="info_box shadow_box">
                                <img src={textureImg} alt="bg" className='bg_img' />
                                <div className='inner_profile_icons inner_profile_icons_2 shadow_box'>
                                    <Link to="https://www.linkedin.com/in/shubhamrajshubh" target='_blank'>
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                                            <path d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </Link>
                                    <Link to="https://github.com/shubhcoding01" target="_blank">
                                        <svg width="16px" height="16px" strokeWidth="1.6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#FFFFFF">
                                            <path d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
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

export default Service
