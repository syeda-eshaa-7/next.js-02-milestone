import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typewriter from "typewriter-effect";
const skilles: string[] = ["Frontend Developer", "UI/UX Designer"];

function HeroSection() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-xl tracking-widest text-gray-600">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700 font-bold text-3xl">
            {" "}
            Hi, I&#39;m <span className="text-[#5651e5] text-3xl"> Syeda Esha</span>
          </h1>
          <h1 className="py-3 text-gray-700 text-2xl">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            I'm a front-end web developer specializing (and occasinolly
            designig) exceptional digital experiences, Currently I’m focused on
            building responsive front-end web applications integrating back-end
            technologies.
          </p>
          <div className="flex it justify-between max-w-[330px] m-auto py-4">
          <a
                  href='https://www.linkedin.com/in/syeda-esha-0532692b4/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/syeda-eshaa-7'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>

          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration">
                  <AiOutlineMail />
                </div>
          <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration">
                  <BsFillPersonLinesFill />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
