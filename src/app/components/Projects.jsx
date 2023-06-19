import React from 'react';

const Projects = () => {
  const projectData = [
    {
      name: 'Swedish Radio',
      link: 'https://radio-react-lime.vercel.app/',
      description: 'Swedish radio list, smaller project for school.',
    },
    {
      name: 'Next',
      link: 'https://netflix2-0-azure.vercel.app/',
      description: 'One of the very first projects I ever did.',
    },
    {
      name: 'Trash to treasure',
      link: 'https://example.com/project3',
      description: 'The app I created together with other people from my school.',
    },
  ];

  return (
    <section
      id="projects"
      className="flex items-center bg-opacity-80 text-black border-black border-2 rounded-lg justify-center m-20  shadow-[2px_20px_50px_12px_#1a202c,0px_3px_8px_0px_#00000024]"
    >
      <div className="text-center">
        <h2 className="text-3xl mt-10 font-bold ">Projects</h2>
        <div className="mt-8">
          {projectData.map((project, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-2xl m-5 pb-5 font-semibold">
                <a
                  href={project.link}
                  className="text-black hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </a>
              </h3>
              <p className='font-semibold'>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

