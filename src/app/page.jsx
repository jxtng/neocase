import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

import Header from "@/components/header";
import TestimonialSection from "./testimonial-section";
import HeroSection from "./hero-section";

const Homepage = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <TestimonialSection />
    </main>
  );
};

export default Homepage;
