// import React from "react";
// import textureImg from "../resources/images/background_texture.png";
// import Star from "../resources/images/star-2.png";
// import nextIcon from "../resources/images/Next_icon.svg";
// import "../styles/Works.css";
// import { Link } from "react-router-dom";
// import Footer from "../components/Footer";
// import { Helmet } from "react-helmet-async";
// import WorkData from "./data/WorkData";
// import Navbar from "../components/Navbar";

// const Works = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Work | {process.env.REACT_APP_APP_NAME}</title>
//       </Helmet>
//       <Navbar/>
//       <section className="project_area">
//         <div className="container">
//           <h1 className="section_heading" data-aos="fade-up">
//             <img src={Star} alt="star" />
//             All Projects
//             <img src={Star} alt="star" />
//           </h1>
//           <div className="row">
//             {WorkData.map((work) => (
//               <div
//                 className="col-lg-4 col-md-6 col-sm-6"
//                 data-aos="zoom-in"
//                 key={work.slug}
//               >
//                 <div className="project_item shadow_box">
//                   <Link
//                     className="overlay_link"
//                     to={`/work-details/${work.slug}`}
//                   ></Link>
//                   <img src={textureImg} alt="" className="bg_img" />
//                   <div className="project_img">
//                     <img src={work.image} alt="project1" />
//                   </div>
//                   <div className="d-flex align-items-center justify-content-between">
//                     <div className="project_info">
//                       <h1>{work.name}</h1>
//                     </div>
//                     <Link
//                       to={`/work-details/${work.slug}`}
//                       className="project_btn"
//                     >
//                       <img src={nextIcon} alt="Button" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Works;

import React from "react";
import textureImg from "../resources/images/background_texture.png";
import Star from "../resources/images/star-2.png";
import nextIcon from "../resources/images/Next_icon.svg";
import "../styles/Works.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";

// ✅ Updated Project Data
const WorkData = [
  {
    name: "Multi-Vendor E-Commerce Platform",
    slug: "ecommerce-management-system",
    image: "https://ibb.co/BSYRC5x/ecommerce-platform.jpg",
  },
  {
    name: "AI Pipeline Builder",
    slug: "ai-pipeline-builder",
    image: "https://i.ibb.co/J5kJtbp/ai-pipeline-builder.jpg",
  },
  {
    name: "Wix Content Dashboard",
    slug: "wix-content-dashboard",
    image: "https://i.ibb.co/qYc5bK5/wix-dashboard.jpg",
  },
  {
    name: "Modern Developer Portfolio",
    slug: "portfolio-redesign",
    image: "https://i.ibb.co/KFbHY6h/portfolio-redesign.jpg",
  },
  {
    name: "Seller Dashboard & Order System",
    slug: "seller-dashboard",
    image: "https://i.ibb.co/rdGCrqT/seller-dashboard.jpg",
  },
  {
    name: "Employee Task Management App",
    slug: "employee-task-app",
    image: "https://i.ibb.co/6Zg1dtT/employee-task.jpg",
  },
];

const Works = () => {
  return (
    <>
      <Helmet>
        <title>Projects | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar />
      <section className="project_area">
        <div className="container">
          <h1 className="section_heading" data-aos="fade-up">
            <img src={Star} alt="star" />
            All Projects
            <img src={Star} alt="star" />
          </h1>

          <div className="row">
            {WorkData.map((work) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6"
                data-aos="zoom-in"
                key={work.slug}
              >
                <div className="project_item shadow_box">
                  <Link
                    className="overlay_link"
                    to={`/work-details/${work.slug}`}
                  ></Link>

                  <img src={textureImg} alt="texture" className="bg_img" />

                  <div className="project_img">
                    <img src={work.image} alt={work.name} />
                  </div>

                  <div className="d-flex align-items-center justify-content-between">
                    <div className="project_info">
                      <h1>{work.name}</h1>
                    </div>
                    <Link
                      to={`/work-details/${work.slug}`}
                      className="project_btn"
                    >
                      <img src={nextIcon} alt="Next" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Works;
