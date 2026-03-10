import Navbar from "@/components/Navbar";
import AmbientEffects from "@/components/AmbientEffects";
import Hero from "@/components/Hero";
import MissionBriefing from "@/components/MissionBriefing";
import Prizes from "@/components/Prizes";
import LocationSection from "@/components/LocationSection";
import HeistPlans from "@/components/HeistPlans";
import Rules from "@/components/Rules";
import JoinCrew from "@/components/JoinCrew";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <AmbientEffects />
      <Hero />
      <MissionBriefing />
      <HeistPlans />
      <Prizes />
      <Rules />
      <JoinCrew />
      <LocationSection />
      <Footer />
    </div>
  );
};

export default Index;
