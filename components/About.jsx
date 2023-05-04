import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a full-stack web developer with a passion for frontend
            development. With 2 years of professional experience in frontend
            development, I have developed a deep understanding of HTML,Css,
            ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, SQL, Git, and Amazon
            Web Services (AWS) . My approach to work is driven by a desire to
            solve complex problems, Innovations and bringing new ideas to life .
            I take a collaborative approach and thrive in environments where I
            can work with others to achieve common goals. Throughout my career,
            I have had the opportunity to work on a wide range of projects and
            initiatives.
            <Link href="/#projects"> You can find some of them below.</Link>
          </p>
          <p className="py-2 text-gray-600">
            In my free time, I enjoy finding new open source projects on Github
            that i can contribute to and learning and exploring tech tools that
            are trending such as ChatGPT. I find that these activities help me
            to recharge and approach my work with renewed energy and creativity.
            I am excited to continue to grow and develop my skills and
            experiences, and I am always open to new opportunities and
            challenges. Thank you for taking the time to learn more about me,
            and I look forward to connecting with you further.
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
