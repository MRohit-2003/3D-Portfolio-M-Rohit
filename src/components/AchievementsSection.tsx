import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, GithubLogo } from "phosphor-react";
import GoogleAIEssentials from "@/assets/Google-AI-Essentials.png";
import OCIAI from "@/assets/OCI-AI-Foundations.png";
import Postman from "@/assets/Postman-API.png";
import SSoC from "@/assets/SSoC-2025.jpg";
import Azure1 from "@/assets/Microsoft-Azure-Fundamentals-Part1.jpg";
import Azure2 from "@/assets/Microsoft-Azure-Fundamentals-Part2.jpg";
import Azure3 from "@/assets/Microsoft-Azure-Fundamentals-Part3.jpg";
import ResponsibleAI from "@/assets/Responsible-AI.jpg";
import DataViz from "@/assets/Data-P-Viz.png";
import ExploratoryDataAnalysis from "@/assets/Exploratory-Data-Analysis.png";
import AcquiringData from "@/assets/Acquiring-Data.png";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const AchievementsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Google AI Essentials",
      //description: "Futuristic dashboard with real-time analytics and immersive data visualization.",
      image: GoogleAIEssentials,
      skills: ["React", "GSAP", "Three.js", "TypeScript"],
      github: "#",
      live: "https://drive.google.com/file/d/1ksGHqCgwd_mtNrn6jYVUMJQrwwBz3VbE/view?usp=sharing",
    },
    {
      id: 2,
      title: "OCI Certified AI Foundations Associate",
      //description: "Sustainable e-commerce platform with modern design and smooth interactions.",
      image: OCIAI,
      skills: ["Next.js", "Stripe", "Prisma", "Tailwind"],
      github: "#",
      live: "https://drive.google.com/file/d/1ReBCnpvzFROfI_tXY6aOSr6GtIqHmezI/view?usp=sharing",
    },
    {
      id: 3,
      title: "Postman API Fundamentals Student Expert",
      //description: "Portfolio showcase for creative agencies with stunning animations.",
      image: Postman,
      skills: ["React", "Framer Motion", "GSAP", "CSS"],
      github: "#",
      live: "https://drive.google.com/file/d/1y0G6LI0G-3rvWybBgovdGW2QbAyGuL4c/view?usp=sharing",
    },
    {
      id: 4,
      title: "Social Summer of Code 2025",
      //description: "Cross-platform mobile app with intuitive user experience design.",
      image: SSoC,
      skills: ["React Native", "Firebase", "Redux", "Expo"],
      github: "#",
      live: "https://drive.google.com/file/d/1ivVIqdWJUDJVV7EOqvCxe14ErWrSH56D/view?usp=sharing",
    },
    {
      id: 5,
      title: "Microsoft Azure Fundamentals: Describe Cloud Concepts",
      //description: "Advanced data visualization platform for business intelligence.",
      image: Azure1,
      skills: ["Cloud Concepts", "Microsoft Azure"],
      github: "#",
      live: "https://drive.google.com/file/d/1NbmY2ol1-hUY7N0bKGIZQqpOTFjd9AIl/view?usp=sharing",
    },
    {
      id: 6,
      title: "Microsoft Azure Fundamentals: Describe Azure Management and Governance",
      //description: "Gaming platform with social features and real-time multiplayer.",
      image: Azure2,
      skills: ["Management and Governance", "Microsoft Azure"],
      github: "#",
      live: "https://drive.google.com/file/d/1jDQwkOxtIOFtcFJPPIrF-YMd3GjZuWuz/view?usp=sharing",
    },
    {
      id: 7,
      title: "Microsoft Azure Fundamentals: Describe Azure Architecture and Services",
      //description: "Gaming platform with social features and real-time multiplayer.",
      image: Azure3,
      skills: ["Architecture and Services", "Microsoft Azure"],
      github: "#",
      live: "https://drive.google.com/file/d/1GiijXPK4q2o63FlX9qF5vCFYgtlYoxvv/view?usp=sharing",
    },
    {
      id: 8,
      title: "Responsible and Safe AI Systems",
      //description: "Gaming platform with social features and real-time multiplayer.",
      image: ResponsibleAI,
      skills: ["Security and Responsibility", "Ethical AI Practices", "Limitations of AI"],
      github: "#",
      live: "https://drive.google.com/file/d/1TKlgFJRjJy1daWZXHuxuYLleMOiTmk63/view?usp=sharing",
    },
    {
      id: 9,
      title: "Data Processing and Visualization",
      //description: "Gaming platform with social features and real-time multiplayer.",
      image: DataViz,
      skills: ["Data Processing", "Data Visualization"],
      github: "#",
      live: "https://drive.google.com/file/d/1zcxTJcygCNh_07NuDZOkgMcvcA2emECw/view?usp=sharing",
    },
    {
      id: 10,
      title: "Exploratory Data Analysis",
      //description: "Gaming platform with social features and real-time multiplayer.",
      image: ExploratoryDataAnalysis,
      skills: ["Exploratory Data Analysis", "Data Visualization"],
      github: "#",
      live: "https://drive.google.com/file/d/1jzfuxOE0K4flsWdqit1CbJwek_34J06j/view?usp=sharing",
    },
    {
      id: 11,
      title: "Acquiring Data",
      //description: "Gaming platform with social features and real-time multiplayer.",
      image: AcquiringData,
      skills: ["Data Acquisition", "Data Integration"],
      github: "#",
      live: "https://drive.google.com/file/d/16YkZiec4UKRDaSE7vNXhLdNRUG5Pq9m2/view?usp=sharing",
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
      id="achievements"
      className="py-20 lg:py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          My <span className="text-gradient">Achievements</span>
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
              <h3 className="text-1xl font-semibold text-gradient">{project.title}</h3>
              {/* <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p> */}

              {/* Skill Stack */}
              <div className="flex flex-wrap gap-2">
                {project.skills.map((tech) => (
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
                  target="_blank"
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

export default AchievementsSection;
