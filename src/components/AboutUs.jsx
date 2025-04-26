import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CTASection from "./CTASection";
import bgVideo from "../assets/aboutusmp4.mp4";

const AboutUs = () => {
  useEffect(() => {
    AOS.refresh();  // Refresh to re-trigger animations on rerender
  });

  return (
    <section className="relative w-full h-fit py-16 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10" />

      {/* Content Layer */}
      <div className="relative z-20 container px-4 sm:px-6 lg:px-8 text-yellow-300 max-w-3xl mx-auto text-center">
        <h2 data-aos="zoom-out-up" data-aos-delay="100" className="text-4xl font-bold sm:text-5xl mb-6">
          Why Choose Us
        </h2>
        <p data-aos="fade-up" data-aos-delay="300" className="text-lg mb-8 leading-relaxed">
          At Horizon Innovations, we weave bold ideas with cutting-edge technology to craft solutions that don’t just solve problems—they redefine possibilities. Our team of dreamers and doers is obsessed with turning your vision into reality, one pixel, one line of code, one spark at a time. With a track record of transforming industries and a passion for pushing boundaries, we’re not just building products; we’re shaping the future.
        </p>
        <div data-aos="fade-up" data-aos-delay="500">
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
