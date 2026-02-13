import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CrashCourseSection from "@/components/CrashCourseSection";
import WelcomeSection from "@/components/WelcomeSection";
import DonationSection from "@/components/DonationSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";  // ✅ ADD THIS
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />

      <HeroSection />
      <CrashCourseSection />
      <WelcomeSection />
      <DonationSection />
      <GetInvolvedSection />

      
    

      <Footer />
    </main>
  );
};

export default Index;
