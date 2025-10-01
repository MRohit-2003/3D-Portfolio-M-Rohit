import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial states
    gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 30 });
    gsap.set(progressBarRef.current, { width: "0%" });

    // Animation sequence
    tl.to([logoRef.current, textRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out",
    })
      .to(progressBarRef.current, {
        width: "100%",
        duration: 2.5,
        ease: "power2.out",
      })
      .to([logoRef.current, textRef.current], {
        opacity: 0,
        y: -30,
        duration: 0.5,
        stagger: 0.1,
      })
      .to(preloaderRef.current, {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          onComplete();
        },
      });
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="flex flex-col items-center space-y-8">
        <div
          ref={logoRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient animate-pulse-glow"
        >
          M Rohit
        </div>
        <div ref={textRef} className="text-lg sm:text-xl font-semibold tracking-wider">
          Futuristic Full-Stack Developer
        </div>
        <div className="progress-container">
          <div ref={progressBarRef} className="progress-bar"></div>
        </div>
        <div className="text-sm font-light opacity-60">Loading Experience...</div>
      </div>
    </div>
  );
};

export default Preloader;