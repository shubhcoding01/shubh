import React from "react";
import textureImg from "../resources/images/background_texture.png";
import sshubh from "../sshubh/profilebw.jpg";
import nextIcon from "../resources/images/Next_icon.svg";
import starIcon from "../resources/images/star1.svg";
import "../styles/Home.css";
import Projects from "../components/Projects";
import { Link } from "react-router-dom";
import AboutMe from "../components/AboutMe";
import Service from "../components/ServiceOffering";
import Profile from "../components/Profile";
import WorkTogether from "../components/WorkTogether";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Shubham Raj Portfolio</title>
      </Helmet>
      <Navbar/>
      <section className="about_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_me_box shadow_box">
                <Link to="/about" className="overlay_link"></Link>
                <img src={textureImg} alt="" className="bg_img" />
                <div className="img_box">
                  <img src={sshubh} alt="" />
                </div>
                <div className="infos">
                  <h4>Web Developer</h4>
                  <h1>Shubham Raj</h1>
                  <p>Crafting AI-powered and secure web apps with a passion for innovation, precision, and creativity.</p>
                  <Link href="#" className="about_btn">
                    <img src={nextIcon} alt="Button" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="zoom-in">
              <div className="row h-100">
                <div className="col-lg-12">
                  <div className="banner shadow_box">
                    <div className="marquee">
                      <div>
                        <div className="flex flex-wrap justify-center items-center gap-4 text-lg md:text-xl font-semibold text-white tracking-wide">
                        <span className="flex items-center gap-2">
                          🧑‍💻 Code&nbsp;Secure&nbsp;+&nbsp;Build&nbsp;Smart&nbsp;=&nbsp;<b className="text-cyan-400">Trust</b>
                          <img decoding="async" src={starIcon} alt="Star" className="w-5 h-5 animate-pulse" />
                        </span>

                        <span className="flex items-center gap-2">
                          🔒 Create&nbsp;+&nbsp;Protect&nbsp;=&nbsp;<b className="text-emerald-400">Confidence</b>
                          <img decoding="async" src={starIcon} alt="Star" className="w-5 h-5 animate-spin-slow" />
                        </span>

                        <span className="flex items-center gap-2">
                          💡 Innovation&nbsp;+&nbsp;Security&nbsp;=&nbsp;<b className="text-yellow-400">Excellence</b>
                          <img decoding="async" src={starIcon} alt="Star" className="w-5 h-5 animate-bounce" />
                        </span>

                        <span className="flex items-center gap-2">
                          🛡️ Developer&nbsp;+&nbsp;Defender&nbsp;=&nbsp;<b className="text-purple-400">Next&nbsp;Gen</b>
                          <img decoding="async" src={starIcon} alt="Star" className="w-5 h-5 animate-pulse" />
                        </span>

                        <span className="flex items-center gap-2">
                          ⚙️ Build&nbsp;Fast&nbsp;+&nbsp;Stay&nbsp;Secure&nbsp;=&nbsp;<b className="text-rose-400">Win</b>
                          <img decoding="async" src={starIcon} alt="Star" className="w-5 h-5 animate-spin-slow" />
                        </span>
                      </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                  <AboutMe />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                  <Projects />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <Service />
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <Profile />
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <div className="about_client_box info_box shadow_box">
                <img src={textureImg} alt="bg" className="bg_img" />
                <div className="clients d-flex align-items-start justify-content-center">
                  <div className="client_item">
                    <h1>03</h1>
                    <p>
                      Years <br />
                      Experience
                    </p>
                  </div>
                  <div className="client_item">
                    <h1>30+</h1>
                    <p>
                      CLIENTS <br />
                      WORLDWIDE
                    </p>
                  </div>
                  <div className="client_item">
                    <h1>+90</h1>
                    <p>
                      TOTAL <br />
                      PROJECTS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-30" data-aos="zoom-in">
              <WorkTogether />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
