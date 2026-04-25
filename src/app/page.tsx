import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MethodologySection from "@/components/sections/MethodologySection";
import FAQSection from "@/components/sections/FAQSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import ProgramsAndScheduleWrapper from "@/components/sections/ProgramsAndScheduleWrapper";
import { getLiveCourses } from "@/lib/services/coursesSchedule";

export default async function Home() {
  const coursesFromCSV = await getLiveCourses();

  return (
    <>
      <Navbar />
      <main id="contenido-principal">
        <HeroSection />
        <AboutSection />
        <MethodologySection />
        <ProgramsAndScheduleWrapper initialCourses={coursesFromCSV}/>
        <FAQSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
