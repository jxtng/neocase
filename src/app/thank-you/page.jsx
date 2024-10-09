import Header from "@/components/header";
import { Button } from "@/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Thank You",
};

const ThankYou = () => {
  return (
    <>
      <Header hideLinks />
      <div className="container max-h-screen mx-auto flex flex-col items-center">
        <Image
          src="/images/thank-you.png"
          alt="An image of a Thank You Confetti"
          width={700}
          height={700}
          className="w-[450px]"
        />
        <Button className="-mt-8" asChild>
          <Link href="/">Back to Homepage</Link>
        </Button>
      </div>
    </>
  );
};

export default ThankYou;
