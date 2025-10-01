import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  const orbsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Initial states
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    });

    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
    });

    // Animation sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        splineRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
        },
        "-=1"
      );

    // Floating orbs animation
    gsap.to(".glow-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5,
    });

    // CTA hover animation
    const ctaButton = ctaRef.current;
    if (ctaButton) {
      ctaButton.addEventListener("mouseenter", () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      ctaButton.addEventListener("mouseleave", () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div ref={orbsRef} className="absolute inset-0 pointer-events-none">
        <div className="glow-orb absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-neon-blue/20 blur-3xl floating"></div>
        <div className="glow-orb absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-neon-purple/20 blur-3xl floating-delay"></div>
        <div className="glow-orb absolute bottom-1/4 left-1/3 w-28 h-28 rounded-full bg-neon-cyan/20 blur-3xl floating"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          <h1
            ref={headlineRef}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient">M Rohit</span>{" "}
            – Full Stack Developer
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed"
          >
            Building immersive digital experiences with cutting-edge technology.
            Transforming ideas into interactive realities.
            Solving real-world problems with innovative solutions.
          </p>
          
          <button
            ref={ctaRef}
            onClick={scrollToContact}
            className="btn-hero text-lg px-8 py-4 animate-pulse-glow"
          >
            Hire Me
          </button>
        </div>

        {/* Right Content - Spline */}
        <div ref={splineRef} className="relative h-[400px] md:h-[600px] w-full">
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-buV0ROAvvbrnsrJgjoNuMZ9z/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="rounded-lg"
            title="3D Robot Animation"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;