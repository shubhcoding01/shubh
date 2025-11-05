// import React from "react";
// import linkArrow from "../resources/images/link-arrow.svg";
// import Star from "../resources/images/star-2.png";
// import StarIcon from "../resources/images/star-icon.png";
// import textureImg from "../resources/images/background_texture.png";
// import Footer from "../components/Footer";
// import "../styles/WorkDetails.css";
// import { Helmet } from "react-helmet-async";
// import { Link, useParams } from "react-router-dom";
// import WorkData from "./data/WorkData";
// import Navbar from "../components/Navbar";

// const WorkDetails = () => {
//   const { slug } = useParams();

//   const projectData = WorkData.find((work) => work.slug === String(slug));

//   if (!projectData) {
//     return (
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           height: "100vh",
//           justifyContent: "center",
//         }}
//       >
//         Work not found.
//       </div>
//     );
//   }
//   return (
//     <>
//       <Helmet>
//         <title>Work Detail | {process.env.REACT_APP_APP_NAME}</title>
//       </Helmet>
//       <Navbar />
//       <section className="breadcrumb_area">
//         <div className="container">
//           <div className="breadcrumb_content" data-aos="fade-up">
//             <p>{projectData.name}</p>
//             <h1 className="section_heading">
//               <img src={Star} alt="star" />
//               {projectData.title}
//               <img src={Star} alt="star" />
//             </h1>
//           </div>
//         </div>
//       </section>
//       <section className="project_details_wrap">
//         <div className="project_details_img" data-aos="zoom-in">
//           <img src={projectData.bannerImage} alt="project banner" />
//           <img src={projectData.image} alt="project thumbnail" className="main-img" />
//           <div className="live_link" data-aos="fade-up">
//             {projectData.liveLink && (
//               <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer">
//                 Click to Watch
//                 <img src={linkArrow} alt="link arrow" className="linkArrow" />
//               </a>
//             )}
//           </div>
//         </div>
//         <div className="container">
//           <div data-aos="zoom-in">
//             <div className="d-flex project_infos_wrap shadow_box">
//               <img src={textureImg} alt="" className="bg_img" />
//               <img src={StarIcon} alt="star icon" className="star_icon" />
//               <div className="project_details_info flex-1">
//                 <h3>{projectData.name}</h3>
//                 <p>{projectData.detailsInfo}</p>
//               </div>
//               <div className="project_details_info flex-1">
//                 <h3>Tech Stack</h3>
//                 {projectData.techStack.frontend && <p>Frontend: {projectData.techStack.frontend}</p>}
//                 {projectData.techStack.backend && <p>Backend: {projectData.techStack.backend}</p>}
//                 {projectData.techStack.database && <p>Database: {projectData.techStack.database}</p>}
//                 {projectData.techStack.api && <p>API: {projectData.techStack.api}</p>}
//                 {projectData.techStack.design && <p>Design: {projectData.techStack.design}</p>}
//                 {projectData.techStack.OtherTools && <p>Other Tools: {projectData.techStack.OtherTools}</p>}
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6" data-aos="zoom-in">
//               <div className="project_details_3_img">
//                 <img src={projectData.image1} alt="image1" />
//               </div>
//             </div>
//             <div className="col-md-6" data-aos="zoom-in">
//               <div className="project_details_3_img">
//                 <img src={projectData.image2} alt="image2" />
//               </div>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-6" data-aos="zoom-in">
//               <div className="project_details_3_img">
//                 <img src={projectData.image3} alt="image3" />
//               </div>
//             </div>
//             <div className="col-md-6" data-aos="zoom-in">
//               <div className="project_details_3_img">
//                 <img src={projectData.image4} alt="image4" />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div
//           className="container d-flex align-items-center justify-content-center"
//           data-aos="zoom-in"
//         >
//           {projectData.nextProject && (
//             <button
//               className="big_btn shadow_box"
//               onClick={() => (window.location.href = projectData.nextProject)}
//             >
//               Next Project
//             </button>
//           )}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default WorkDetails;

import React from "react";
import linkArrow from "../resources/images/link-arrow.svg";
import Star from "../resources/images/star-2.png";
import StarIcon from "../resources/images/star-icon.png";
import textureImg from "../resources/images/background_texture.png";
import Footer from "../components/Footer";
import "../styles/WorkDetails.css";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

