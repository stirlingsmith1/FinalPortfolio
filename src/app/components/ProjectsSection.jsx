"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Veteran Opportunities Business Website",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.erasolutions.us/",
  },
  {
    id: 2,
    title: "Tech Certifcation Website",
    image: "/images/projects/coitb.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://coitb.org/",
  },
  {
    id: 2,
    title: "Small Town Travel Design",
    image: "/images/projects/hotel.png",
    tag: ["All", "Figma Designs"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/0nO7NbsdHapq3NRdG6nwWs/small-town-travel?node-id=0-1&t=KUGXvPBpT8EN1C4e-1",
  },
  {
    id: 3,
    title: "Non-Profit Organization Application",
    image: "/images/projects/SacredPlace.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Travel Center Landing Page Design",
    image: "/images/projects/Travel.png",
    tag: ["All", "Figma Designs"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/injgWctekEOgy529KlRweC/town-center-ideas?node-id=0-1&t=Sck4RrWcPdOC8nos-1",
  },
  
  {
    id: 4,
    title: "Military Job Search Application",
    image: "/images/projects/mmp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://mymapplan.com/",
  },
  
  {
    id: 6,
    title: "Learning Management System",
    image: "/images/projects/tks.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.tks360.com/",
  },
  {
    id: 6,
    title: "Certifcation Site Figma Design",
    image: "/images/projects/tksfigma.png",
    tag: ["All", "Figma Designs"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/e3tons6v6oujnoUfkBw4pR/COITB-REBUILD?node-id=0-1&t=lmRYN7seWgegTFFL-1",
  },
  {
    id: 6,
    title: "Town Center Figma Design",
    image: "/images/projects/nature.png",
    tag: ["All", "Figma Designs"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/QXPzr3kICK9LMtfQBLQJvT/town-center-travel-idea-2?node-id=0-1&t=1ldm9i8X4MvXRC8K-1",
  },
  {
    id: 6,
    title: "Web App ReDesign",
    image: "/images/projects/mmpfigma.png",
    tag: ["All", "Figma Designs"],
    gitUrl: "/",
    previewUrl: "https://www.figma.com/design/CQfAuHdzW98447Pz1zHWIJ/MMP-Rebuild?node-id=0-1&t=lAcb1oC0fqKBIYr2-1",
  },
  {
    id: 6,
    title: "Fundraiser Thermometer",
    image: "/images/projects/fundraiser.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/stirlingsmith1/donation-thermometer",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Project Portfolio",
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/stirlingsmith1/donation-thermometer",
    previewUrl: "",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Figma Designs"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
