import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import Internship from "@/assets/Internship.png";
import AIAgentHackathon from "@/assets/AI-Agent-Hackathon.png";
import IITRoparWorkshop from "@/assets/IIT-Ropar.png";
import DSAMasterMind from "@/assets/DSA-MasterMind.jpg";
import AlgoQuiz from "@/assets/Algo-Quiz.jpg";
import Be10x from "@/assets/AI-TOOLS-Be10x.png";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const ActivitiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Summer Internship",
      //description: "Futuristic dashboard with real-time analytics and immersive data visualization.",
      image: Internship,
      tech: ["React", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "#",
      live: "https://drive.google.com/file/d/1RWRGNNu_n0vvaC5ZkCenw7sk8ciWdQ4y/view?usp=sharing",
    },
    {
      id: 2,
      title: "AI Agent Hackathon",
      //description: "Sustainable e-commerce platform with modern design and smooth interactions.",
      image: AIAgentHackathon,
      tech: ["Python", "React", "Node.js", "HTML", "CSS", "JavaScript"],
      github: "#",
      live: "https://drive.google.com/file/d/1PYW4op8V1qZwm16bs1_BNzIamPEKEnXa/view?usp=sharing",
    },
    {
      id: 3,
      title: "Joy of Computing",
      //description: "Portfolio showcase for creative agencies with stunning animations.",
      image: IITRoparWorkshop,
      tech: ["AI", "Drone Technology"],
      github: "#",
      live: "https://drive.google.com/file/d/1VtnI3__jMZohQhnOVdUIIUSDNwf42KOw/view?usp=sharing",
    },
    {
      id: 4,
      title: "DSA Mastermind",
      //description: "Cross-platform mobile app with intuitive user experience design.",
      image: DSAMasterMind,
      tech: ["DSA"],
      github: "#",
      live: "https://drive.google.com/file/d/1kWeZMCzpIFgAGcaSUymR-TYKy90DmWRv/view?usp=sharing",
    },
    {
      id: 5,
      title: "AlgoQuiz",
      //description: "Advanced data visualization platform for business intelligence.",
      image: AlgoQuiz,
      tech: ["DSA"],
      github: "#",
      live: "https://drive.google.com/file/d/1yqtHuJsr4qgg82kGNMWDzisZPGcOMRUb/view?usp=sharing",
    },
    {
      id: 6,
      title: "Be10x",
      description: "Gaming platform with social features and real-time multiplayer.",
      image: Be10x,
      tech: ["AI TOOLS"],
      github: "#",
      live: "https://drive.google.com/file/d/1_vS-4siOjMLRhe3_R08wYYvdD20aUMrS/view?usp=sharing",
    },
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
      id="activities"
      className="py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          <span className="text-gradient">Internships, Workshops, Quizzes & Hackathons</span>
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
                  <span>View</span>
                </a>
                {/* <a
                  href={project.github}
                  className="flex items-center space-x-2 btn-ghost flex-1 justify-center"
                >
                  <GithubLogo size={16} weight="bold" />
                  <span>Code</span>
                </a> */}
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

export default ActivitiesSection;