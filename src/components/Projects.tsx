import React from "react";
import Image from "next/image";
import Link from "next/link";
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'

function Projects() {
  return (
   
<div id="projects" className="w-full">
    <div className="max-w-[1240px] mx-auto px-2 py-16">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Projects
      </p>
      <h2 className="py-4">What I&apos;ve Built</h2>
  
      {/* Grid container for projects */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Project 1 */}
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
        <Image
            className="rounded-xl group-hover:opacity-10"
            src={'/assets/projects/property.jpg'}
            alt="Property Project"
            layout="responsive"
            width={500}  // Original width of the image
            height={300} // Original height of the image, keeping a 5:3 aspect ratio
          />
          <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-center text-2xl text-white tracking-wider">Property Finder</h3>
            <p className="pd-4 pt-2 text-white text-center">React JS</p>
            <Link href='/'>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
          </div>
        </div>
  
        {/* Project 2 */}
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={'/assets/projects/crypto.jpg'}
            alt="Crypto Project"
            layout="responsive"
            width={500}
            height={300}
          />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-center text-2xl text-white tracking-wider">Crypto App</h3>
            <p className="pd-4 pt-2 text-white text-center">Next JS</p>
            <Link href='/'>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
          </div>
        </div>
  
        {/* Project 3 */}
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={'/assets/projects/netflix.jpg'}
            alt="Netflix Project"
            layout="responsive"
            width={500}
            height={300}
          />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-center text-2xl text-white tracking-wider">Netflix</h3>
            <p className="pd-4 pt-2 text-white text-center">React JS</p>
            <Link href='/'>
            <p  className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
          </div>
        </div>
  
        {/* Project 4 */}
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
          <Image
            className="rounded-xl group-hover:opacity-10"
            src={'/assets/projects/twitch.jpg'}
            alt="Twitch Project"
            layout="responsive"
            width={500}
            height={300}
          />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <h3 className="text-center text-2xl text-white tracking-wider">Twitch</h3>
            <p className="pd-4 pt-2 text-white text-center">Next JS</p>
            <Link href='/'>
            <p  className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">More Info</p>
                </Link>
          </div>
        </div>
      </div>
    </div>
  </div>

  
  )}

  export default Projects
       