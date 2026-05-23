import CoursesSection from "./component/CoursesSection";
import EnrollFormSection from "./component/EnrollFormSection";
import FeaturesSection from "./component/FeaturesSection";
import Footer from "./component/Footer";
import HeroSection from "./component/Herosection";
import Navbar from "./component/navbar"; 

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#020617]">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-3xl rounded-full"></div>

      {/* Main Content */}
      <Navbar />
     
      
      
    </main>
  );
}