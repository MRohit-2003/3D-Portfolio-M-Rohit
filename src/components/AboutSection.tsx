import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "@/assets/profile.jpg";
import { 
  FileHtml, 
  FileCss, 
  FileJs, 
  FileCode, 
  Lightning, 
  Palette,
  Database,
  Globe
} from "phosphor-react";
import { Leaf } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade and blur clear
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, filter: "blur(10px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -100, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills stagger animation
      gsap.fromTo(
        ".skill-icon",
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    // Image hover effect
    const imageContainer = imageRef.current;
    if (imageContainer) {
      imageContainer.addEventListener("mouseenter", () => {
        gsap.to(imageContainer, {
          rotateY: 5,
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out",
        });
      });

      imageContainer.addEventListener("mouseleave", () => {
        gsap.to(imageContainer, {
          rotateY: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    }

    return () => ctx.revert();
  }, []);

  const skills = [
    { icon: FileHtml, name: "HTML5", color: "text-orange-400" },
    { icon: FileCss, name: "CSS3", color: "text-blue-400" },
    { icon: FileJs, name: "JavaScript", color: "text-yellow-400" },
    { icon: FileCode, name: "React", color: "text-cyan-400" },
    { icon: Leaf, name: "MongoDB", color: "text-green-400" },
    { icon: Palette, name: "Design", color: "text-purple-400" },
    { icon: Database, name: "Backend", color: "text-red-400" },
    { icon: Globe, name: "API", color: "text-indigo-400" },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple p-1 glow-primary">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={profileImage}
                    alt="M Rohit Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 blur-xl animate-pulse-glow"></div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-gradient">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer, 
                completing my B.Tech in AI and Data Science. I specialize in the 
                MERN stack and deep AI frameworks. 
                I'm driven by tangible results. I engineer scalable backends 
                and create impactful applications. I am dedicated to continuous 
                growth, pushing boundaries with every project.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans from front-end design and animations to robust
                backend solutions. I'm constantly exploring new technologies and
                pushing the boundaries of what's possible on the web.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="space-y-4">
              <h3 className="text-2xl font-semibold text-gradient">Skills & Technologies</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="skill-icon group cursor-pointer"
                  >
                    <div className="glass p-3 lg:p-4 rounded-xl text-center hover:glow-secondary transition-all duration-300 card-hover">
                      <skill.icon
                        size={28}
                        className={`mx-auto mb-2 ${skill.color} group-hover:scale-110 transition-transform duration-300 lg:size-8`}
                        weight="light"
                      />
                      <p className="text-xs font-medium">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;