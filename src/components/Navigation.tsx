import { useState, useEffect } from "react";
import { gsap } from "gsap";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    if (!isMenuOpen) {
      gsap.to(".mobile-menu", {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(".mobile-menu", {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const navItems = [
    { label: "Home", href: "hero" },
    { label: "About", href: "about" },
    { label: "Projects", href: "projects" },
    { label: "Achievements", href: "achievements" },
    { label: "Activities", href: "activities" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "glass backdrop-blur-xl py-4" : "py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div
          className="text-2xl font-bold text-gradient cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          M Rohit
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.href)}
              className="text-foreground hover:text-primary transition-colors duration-300 font-light tracking-wider"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="btn-hero"
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={toggleMenu}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1" : "-translate-y-1"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu md:hidden absolute top-full left-0 w-full glass backdrop-blur-xl opacity-0 -translate-y-5">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-light tracking-wider text-left"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="btn-hero w-fit"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;