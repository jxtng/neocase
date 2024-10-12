"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TypeAnimation } from "react-type-animation";

const WEB3FORM_ACCESS_KEY = "35d87bf8-4618-4c2d-a584-d38b55c39a62";
// const sequence = [
//   "Transforming case management",
//   1000,
//   "Transforming law with AI",
//   1000,
//   "Transforming casework for firms",
//   1000,
//   "Transforming legal research",
//   1000,
//   "Transforming client communication",
//   1000,
//   "Transforming case strategy",
//   1000,
//   "Transforming legal processes",
//   1000,
//   "Transforming justice with innovation",
//   1000,
//   "Transforming law and tech",
//   1000,
//   "Transforming legal transformation",
//   1000,
// ];

const sequence = [
  "case management to efficiency",
  1000,
  "legal processes to simplicity",
  1000,
  "client communication to clarity",
  1000,
  "legal practice to the future",
  1000,
  "casework to streamlined processes",
  1000,
  "legal teams to high performance",
  1000,
  "document review to automation",
  1000,
  "case tracking to transparency",
  1000,
  "legal operations to agility",
  1000,
  "court filings to speed",
  1000,
  "legal advice to actionable insights",
  1000,
  "client service to excellence",
  1000,
];

const Homepage = () => {
  return (
    <main>
      <div className="wrapper container flex flex-col items-center justify-center min-h-screen mx-auto font-light text-center p-4">
        <h1 className="text-7xl text-primary font-bold mb-4">
          Neocase
          <TypeAnimation
            sequence={[".", 500, " ", 500]}
            repeat={Infinity}
            cursor={false}
            className="absolute"
          />
        </h1>
        <p className="h-20 text-2xl md:text-4xl font-light">
          Transform{" "}
          <TypeAnimation
            preRenderFirstString={true}
            sequence={sequence}
            repeat={Infinity}
            deletionSpeed={75}
          />
        </p>

        <form action="https://api.web3forms.com/submit" method="POST">
          <Button
            type="submit"
            className="rounded-full bg-gradient-to-r from-primary via-blue-500 to-teal-500 text-white py-2 px-4 my-4 transition-all"
          >
            Join the waitlist ✨
          </Button>
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border-2 border-primary rounded-full py-2 px-4"
          />
          <input type="hidden" name="access_key" value={WEB3FORM_ACCESS_KEY} />
          <input type="checkbox" name="botcheck" className="hidden"></input>
          <input
            type="hidden"
            name="subject"
            value="New Submission from Neocase Waitlist"
          ></input>
        </form>
      </div>
    </main>
  );
};

export default Homepage;
