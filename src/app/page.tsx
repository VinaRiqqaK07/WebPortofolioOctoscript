"use client";
import { ContactForm } from "@/components/ContactForm";
import Footer from "@/components/Footer";
import MessageSlider from "@/components/MessageSlider";
import { ProjectsSection } from "@/components/ProjectsSection";
import { SkillBadges } from "@/components/SkillBadges";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2">
        {/* HEADER IMAGE SECTION */}
        <section
          id="home"
          className="bg-blue-400 flex-wrap md:flex-nowrap h-fit md:h-[100vh] flex items-center justify-center md:pt-20 md:px-14"
        >
          <div className="flex flex-col justify-end gap-4 px-6 py-6 mt-20 md:mt-10 h-[400px] md:h-fit">
            <p>Hi, my name is</p>
            <h1 className="font-bold text-[70px] lg:text-[90px]">
              Vina Riqqa K
            </h1>
            <p>Junior Front End Developer</p>
          </div>
          <div className="flex justify-center justify-items-start w-[60vh] md:w-[40vh] lg:w-[100vh]">
            <img
              src="/images/3d-laptop.png"
              alt="3D Laptop Image"
              className="object-cover rounded-md mb-4"
            />
          </div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="flex flex-col bg-white px-4 py-20 md:px-48 gap-5">
          <h2 className="text-4xl font-semibold text-blue-400">ABOUT</h2>
          <p className="text-wrap text-gray-900 text-xl">
            My name is Vina Riqqa Khairiah. I am an Informatics student with
            experience in web and mobile development, working with various
            frameworks and technologies such as React, Next.js, Ionic-React,
            Laravel, and .NET MAUI. I have applied these skills in both academic
            projects and internship experiences. I am passionate about creating
            functional and user-friendly digital solutions. Currently, I am
            expanding my expertise in databases and backend systems through my
            internship at PT Vale Indonesia.
          </p>
          <p className="text-wrap text-gray-900 font-semibold text-xl">
            Through these experience, I have had the opportunity to work with a
            diverse range of platforms and tools. I consider myself proficient
            in the following:
          </p>
          <SkillBadges />
        </section>

        {/* PROJECTS SHOWCASE */}
        <section id="project" className="py-10 bg-white md:py-20">
          <h2 className="px-12 mb-8 text-4xl text-blue-400 font-semibold md:text-wrap">
            PROJECTS SHOWCASE
          </h2>
          <ProjectsSection />
        </section>

        {/* CONTACT SECTION */}
        <section
          id="message"
          className="px-4 py-20 md:px-48 flex bg-white flex-col gap-2"
        >
          <h2 className="text-4xl font-semibold text-blue-400 md:text-wrap">
            SEND YOUR MESSAGE
          </h2>
          <ContactForm />
        </section>
        <MessageSlider />
      </main>
      <Footer />
    </div>
  );
}