// ✅ Full Project Data with Details
const WorkData = [
  {
    slug: "ecommerce-management-system",
    name: "Multi-Vendor E-Commerce Platform",
    title: "E-Commerce Management System",
    image: "https://i.ibb.co/9cWZ4Gy/ecommerce-platform.jpg",
    bannerImage: "https://i.ibb.co/ZWkWkmN/ecommerce-banner.jpg",
    detailsInfo:
      "A full-stack multi-vendor e-commerce platform built using Spring Boot (backend) and React (frontend). Features include secure JWT authentication, product browsing, category filtering, seller dashboards, and admin management.",
    techStack: {
      frontend: "React.js, Redux Toolkit, Tailwind CSS, MUI",
      backend: "Spring Boot, Java, REST API",
      database: "MySQL",
      design: "Figma, Photoshop",
      OtherTools: "JWT Auth, Maven, Git",
    },
    image1: "https://i.ibb.co/qgfV1rf/ecommerce1.jpg",
    image2: "https://i.ibb.co/fSkb9kQ/ecommerce2.jpg",
    image3: "https://i.ibb.co/W5tR7LM/ecommerce3.jpg",
    image4: "https://i.ibb.co/ZmfrS7k/ecommerce4.jpg",
    liveLink: "https://github.com/shubhcoding01/ecomproject",
    nextProject: "/work-details/ai-pipeline-builder",
  },
  {
    slug: "ai-pipeline-builder",
    name: "AI Pipeline Builder",
    title: "VectorShift Technical Assessment",
    image: "https://i.ibb.co/J5kJtbp/ai-pipeline-builder.jpg",
    bannerImage: "https://i.ibb.co/vh4tm1H/ai-banner.jpg",
    detailsInfo:
      "A React + FastAPI-based pipeline builder using React Flow for visual workflow creation. Supports custom node abstraction (InputNode, LLMNode, OutputNode, TextNode) with real-time validation and pipeline submission.",
    techStack: {
      frontend: "React.js, React Flow, Tailwind CSS",
      backend: "FastAPI, Python",
      database: "SQLite",
      api: "REST APIs for validation and execution",
      OtherTools: "Framer Motion, Axios",
    },
    image1: "https://i.ibb.co/7KPCn6n/pipeline1.jpg",
    image2: "https://i.ibb.co/qghNw3D/pipeline2.jpg",
    image3: "https://i.ibb.co/NsV2J6S/pipeline3.jpg",
    image4: "https://i.ibb.co/3v7ZpNb/pipeline4.jpg",
    liveLink: "https://github.com/shubhcoding01/Pipeline-Builder",
    nextProject: "/work-details/wix-content-dashboard",
  },
  {
    slug: "wix-content-dashboard",
    name: "Wix Content Management Dashboard",
    title: "Wix Studio CMS & Role System",
    image: "https://i.ibb.co/qYc5bK5/wix-dashboard.jpg",
    bannerImage: "https://i.ibb.co/CQWg2wB/wix-banner.jpg",
    detailsInfo:
      "Developed an internal content and member management dashboard in Wix Studio using Velo (JavaScript). Implemented CMS integration, custom lightboxes for CRUD operations, and a role-based workflow system.",
    techStack: {
      frontend: "Wix Studio, Velo (JS), Custom Lightboxes",
      backend: "Wix Data APIs, JSW Backend Functions",
      database: "Wix CMS Collections",
      OtherTools: "Member Roles, Dynamic Forms",
    },
    image1: "https://i.ibb.co/gZkLShf/wix1.jpg",
    image2: "https://i.ibb.co/BCLLkR3/wix2.jpg",
    image3: "https://i.ibb.co/5G7bbhp/wix3.jpg",
    image4: "https://i.ibb.co/sqMxn7t/wix4.jpg",
    liveLink: "",
    nextProject: "/work-details/portfolio-redesign",
  },
  {
    slug: "portfolio-redesign",
    name: "Modern Developer Portfolio",
    title: "3D Glassmorphic Portfolio",
    image: "https://i.ibb.co/KFbHY6h/portfolio-redesign.jpg",
    bannerImage: "https://i.ibb.co/5GJMg7R/portfolio-banner.jpg",
    detailsInfo:
      "A personal developer portfolio designed using React and Tailwind CSS with glassmorphism and 8D effects. Includes animated sections, dynamic project showcase, and SEO-optimized pages.",
    techStack: {
      frontend: "React.js, Tailwind CSS, AOS, Framer Motion",
      backend: "-",
      OtherTools: "React Router, React Helmet",
    },
    image1: "https://i.ibb.co/TqL4JPm/portfolio1.jpg",
    image2: "https://i.ibb.co/n3N1m7P/portfolio2.jpg",
    image3: "https://i.ibb.co/BcZjhm5/portfolio3.jpg",
    image4: "https://i.ibb.co/s94WcLJ/portfolio4.jpg",
    liveLink: "https://shubh-portfolio.vercel.app/",
    nextProject: "/work-details/seller-dashboard",
  },
  {
    slug: "seller-dashboard",
    name: "Seller Dashboard & Order Management",
    title: "Seller Portal for E-Commerce",
    image: "https://i.ibb.co/rdGCrqT/seller-dashboard.jpg",
    bannerImage: "https://i.ibb.co/LrrQ6WZ/seller-banner.jpg",
    detailsInfo:
      "A complete seller management panel built using React and Spring Boot. Allows order tracking, status updates, analytics, and JWT-based secure access for sellers.",
    techStack: {
      frontend: "React.js, MUI, Tailwind CSS",
      backend: "Spring Boot, Java",
      database: "MySQL",
      OtherTools: "Redux Toolkit, JWT Auth",
    },
    image1: "https://i.ibb.co/LdTyyRZ/seller1.jpg",
    image2: "https://i.ibb.co/njsdcqk/seller2.jpg",
    image3: "https://i.ibb.co/vDTR5kx/seller3.jpg",
    image4: "https://i.ibb.co/9T1pnhb/seller4.jpg",
    liveLink: "",
    nextProject: "/work-details/employee-task-app",
  },
  {
    slug: "employee-task-app",
    name: "Employee Task Management App",
    title: "Admin-User Task Tracker",
    image: "https://i.ibb.co/6Zg1dtT/employee-task.jpg",
    bannerImage: "https://i.ibb.co/6vFrz5p/employee-banner.jpg",
    detailsInfo:
      "A lightweight task management application allowing admins to assign, track, and manage employee tasks efficiently. Features include user authentication, task filtering, and progress tracking.",
    techStack: {
      frontend: "React.js, Tailwind CSS",
      backend: "Node.js (future upgrade planned)",
      database: "LocalStorage / MySQL (in dev)",
      OtherTools: "Formik, Axios",
    },
    image1: "https://i.ibb.co/Xk1qmy6/employee1.jpg",
    image2: "https://i.ibb.co/BVs3zqt/employee2.jpg",
    image3: "https://i.ibb.co/qYyCRzr/employee3.jpg",
    image4: "https://i.ibb.co/D7DF0g1/employee4.jpg",
    liveLink: "",
    nextProject: "/work-details/ecommerce-management-system",
  },
];

