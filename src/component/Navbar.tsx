"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNavbar() {
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const pathname = usePathname();

  const navLinks = [
    // { name: "Home", path: "/" },

    {
      name: "Business",
      children: [
        { name: "Verticals", path: "/business/verticals" },
        { name: "Projects", path: "/business/projects" },
        { name: "Academy", path: "/business/academy" },
        { name: "Properties", path: "/business/properties" },
        { name: "Services", path: "/business/services" },
        { name: "Foundation", path: "/business/foundation" },
      ],
    },

    // { name: "Contact", path: "/contact" },
  ];

  // Scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* 🔹 TOPBAR */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-12 py-5 z-50">
        
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/images/prim_logo.png"
            alt="Logo"
            width={110}
            height={40}
            className="cursor-pointer"
          />
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
        >
          Menu <Menu size={18} />
        </button>
      </header>

      {/* 🔹 OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/60 backdrop-blur-md z-40 transition ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 🔹 SIDEBAR */}
      <aside
        className={`fixed top-0 right-0 h-screen w-full md:w-[420px] bg-[#0b0b0b] text-white z-50 transform transition duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-6 right-6 border border-white/20 p-2 rounded-full hover:bg-white hover:text-black transition"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <div className="h-full flex flex-col justify-between px-8 py-20">
          
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-8">
              NAVIGATION
            </p>

            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  
                  {/* 🔹 NORMAL LINK */}
                  {!link.children ? (
                    <Link
                      href={link.path!}
                      onClick={() => setOpen(false)}
                      className={`block text-xl font-medium transition ${
                        pathname === link.path
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {link.name}

                      {pathname === link.path && (
                        <div className="h-[2px] w-8 bg-white mt-1"></div>
                      )}
                    </Link>
                  ) : (
                    <>
                      {/* 🔹 DROPDOWN BUTTON */}
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className="flex items-center justify-between w-full text-xl font-medium text-gray-300 hover:text-white transition"
                      >
                        {link.name}
                        <ChevronDown
                          className={`transition ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* 🔥 CHILDREN */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ${
                          openDropdown === link.name
                            ? "max-h-[400px] mt-4"
                            : "max-h-0"
                        }`}
                      >
                        <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                          {link.children.map((child) => (
                            <Link
                              key={child.path}
                              href={child.path}
                              onClick={() => setOpen(false)}
                              className={`text-base transition ${
                                pathname === child.path
                                  ? "text-white"
                                  : "text-gray-500 hover:text-white"
                              }`}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* FOOTER */}
          <div className="text-xs text-gray-500">
            <p>© 2026 OneX</p>
            <div className="flex gap-4 mt-3">
              <span className="hover:text-white cursor-pointer">LinkedIn</span>
              <span className="hover:text-white cursor-pointer">Instagram</span>
              <span className="hover:text-white cursor-pointer">Twitter</span>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}