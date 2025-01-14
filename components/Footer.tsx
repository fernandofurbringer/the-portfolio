import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="w-full h-20 p-2 z-10 flex gap-4 md:gap-8 justify-center items-center bg-background/60 backdrop-blur-xs shadow-foreground shadow-sm transition-shadow-bg duration-300">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/fernando-furbringer/"}
        className="hover:bg-gray-100 dark:hover:bg-black rounded-full p-4"
      >
        <Linkedin aria-label="LinkedIn Icon" />
      </Link>
      <Link
        className="hover:bg-gray-100 dark:hover:bg-black rounded-full p-4"
        target="_blank"
        href={"https://github.com/fernandofurbringer"}
      >
        <Github aria-label="GitHub Icon" />
      </Link>
      <Link
        href="mailto:fernando.furbringer@gmail.com"
        className="hover:bg-gray-100 dark:hover:bg-black rounded-full p-4"
      >
        <Mail aria-label="Mail Icon" />
      </Link>
    </footer>
  );
}
