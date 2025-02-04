import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaBullhorn, FaBriefcase, FaLightbulb } from 'react-icons/fa';
import  heroImage  from '../../img/hero-image.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Vector3 from '../../img/Vector3.png';
import Vector4 from '../../img/Vector4.png';

const Hero = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const floatingVariants = {
    float: {
      y: [0, -20, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const glowVariants = {
    hidden: { textShadow: "0 0 0 rgba(0, 0, 0, 0)" },
    visible: {
      textShadow: [
        "0 0 0 rgba(0, 0, 0, 0)",
        "0 0 10px rgba(96, 165, 250, 0.8)",
        "0 0 20px rgba(96, 165, 250, 0.6)",
        "0 0 0 rgba(0, 0, 0, 0)",
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const flipVariants = {
    hover: {
      rotateY: 360,
      scale: 1.1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="relative py-10 md:py-20 overflow-hidden">
      <img src="" alt="" />
      {/* Background Gradient Animation */}
      <motion.div
        className="absolute inset-0 bg-black"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />

      {/* Particle Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-300 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-10 relative">
        <div className="flex flex-col-reverse lg:flex-row items-center">
          {/* Text Content with animation */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            ref={ref}
          >
            {/* Circular Borders Background */}
            <div className="absolute top-0 -left-14">
              {/* Outer Circle */}
              <div className="rounded-full border-2 border-gray-600 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] absolute"></div>
              {/* Second Circle */}
              <div className="rounded-full border-2 border-gray-600 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] absolute top-[25px] left-[25px]"></div>
              {/* Third Circle */}
              <div className="rounded-full border-2 border-gray-700 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] absolute top-[50px] left-[50px]"></div>
              {/* Fourth Circle */}
              <div className="rounded-full border-2 border-gray-700 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] absolute top-[90px] left-[90px]"></div>
            </div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-400 leading-tight relative z-[1]"
              variants={itemVariants}
              animate="visible"
              initial="hidden"
            >
              Where Creativity Meets{" "}
              <motion.span
                className="text-blue-500 relative z-[1]"
                variants={glowVariants}
                animate="visible"
                initial="hidden"
              >
                 Code
              </motion.span>{" "}
               and {" "}
              <motion.span
                className="text-purple-600 relative z-[1]"
                variants={glowVariants}
                animate="visible"
                initial="hidden"
              >
              Excellence 
              </motion.span>{" "}
              Takes Flight
            </motion.h1>
            <motion.p
              className="mt-6   text-base sm:text-lg relative z-[1]"
              variants={itemVariants}
            >
              Learn UI-UX Design skills with weekend UX. The latest online
              learning system and material that help your knowledge grow.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 relative z-[1]"
              variants={itemVariants}
            >
              <motion.button
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition bg-gradient-to-r from-blue-500 to-purple-500 relative z-[1]"
                whileHover={{ scale: 1.1, backgroundPosition: "100% 50%" }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
              <motion.button
                className="bg-purple-100 text-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-200 transition relative z-[1]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Trial
              </motion.button>
            </motion.div>
            {/* New Features Section */}
            <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-8 relative z-[1]">
              {/* Feature 1 */}
              <div className="relative flex flex-row items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <FaBullhorn className="w-7 h-7 text-purple-600" /> {/* Public Speaking Icon */}
                </div>
                <p className="mt-2 text-sm  ">Public Speaking</p>
              </div>
              {/* Feature 2 */}
              <div className="relative flex flex-row items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <FaBriefcase className="w-7 h-7 text-blue-600" /> {/* Career Oriented Icon */}
                </div>
                <p className="mt-2 text-sm  ">Career-Oriented</p>
              </div>
              {/* Feature 3 */}
              <div className="relative flex flex-row items-center">
                <div className="w-10 h-10 flex items-center justify-center">
                  <FaLightbulb className="w-7 h-7 text-yellow-600" /> {/* Creative Thinking Icon */}
                </div>
                <p className="mt-2 text-sm  ">Creative Thinking</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image and Stats with animation */}
          <motion.div
            className="w-full lg:w-1/2 relative flex justify-center lg:justify-end mt-10 lg:mt-0"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Outer Circle */}
              <motion.div
                className="absolute inset-0 border-4 border-purple-300 rounded-full transform scale-110"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Inner Circles */}
              {[0, 90, 180, 270].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 sm:w-16 sm:h-16 bg-purple-200 rounded-full"
                  style={{
                    top: `calc(50% - 2rem)`,
                    left: `calc(50% - 2rem)`,
                    transform: `rotate(${angle}deg) translateX(6rem) rotate(-${angle}deg)`,
                  }}
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              ))}

              <motion.img
                src={heroImage}
                alt="Hero"
                className="rounded-full w-full max-w-md h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] shadow-xl bg-blue-500 z-[1]"
                variants={floatingVariants}
                animate="float"
              />
             <motion.div
  className="absolute -top-7 right-5 bg-white rounded-lg shadow-lg p-4 text-center w-28 sm:w-32"
  variants={{
    ...itemVariants,
    ...flipVariants,
  }} // Merged `variants`
  whileHover="hover"
>
  <p className="text-xl sm:text-2xl font-bold text-gray-500">5K+</p>
  <p className="text-xs sm:text-sm text-gray-500">Online Courses</p>
</motion.div>

<motion.div
  className="absolute top-1/2 -translate-y-1/2 -left-14 bg-white rounded-lg shadow-lg p-4 text-center w-28 sm:w-32"
  variants={{
    ...itemVariants,
    ...flipVariants,
  }} // Merged `variants`
  whileHover="hover"
>
  <p className="text-xl sm:text-2xl font-bold text-gray-500">2K+</p>
  <p className="text-xs sm:text-sm text-gray-500">Video Courses</p>
</motion.div>

<motion.div
  className="absolute bottom-10 right-0 bg-white rounded-lg shadow-lg p-4 text-center w-28 sm:w-32 z-[1]"
  variants={{
    ...itemVariants,
    ...flipVariants,
  }} // Merged `variants`
  whileHover="hover"
>
  <p className="text-xl sm:text-2xl font-bold text-gray-500">250+</p>
  <p className="text-xs sm:text-sm text-gray-500">Tutors</p>
</motion.div>

              {/* Circular Borders Background */}
              <div className="absolute bottom-12 right-24">
                {/* Outer Circle */}
                <div className="rounded-full border-2 border-gray-600 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] absolute"></div>
                {/* Second Circle */}
                <div className="rounded-full border-2 border-gray-400 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] absolute top-[25px] left-[25px]"></div>
                {/* Third Circle */}
                <div className="rounded-full border-2 border-gray-400 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] absolute top-[50px] left-[50px]"></div>
                {/* Fourth Circle */}
                <div className="rounded-full border-2 border-gray-400 w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] absolute top-[90px] left-[90px]"></div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Logos with animation */}
        {/* <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {[1, 2, 3, 4].map((index) => (
            <motion.img
              key={index}
              src={`/img/Vector${index}.png`}
              alt={`Logo ${index}`}
              className="h-10 text-white object-contain"
              whileHover={{ rotate: 10, scale: 1.1, filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </motion.div> */}
        <motion.div
  className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center"
  variants={containerVariants}
  initial="hidden"
  animate={controls}
>
  {[Vector1, Vector2, Vector3, Vector4].map((image, index) => (
    <motion.img
      key={index}
      src={image}
      alt={`Logo ${index + 1}`}
      className="h-10 text-white object-contain"
      whileHover={{ rotate: 10, scale: 1.1, filter: "drop-shadow(0 0 8px rgba(96, 165, 250, 0.8))" }}
      transition={{ type: "spring", stiffness: 300 }}
    />
  ))}
</motion.div>
      </div>
    </section>
  );
};

export default Hero;