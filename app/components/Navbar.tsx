import Link from "next/link";
import React from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Mat",
    href: "/Mat",
  },
  {
    name: "Barbell-Pad",
    href: "/Barbell-Pad",
  },
  {
    name: "Chalk",
    href: "/Chalk",
  },
];

const Navbar = () => {
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-4xl font-bold">
            Kallos <span className="text-primary">Gym</span> Essentials
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}></div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
