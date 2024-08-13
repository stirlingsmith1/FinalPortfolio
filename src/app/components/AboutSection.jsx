"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-1 md:grid-cols-2 gap-x-8">
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Next.js</li>
      <li>Tailwind CSS</li>
      <li>Node.js</li>
      <li>RESTful API Design</li>
      <li>MySQL</li>
      <li>MongoDB</li>
      <li>Distributed Systems</li>
      <li>Microservices</li>
      <li>Docker</li>
      <li>AWS / Azure</li>
      <li>Test-Driven Development (TDD)</li>
      <li>Domain-Driven Design</li>
      <li>Git</li>
      <li>Agile Development</li>
      <li>Monday.com Management</li>
      <li>Jira Project Management</li>
      <li>Figma</li>
      <li>Adobe Illustrator</li>
      <li>Adobe Express</li>
      <li>Photoshop</li>
      <li>Logo Creation / Brand Identity</li>
      <li>Wix</li>
    </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Official DOL Office of Apprenticeship 14 Month Software Developer Apprenticeship</li>
        <li>Figma Academy 2023</li>
        <li>Javascript Professional Developer Course</li>
        <li>CIW Javascript Specialist Course</li>
        <li>Mysql Backend Developer Course</li>
        <li>HTML + CSS Developer Course</li>
        <li>React Developer Course</li>
        <li>Oracle Java Course</li>
        <li> IEEE Course </li>
        <li> CCSLP Course</li>
        <li> WFA Course</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>DOL Office of Apprenticeship COC 14 Month Software Development Apprenticeship</li>
        <li> CoITB Certified Javascript Professional Exam</li>
        <li> CoITB Certified React Developer Exam</li>
        <li> CoITB Certified MySQL Exam</li>
        <li> CoITB Certified HTML & CSS Exam</li>
        <li> IEEE Exam</li>
        <li> CCSLP Exam</li>
        <li> WFA Exam</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I am a front-end web developer and lead UI/UX designer with a passion for creating interactive and responsive web applications. My expertise lies in designing and developing user-friendly interfaces that enhance the overall user experience. I have extensive experience working with React, JavaScript, Next.js, Tailwind CSS, HTML, CSS, Node.js, MySQL, MongoDB, Git, Figma, and Adobe Illustrator. I am a quick learner, always eager to expand my knowledge and skill set. As a team player, I thrive in collaborative environments and am excited to work with others to create exceptional applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
