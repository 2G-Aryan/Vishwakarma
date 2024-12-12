import CompanySection from "@/components/ui/CompanySection";
import HeroSection from "@/components/ui/HeroSection";
import About from "@/components/ui/About";
import CatalogueSection from "@/components/ui/CatalogueSection"
import CatalogSwiper from "@/components/ui/CatalogSwiper"
import Review from '@/components/ui/Review'

export default function Home() {
  return (
   <>
    <HeroSection/>
    <CompanySection/>
    <About />
    <CatalogueSection />
    <CatalogSwiper />
    {/* <Review /> */}   
   </>
  );
}
