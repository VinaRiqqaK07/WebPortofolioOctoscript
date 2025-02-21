import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  devtoolsList: string[];
  image: string;
  backgroundColor: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  devtoolsList,
  image,
  backgroundColor,
}) => {
  return (
    <div
      className={`flex flex-wrap lg:flex-nowrap gap-6 px-12 py-14 ${backgroundColor} text-gray-800 lg:h-[130vh]`}
    >
      <div className="flex flex-col md:max-w-[450px] lg:max-w-[600px]">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="mb-3 md:max-w-[450px] lg:max-w-[600px] text-wrap">{description}</p>
        <div className="flex flex-wrap gap-2">
          {devtoolsList.map((tool, index) => (
            <span
              key={index}
              className="bg-gray-700 text-white px-3 py-1 text-sm rounded-full"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-center justify-items-start w-fit h-fit">
        <img src={image} alt={title} className="rounded-md mb-4" />
      </div>
    </div>
  );
};
