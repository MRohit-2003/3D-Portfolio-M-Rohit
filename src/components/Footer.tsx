import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer fade and slide-up animation
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating particles animation
      gsap.to(".footer-particle", {
        y: -30,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative py-16 border-t border-border/30 overflow-hidden"
    >
      {/* Background Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="footer-particle absolute w-2 h-2 bg-neon-blue/20 rounded-full blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Copyright */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-gradient">M Rohit</div>
            <p className="text-sm text-muted-foreground">
              © 2025 M Rohit. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground flex items-center space-x-1">
              <span>Made with</span>
              <Heart size={12} weight="fill" className="text-red-400" />
              <span>and lots of caffeine</span>
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center md:text-right">
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-ghost px-6 py-3"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/20 text-center">
          <p className="text-xs text-muted-foreground">
            Built with React, TypeScript, GSAP, and an unhealthy amount of attention to detail.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;