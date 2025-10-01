import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Preloader from "./Preloader";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import AchievementsSection from "./AchievementsSection";
import ActivitiesSection from "./ActivitiesSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import "../styles/mobile-responsive.css";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const PortfolioApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll during loading
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    
    // Main content fade in
    gsap.fromTo(
      ".main-content",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handleLoadingComplete} />}

      {/* Main Content */}
      <div className={`main-content ${isLoading ? "opacity-0" : ""}`}>
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <AchievementsSection />
          <ActivitiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default PortfolioApp;