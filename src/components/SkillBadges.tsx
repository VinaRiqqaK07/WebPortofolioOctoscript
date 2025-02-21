import React from "react";
import { badges } from "@/data/badges";

// const badges = [
//   { name: "Visual Studio Code", color: "bg-blue-600" },
//   { name: "Website Dev", color: "bg-gray-700" },
//   { name: "React", color: "bg-cyan-500" },
//   { name: "Tailwind CSS", color: "bg-sky-400" },
//   { name: "TypeScript", color: "bg-blue-700" },
//   { name: "Figma", color: "bg-gradient-to-r from-pink-500 to-green-500" },
//   { name: "Laragon", color: "bg-teal-500" },
//   { name: "MySQL", color: "bg-blue-400" },
//   { name: "Ionic-React", color: "bg-blue-500" },
//   { name: "SQL Server", color: "bg-red-600" },
//   { name: "Laravel", color: "bg-red-500" },
//   { name: "PHP", color: "bg-indigo-700" },
//   { name: "Python", color: "bg-yellow-400" },
//   { name: "Blazor", color: "bg-purple-700" },
//   { name: ".NET MAUI", color: "bg-purple-600" },
//   { name: "ASP.NET Web API", color: "bg-purple-700" },
//   { name: ".NET", color: "bg-purple-800" },
//   { name: "Mobile Dev", color: "bg-gray-500" },
//   { name: "Kotlin", color: "bg-gradient-to-r from-blue-500 to-orange-500" },
// ];

export const SkillBadges = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {badges.map((badge, index) => (
        <span
          key={index}
          className={`px-4 py-2 ${badge.color} text-white text-md font-semibold rounded-full`}
        >
          {badge.name}
        </span>
      ))}
    </div>
  );
};