const WorkDetails = () => {
  const { slug } = useParams();
  const projectData = WorkData.find((work) => work.slug === String(slug));

  if (!projectData) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100vh",
          justifyContent: "center",
          fontSize: "1.2rem",
          color: "#ccc",
        }}
      >
        Project not found.
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{projectData.name} | {process.env.REACT_APP_APP_NAME}</title>
      </Helmet>
      <Navbar />

      <section className="breadcrumb_area">
        <div className="container">
          <div className="breadcrumb_content" data-aos="fade-up">
            <p>{projectData.name}</p>
            <h1 className="section_heading">
              <img src={Star} alt="star" />
              {projectData.title}
              <img src={Star} alt="star" />
            </h1>
          </div>
        </div>
      </section>

      <section className="project_details_wrap">
        <div className="project_details_img" data-aos="zoom-in">
          <img src={projectData.bannerImage} alt="project banner" />
          <img src={projectData.image} alt="project thumbnail" className="main-img" />

          {projectData.liveLink && (
            <div className="live_link" data-aos="fade-up">
              <a href={projectData.liveLink} target="_blank" rel="noopener noreferrer">
                Visit Project
                <img src={linkArrow} alt="link arrow" className="linkArrow" />
              </a>
            </div>
          )}
        </div>

        <div className="container">
          <div data-aos="zoom-in">
            <div className="d-flex project_infos_wrap shadow_box">
              <img src={textureImg} alt="" className="bg_img" />
              <img src={StarIcon} alt="star icon" className="star_icon" />

              <div className="project_details_info flex-1">
                <h3>Overview</h3>
                <p>{projectData.detailsInfo}</p>
              </div>

              <div className="project_details_info flex-1">
                <h3>Tech Stack</h3>
                {Object.entries(projectData.techStack).map(([key, value]) => (
                  <p key={key}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            {[projectData.image1, projectData.image2, projectData.image3, projectData.image4]
              .filter(Boolean)
              .map((img, idx) => (
                <div className="col-md-6" data-aos="zoom-in" key={idx}>
                  <div className="project_details_3_img">
                    <img src={img} alt={`project-${idx}`} />
                  </div>
                </div>
              ))}
          </div>

          {projectData.nextProject && (
            <div
              className="container d-flex align-items-center justify-content-center"
              data-aos="zoom-in"
            >
              <button
                className="big_btn shadow_box"
                onClick={() => (window.location.href = projectData.nextProject)}
              >
                Next Project
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WorkDetails;
