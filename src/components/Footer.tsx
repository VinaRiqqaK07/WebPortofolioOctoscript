import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import { useState, useEffect } from "react";

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowsType, setWindowsType] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);

      // Menentukan breakpoint berdasarkan lebar layar
      if (width < 640) {
        setWindowsType("xs"); // Mobile (sm)
      } else if (width >= 640 && width < 768) {
        setWindowsType("sm");
      } else if (width >= 768 && width < 1024) {
        setWindowsType("md");
      } else if (width >= 1024 && width < 1280) {
        setWindowsType("lg");
      } else {
        setWindowsType("xl"); // Extra large screen
      }
    };

    // Jalankan saat pertama kali komponen dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <footer className="bg-gray-900 p-8 md:p-40 text-white">
      <div className="container mx-auto flex flex-col justify-center items-center ">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={windowsType == "sm" || windowsType == "xs" ? 90 : 180}
          height={windowsType == "sm" || windowsType == "xs" ? 120 : 240}
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
            <FaGithub size={windowsType == "sm" || windowsType == "xs" ? 25 : 50} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://www.linkedin.com/in/vina-riqqa-khairiah-ba5a10223/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300"
          >
            <FaLinkedin size={windowsType == "sm" || windowsType == "xs" ? 25 : 50} />
          </a>
        </div>
        <div className="flex flex-col space-y-2">
          <p className="text-gray-400 text-xs md:text-sm">
            ©2025 Vina Riqqa Khairiah, All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
