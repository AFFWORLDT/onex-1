"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
type Link = {
  name: string;
  id: string;
};

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const navLinks: Link[] = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Verticals", id: "verticals" },
    { name: "Projects", id: "projects" },
    { name: "Academy", id: "academy" },
    { name: "Properties", id: "properties" },
    { name: "Services", id: "services" },
    { name: "Foundation", id: "foundation" },
    { name: "Contact", id: "contact" },
  ];

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;
          const scroll = window.scrollY;

          if (scroll >= top && scroll < top + height) {
            setActive(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      {/* 🔹 TOPBAR */}
      <header className="fixed top-0 w-full flex justify-between items-center px-5 md:px-10 py-4 z-50 bg-transparent">
       <div onClick={() => handleClick("home")} className="cursor-pointer">
  <Image
    src="/images/prim_logo.png"
    alt="OneX Logo"
    width={100}
    height={40}
  />
</div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-full text-xs md:text-sm font-medium hover:scale-105 transition"
        >
          <span className="hidden md:block">Menu</span>
          <Menu size={18} />
        </button>
      </header>

      {/* 🔹 OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 🔹 SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-screen w-full md:w-[380px] bg-[#0a0a0a] text-white z-50 transform transition duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-5 right-5 border border-white/20 p-2 rounded-full hover:bg-white hover:text-black transition"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="h-full flex flex-col justify-between px-6 md:px-10 py-16">
          {/* Links */}
          <div>
            <p className="text-[10px] tracking-widest text-gray-500 mb-6">
              NAVIGATION
            </p>

            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleClick(link.id)}
                  className={`text-left text-lg md:text-xl font-medium transition ${
                    active === link.id
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active line */}
                  {active === link.id && (
                    <div className="h-[2px] w-6 bg-white mt-1"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Footer */}
          <div className="text-xs text-gray-500">
            <p>© 2026 OneX</p>

            <div className="flex gap-3 mt-2">
              <span className="hover:text-white cursor-pointer">
                LinkedIn
              </span>
              <span className="hover:text-white cursor-pointer">
                Instagram
              </span>
              <span className="hover:text-white cursor-pointer">
                Twitter
              </span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}