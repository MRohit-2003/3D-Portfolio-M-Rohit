import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { PaperPlaneTilt, GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Form animation
      gsap.fromTo(
        formRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Social icons animation
      gsap.fromTo(
        ".social-icon",
        { opacity: 0, y: 30, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Input animations
      gsap.fromTo(
        ".form-input",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Form submitted:", data);
    reset();
    setIsSubmitting(false);
    
    // Success animation
    gsap.to(".submit-btn", {
      scale: 1.1,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.out",
    });
  };

  const socialLinks = [
    { icon: GithubLogo, href: "https://github.com/MRohit-2003", label: "GitHub" },
    { icon: LinkedinLogo, href: "https://linkedin.com/in/m-rohit-138a76246", label: "LinkedIn" },
    { icon: TwitterLogo, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to bring your ideas to life? Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <div ref={formRef} className="space-y-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="form-input">
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    className="w-full input-glow"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="form-input">
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className="w-full input-glow"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-input">
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    rows={6}
                    className="w-full input-glow resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-btn w-full btn-hero py-4 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <PaperPlaneTilt size={20} weight="bold" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Get in Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm always excited to work on new projects and collaborate with 
                  creative minds. Whether you have a specific project in mind or 
                  just want to chat about possibilities, I'd love to hear from you.
                </p>
                <div className="space-y-3">
                  <p className="flex items-center space-x-3">
                    <span className="text-primary">📧</span>
                    <span>mrohit582003@gmail.com</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-primary">📱</span>
                    <span>+91 9778566699</span>
                  </p>
                  <p className="flex items-center space-x-3">
                    <span className="text-primary">📍</span>
                    <span>Hyderabad, Telangana, India</span>
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div ref={socialRef} className="space-y-4">
                <h4 className="text-lg font-semibold">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="social-icon p-3 glass rounded-xl hover:glow-primary transition-all duration-300 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon
                        size={24}
                        weight="bold"
                        className="group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;