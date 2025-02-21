import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-40 text-white">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={240}
          priority
        />
        <div className="flex space-x-6 py-8 items-center">
          {/* GitHub Icon */}
          <a
            href="https://github.com/VinaRiqqaK07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaGithub size={50} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/vina-riqqa-khairiah-ba5a10223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={50} />
          </a>
        </div>
        <div className="flex flex-col space-y-2">
            <p className="text-gray-400 text-sm">©2025 Vina Riqqa Khairiah, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
