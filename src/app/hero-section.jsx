import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <section className="hero flex gap-4 justify-between items-start container mx-auto p-8">
        <div className="content w-2/5 space-y-3">
          <h1 className="font-bold text-6xl">
            Legal practice management perfected
          </h1>
          <svg
            width="487"
            height="34"
            viewBox="0 0 487 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"
              stroke="#7147CB"
              stroke-width="8"
              stroke-linecap="round"
            />
          </svg>

          <p>
            Empower your legal practice with Neocase. Manage cases, time,
            billing, and client communication with ease. Streamline your
            workflow and deliver exceptional results.
          </p>
        </div>

        <div className="image w-2/5">
          <Image
            className="w-full"
            src="/images/hero.png"
            alt="An illustration of an office environment with three peopleinteracting and chatting. Two sitting down facing a latop, one standing"
            width={649}
            height={445}
          />
        </div>
      </section>

      <section className="join-waitlist container">
        <div className="form-group flex w-fit mb-2 mx-auto gap-4 items-start">
          <div className="input-control flex flex-col gap-2 mb-8 justify-center">
            <Input
              placeholder="Your email address"
              className="rounded-full shadow-lg w-[400px] p-6"
            />
            <p className="text-sm text-gray-500 text-center font-medium">
              Join 2,000+ others who signed up
            </p>

            <div className="avatars flex mx-auto">
              {[
                "/images/avatar-1.png",
                "/images/avatar-2.png",
                "/images/avatar-3.png",
              ].map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt="An avatar of a person"
                  width={45}
                  height={45}
                  className="rounded-full border border-primary"
                  style={{ marginLeft: index > 0 ? "-1rem" : 0 }}
                />
              ))}
            </div>
          </div>
          <Button className="flex gap-2 shadow-lg mt-1">
            Join waitlist
            <ArrowRight />
          </Button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
