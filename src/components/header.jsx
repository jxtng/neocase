import Image from "next/image";
import { Button } from "@/ui/button";
import links from "@/data/links";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="header container mx-auto p-8 flex justify-between items-center">
      <div className="logo">
        <Image
          src="/images/logo.png"
          alt="Neocase logo"
          width={195}
          height={57}
        />
      </div>
      <nav className="flex items-center gap-16">
        <ul className="flex gap-8">
          {links.map(({ title, href }) => (
            <li
              key={title}
              className={cn(
                "text-slate-500 hover:text-foreground",
                title === "Home" && "text-foreground border-b-2 border-primary"
              )}
            >
              <a href={href} className="block">
                {title}
              </a>
            </li>
          ))}
        </ul>

        <ul className="btns flex gap-4">
          <li>
            <Button variant="link">Login</Button>
          </li>
          <li>
            <Button>Join waitlist</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
