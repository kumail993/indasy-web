import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

const Navbar = () => {
  const navLinks = [
    { href: "", label: "Home" },
    { href: "", label: "Services" },
    { href: "", label: "About us" },
    { href: "", label: "Blogs" },
  ];

  return (
    <header className="absolute w-full top-8">
      <div className="container">
        <nav className="flex justify-between items-center bg-white rounded-[0.625rem] p-2 shadowed_navbar">
          <div>
            <Image src="/logo.svg" alt="logo" width={140} height={60} />
          </div>
          <ul className="flex items-center justify-between gap-8">
            {navLinks.map((navLink, index) => {
              return (
                <li key={index}>
                  <Link
                    className="text-base text-dark hover:text-primary"
                    href={navLink.href}
                  >
                    {navLink.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button size="icon" className="">
            <MailIcon /> Send a message
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
