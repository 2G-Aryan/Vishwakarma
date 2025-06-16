import CompanySection from "@/components/ui/CompanySection";
import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/About";
import CatalogueSection from "@/components/ui/CatalogueSection"
import CatalogSwiper from "@/components/ui/CatalogSwiper"


export default function Home() {
  return (
   <>
    <HeroSection/>
    <CompanySection/>
    <About />
    <CatalogueSection />
    <CatalogSwiper />
    
   </>
  );
}
