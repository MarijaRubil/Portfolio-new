import React from 'react';

const Education = () => {
  return (
    <section id="education" className="flex m-20 p-20 justify-center rounded-lg border-black border-2 bg-opacity-80
    shadow-[0px_0px_67px_12px_#2d3748,0px_3px_8px_0px_#00000024] text-black">
      <div className="text-center">
        <h2 className="text-3xl m-5 pb-10 font-bold ">Educations</h2>
        <div className="flex justify-around m-9">
          <div>
            <img src="HGY.jpg" alt="Huddinge gymnasiet" className="w-20 h-20 mx-auto rounded-full" />
            <h3 className="text-xl font-bold m-8">Huddinge Gymnasium</h3>
            <p className='m-5'>August-2014 - July 2017</p>
          </div>
          <div>
            <img src="BA.avif" alt="Beetroot Academy" className="w-20 h-20  mx-auto rounded-full" />
            <h3 className="text-xl font-bold m-8">Beetroot Academy</h3>
            <p className='m-5'>June 2021 - October 2021</p>
          </div>
          <div>
            <img src="CA.svg" alt="Logo 3" className="w-20 h-20 mx-auto  rounded-full" />
            <h3 className="text-xl font-bold m-8">Chas Academy</h3>
            <p className='m-5'>September 2022 - June 2024 </p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
