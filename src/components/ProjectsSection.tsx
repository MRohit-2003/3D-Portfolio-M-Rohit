import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import knowtify from "@/assets/Knowtify.png";
import nexus from "@/assets/NEXUS.png";
import portfolio from "@/assets/portfolio.png";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Knowtify - Internal Docs QA Agent",
      description: "Internal documentation QA agent that helps developers find answers to their questions.",
      image: knowtify,
      tech: ["TypeScript", "Python", "CSS", "Javascript"],
      github: "https://github.com/MRohit-2003/Knowtify",
      live: "https://knowtify-tau.vercel.app/",
    },
    {
      id: 2,
      title: "THE NEXUS",
      description: "AI powered blog website with modern design and smooth interactions.",
      image: nexus,
      tech: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/MRohit-2003/THE-NEXUS",
      live: "https://the-nexus-three.vercel.app/",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "Portfolio website for M Rohit with modern design and smooth interactions.",
      image: portfolio,
      tech: ["React", "Javascript", "Typescript", "CSS"],
      github: "https://github.com/MRohit-2003/Portfolio-M-Rohit",
      live: "https://mrohit.netlify.app/",
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Only apply horizontal scroll on larger screens
      let scrollTween: gsap.core.Tween | null = null;
      
      if (window.innerWidth >= 1024) {
        scrollTween = gsap.to(".projects-track", {
          x: () => -(scrollContainerRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + scrollContainerRef.current!.scrollWidth,
            invalidateOnRefresh: true,
          },
        });
      }

      // Cards stagger animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".projects-track",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        if (scrollTween) scrollTween.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Featured <span className="text-gradient">Projects</span>
        </h2>
      </div>

      <div
        ref={scrollContainerRef}
        className="projects-track flex lg:space-x-8 space-x-4 px-6 lg:flex-row lg:overflow-x-auto lg:snap-x lg:snap-mandatory"
        style={{ width: window.innerWidth >= 1024 ? "max-content" : "auto" }}
      >
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="project-card group relative w-80 lg:w-96 h-[400px] glass rounded-2xl overflow-hidden card-hover flex-shrink-0 lg:snap-start"
          >
            {/* Project Image */}
            <div className="relative h-36 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

            {/* Project Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold text-gradient">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-0 text-xs bg-secondary rounded-full text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4">
                <a
                  href={project.live}
                  className="flex items-center space-x-2 btn-ghost flex-1 justify-center"
                >
                  <ArrowUpRight size={16} weight="bold" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.github}
                  className="flex items-center space-x-2 btn-ghost flex-1 justify-center"
                >
                  <GithubLogo size={16} weight="bold" />
                  <span>Code</span>
                </a>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;