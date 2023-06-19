import React from 'react';

const About = () => {
    return (
        <section id="about" className="flex items-center opacity-85 bg-opacity-80 justify-center m-20 border-black border-2  rounded-lg 
        shadow-[2px_20px_50px_12px_#1a202c,0px_3px_8px_0px_#00000024]">
          <div className="flex justify-between max-w-2xl m-10 px-4 ">
            <div className="w-1/2 text-left text-black ">
              <h2 className="text-2xl pt-5 font-bold"> Marija Rubil</h2>
              <h2 className="text-2xl"> Frontend Developer</h2>
              <div className='py-20 '>I'm a 24-year-old frontend developer student with a deep passion for programming and web design. I excel at bringing designs to life and creating engaging user interfaces. Constantly learning and staying up to date with the latest technologies, I strive to deliver exceptional digital experiences.
            </div>
            </div>
            <div className="w-1/2">
             
              <img src="profile.jpg" alt="Profile" className="max-w-full  m-20 rounded-lg" />
            </div>
          </div>
        </section>
      );
    };
     
export default About;
