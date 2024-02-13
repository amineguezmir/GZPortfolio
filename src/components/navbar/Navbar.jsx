import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
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
            href="https://www.youtube.com/@AmgzTv/videos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
