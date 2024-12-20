"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [hasBackground, setHasBackground] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasBackground(true);
    } else {
      setHasBackground(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768); // Anggap 768px sebagai breakpoint untuk mobile
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Set initial state
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full p-4 z-50 transition-all duration-300">
        <div
        className={`container mx-auto rounded-full  h-16 text-xl flex items-center
        ${
            isMobile
            ? " justify-between flex-row-reverse"
            : ` max-w-prose justify-evenly  ${
          hasBackground
            ? "bg-gradient-to-r from-black/80 to-blue-500/80 shadow-lg"
            : "bg-transparent"
        }`
        }
        `}
      >

        {isMobile ? (
          <div>
            <button
              onClick={toggleMenu}
              className="text-white  focus:outline-none"
            >
              {isMenuOpen ?  (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
            {isMenuOpen && (
              <ul className="absolute top-16 right-4 bg-white rounded-md shadow-md p-4 space-y-2">
                <li>
                  <Link href="/">
                    <h1
                      className={`${
                        pathname === "/"
                          ? "text-teal-300 bg-black/10 px-3 py-1 rounded-md"
                          : "text-black"
                      } hover:text-teal-300`}
                    >
                      Work
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <h1
                      className={`${
                        pathname === "/about"
                          ? "text-teal-300 bg-black/10 px-3 py-1 rounded-md"
                          : "text-black"
                      } hover:text-teal-300`}
                    >
                      About
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Experience">
                    <h1
                      className={`${
                        pathname === "/Experience"
                          ? "text-teal-300 bg-black/10 px-3 py-1 rounded-md"
                          : "text-black"
                      } hover:text-teal-300`}
                    >
                      Experience
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href="/Projects">
                    <h1
                      className={`${
                        pathname === "/Projects"
                          ? "text-teal-300 bg-black/10 px-3 py-1 rounded-md"
                          : "text-black"
                      } hover:text-teal-300`}
                    >
                      Projects
                    </h1>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <h1
                      className={`${
                        pathname === "/contact"
                          ? "text-teal-300 bg-black/10 px-3 py-1 rounded-md"
                          : "text-black"
                      } hover:text-teal-300`}
                    >
                      Contact
                    </h1>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <ul className="flex gap-11 space-x-4">
            <li>
              <Link href="/">
                <h1
                  className={`${
                    pathname === "/"
                      ? "text-teal-300 bg-white/20 px-3 py-1 rounded-md"
                      : "text-white"
                  } hover:text-teal-300`}
                >
                  Work
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <h1
                  className={`${
                    pathname === "/about"
                      ? "text-teal-300 bg-white/20 px-3 py-1 rounded-md"
                      : "text-white"
                  } hover:text-teal-300`}
                >
                  About
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/Experience">
                <h1
                  className={`${
                    pathname === "/Experience"
                      ? "text-teal-300 bg-white/20 px-3 py-1 rounded-md"
                      : "text-white"
                  } hover:text-teal-300`}
                >
                  Experience
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/Projects">
                <h1
                  className={`${
                    pathname === "/Projects"
                      ? "text-teal-300 bg-white/20 px-3 py-1 rounded-md"
                      : "text-white"
                  } hover:text-teal-300`}
                >
                  Projects
                </h1>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <h1
                  className={`${
                    pathname === "/contact"
                      ? "text-teal-300 bg-white/20 px-3 py-1 rounded-md"
                      : "text-white"
                  } hover:text-teal-300`}
                >
                  Contact
                </h1>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
