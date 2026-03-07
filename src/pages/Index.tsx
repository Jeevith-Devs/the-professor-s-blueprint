import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MissionBriefing from "@/components/MissionBriefing";
import HeistPlans from "@/components/HeistPlans";
import Rules from "@/components/Rules";
import JoinCrew from "@/components/JoinCrew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <MissionBriefing />
      <HeistPlans />
      <Rules />
      <JoinCrew />
      <Footer />
    </div>
  );
};

export default Index;
