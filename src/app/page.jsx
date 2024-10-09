import Header from "@/components/header";
import TestimonialSection from "./testimonial-section";
import HeroSection from "./hero-section";
import Footer from "@/components/footer";

export const metadata = {
  title: "Neocase | Home",
};

const Homepage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <TestimonialSection />
      <Footer />
    </main>
  );
};

export default Homepage;
