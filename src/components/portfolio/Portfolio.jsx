import React from "react";
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Codini",
    img: "/codini.png",
    desc: "Dynamic e-learning platform offering interactive quizzes, engaging games, and comprehensive courses. Secure payment integration ensures seamless transactions. Enjoy access on both mobile and web platforms for flexible learning anytime, anywhere.",
    sourceCode: "https://github.com/Codini-Porject/Codini",
  },
  {
    id: 2,
    title: "Hannibal",
    img: "hannibal.png",
    desc: "Efficient e-commerce platform providing seamless browsing, secure transactions, and personalized user experiences. Explore a vast range of products with ease, enhanced by intuitive navigation and swift checkout processes.",
    sourceCode:
      "https://github.com/E-Commerce-Website-GreenField-V2/E-Commerce-Website",
  },
  {
    id: 3,
    title: "Buy Me All",
    img: "download.png",
    desc: "Streamlined e-commerce hub offering a diverse product range, intuitive navigation, and secure transactions. Elevate your shopping experience with seamless browsing and convenient checkout options.",
    sourceCode: "https://github.com/Reafactor-Project/Leagacy-Project",
  },
  {
    id: 4,
    title: "Pintastic",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Discover and share inspiration effortlessly on our Pinterest-like platform. Explore an array of captivating content, curated to inspire and engage users. Seamlessly pin and organize your favorite finds with intuitive tools for personalized collections.",
    sourceCode:
      "https://github.com/Team-5-Pinterest-clone/Team-5-Pinterest-clone",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  const handleClick = () => {
    window.open(item.sourceCode, "_blank");
  };

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={handleClick}>
              See Demo (not available for the moment)
            </button>
            <button onClick={handleClick}>Source Code</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
