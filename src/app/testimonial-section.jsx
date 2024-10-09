import { Button } from "@/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Textarea } from "@/ui/textarea";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-secondary-foreground text-secondary">
      <section className="testimonial container flex items-start wrap gap-8 p-8 py-16 mx-auto">
        <div className="testimonial-content basis-0 grow">
          <h2 className="text-5xl font-bold mb-4">
            People are Saying About{" "}
            <span className="text-primary">Neocase</span>
          </h2>
          <p className="desc mb-4">
            Our clients love the online portal, which makes communication and
            document sharing a breeze.
          </p>

          <svg
            width="45"
            height="38"
            className="mb-2"
            viewBox="0 0 45 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.5 0H21.5L14.5 38H0L11.5 0Z" fill="#D9D9D9" />
            <path d="M35 0H45L38 38H23.5L35 0Z" fill="#D9D9D9" />
          </svg>

          <blockquote className="w-96 ml-2 text-justify">
            As a solo practitioner, I needed a tool that could handle everything
            from case management to billing. This software has exceeded my
            expectations. The intuitive interface and powerful features have
            made my job much easier, allowing me to focus more on providing
            quality legal services to my clients
            <p className="author italic ml-2 mt-2">~ Aria Zinanrio</p>
          </blockquote>
        </div>
        <ContactCard />
      </section>
    </div>
  );
};

function ContactCard() {
  return (
    <Card className="contact-card w-[500px] bg-white/5 border-0 py-8 px-2 text-background">
      <CardHeader>
        <CardTitle className="text-3xl text-center">Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 space-y-reverse">
        <Label htmlFor="email">Email: </Label>
        <Input id="email" type="email" placeholder="Enter your email" />
        <Label htmlFor="message">Message: </Label>
        <Textarea id="message" placeholder="Enter your message" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="default">
          Submit
        </Button>
      </CardFooter>
    </Card>
  );
}

export default TestimonialSection;
