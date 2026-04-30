import Contribute from "@/components/sections/Contribute";
import Developers from "@/components/sections/Developers";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Developers />
      <Contribute />
      <Footer />
    </>
  );
}
