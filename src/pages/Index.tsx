import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import CoursesSection from "@/components/CoursesSection";
// import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLang } from "@/contexts/LangContext";

const Index = () => {
  useScrollAnimation();
  const { isRTL } = useLang();

  return (
    <div className={isRTL ? "font-cairo" : "font-sans"}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <CoursesSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
