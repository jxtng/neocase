import { footerLinks } from "@/data/links";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Input } from "@/ui/input";
import { Label } from "@/ui/label";
import { Button } from "@/ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary-foreground text-secondary">
      <div className="container mx-auto p-8">
        <Image
          src="/images/logo.png"
          alt="Neocase logo"
          width={168}
          height={39}
        />

        <div className="flex justify-between items-start">
          <p className="my-4">Join our beta test today.</p>
          <div className="links flex space-x-2 items-center">
            {footerLinks.map(({ title, href }, index) => (
              <>
                {index > 0 && <span className="text-secondary/50">&bull;</span>}
                <a
                  key={title}
                  href={href}
                  className="block text-sm text-secondary/50 hover:text-secondary"
                >
                  {title}
                </a>
              </>
            ))}
          </div>
        </div>
        <Label
          htmlFor="betatest"
          className="input-group flex w-[400px] border-2 rounded-full p-1"
        >
          <Input
            id="betatest"
            type="email"
            placeholder="Enter your email"
            className="bg-transparent rounded-full border-0"
          />
          <Button size="icons" className="group p-2 pr-3" asChild>
            <Link href="/join-beta">
              <ArrowRight className="group-hover:translate-x-1 transition-all duration-300" />
            </Link>
          </Button>
        </Label>
      </div>
      <p className="text-center p-6 border-t border-secondary/5 text-sm text-secondary/70">
        &copy; {new Date().getFullYear()} Neocase, Inc. Copyright and rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
