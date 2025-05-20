import Image from "next/image";
import Header from "./components/Header";
import MobileNavigation from "./components/MobileNavigation";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import FeedingNation from "./components/FeedingNation";
import PurposeSection from "./components/PurposeSection";
import AgroEcosystemSection from "./components/AgroEcosystemSection";
import WorgMethodSection from "./components/WorgMethodSection";
import FaqSection from "./components/FaqSection";
import CallToActionSection from "./components/CallToActionSection";
import ContactSection from "./components/ContactSection";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col relative pb-16 md:pb-0 overflow-hidden rounded-lg shadow-lg">
      <div className="flex flex-col w-[90%] md:w-[90%] mx-auto lg:pt-24 md:pt-4 md:px-10">
        <div className="lg:hidden flex justify-between items-center pt-[50px] pb-[50px]">
          <div className="logo">
            <Link href="/">
              <Image
                src="/assets/logo-black.png"
                alt="WORG Logo"
                width={100}
                height={30}
                className="object-contain"
              />
            </Link>
          </div>

          <div className="lg:hidden">
            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md text-sm">
              Talk to Us
            </button>
          </div>
        </div>
        <div className="bg-black rounded-[32px] overflow-hidden">
          <Header />
          <main>
            <HeroSection />
          </main>
        </div>
        <div className="bg-white">
          <FeedingNation />
        </div>
      </div>
      <div className="bg-gray-100">
        <StatsSection />
      </div>
      <div className="bg-white">
        <PurposeSection />
      </div>
      <div className="bg-white">
        <AgroEcosystemSection />
      </div>
      <div className="bg-white">
        <WorgMethodSection />
      </div>
      <div>
        <FaqSection />
      </div>
      <div>
        <CallToActionSection />
        <ContactSection />
      </div>
      <MobileNavigation />
      <Footer />
    </div>
  );
}
