import Sidebar from "../sidebar/Sidebar";
import { useState } from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import resume from "../../../src/Mohamed Amine Guezmir CV.pdf";

const Navbar = () => {
  const [downloaded, setDownloaded] = useState(false);

  const downloadResume = () => {
    console.log("Downloading resume...");
    const link = document.createElement("a");
    link.href = resume;
    link.setAttribute("download", "Mohamed Amine Guezmir CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloaded(true);
  };
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Guez
        </motion.span>
        <div className="social">
          <button className="resume" onClick={downloadResume}>
            resume
          </button>
          <a
            href="https://www.facebook.com/profile.php?id=100010802672227"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com/guezmiramine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/instagram.png" alt="" />
          </a>
          <a
            href="https://www.youtube.com/@AmgzTv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/guezmir-amine/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
