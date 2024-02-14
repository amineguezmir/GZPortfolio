import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I specialize in enhancing your online presence
          <br /> through web development
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>End-to-End</motion.b>{" "}
            Ideas for
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>
              Web Development
            </motion.b>{" "}
            Services .
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Web Development</h2>
          <p>
            Leveraging a robust skill set in both front-end and back-end
            technologies, I craft dynamic and responsive web solutions tailored
            to your unique needs. From intuitive user interfaces using HTML,
            CSS, and JavaScript to scalable server-side applications with
            Node.js, and Others, I deliver end-to-end web development services
            that elevate your online presence and drive business growth.
          </p>
          <button>Conatct Me</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Responsive Web Design</h2>
          <p>
            With a keen eye for detail and a passion for creating engaging user
            experiences, I specialize in crafting responsive web designs that
            adapt seamlessly across all devices and screen sizes. Utilizing
            modern frameworks such as React.js and Angular, coupled with my
            expertise in CSS preprocessors like Sass and Less, I ensure that
            your website not only looks stunning but also performs flawlessly on
            every platform.
          </p>
          <button>Conatct Me</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Database Management</h2>
          <p>
            Data lies at the heart of every successful web application, and I
            excel in designing and implementing robust database solutions to
            efficiently manage and organize your information. Whether it's
            relational databases like MySQL and PostgreSQL or NoSQL databases
            such as MongoDB and Firebase, I leverage my expertise to optimize
            data storage, retrieval, and manipulation, ensuring the scalability
            and performance of your application.
          </p>
          <button>Conatct Me</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>E-commerce Solutions</h2>
          <p>
            Transforming your business into a thriving online marketplace, I
            specialize in developing custom e-commerce solutions that streamline
            the buying experience for your customers and empower you to manage
            your products and sales effectively. Leveraging frameworks like
            Django and Express.js, coupled with payment gateways like Stripe and
            PayPal, I deliver secure and scalable e-commerce platforms that
            drive conversions and maximize revenue.
          </p>
          <button>Conatct Me</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
