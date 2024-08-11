"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { format } from "date-fns";
import { motion } from "framer-motion";
import { SchoolIcon } from "lucide-react";

type Education = {
  title: {
    en: string;
    br: string;
  };
  place: string;
  description: {
    en: string;
    br: string;
  };
  yearStart: Date;
  yearEnd?: Date;
};
const variants = {
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.25,
    },
  }),
  hidden: (i: number) => ({
    opacity: 0,
    x: -10,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  }),
};
export default function Education({
  title,
  locale,
}: Record<"title" | "locale", string>) {
  const educations: Education[] = [
    {
      title: {
        en: "Computer Science",
        br: "Ciência da Computação",
      },
      place: "FURB - Universidade Regional de Blumenau",
      description: {
        en: "Pursued studies in Computer Science at FURB - Universidade Regional de Blumenau.",
        br: "Realizei estudos em Ciência da Computação na FURB - Universidade Regional de Blumenau.",
      },
      yearStart: new Date(2009, 1, 1),
      yearEnd: new Date(2012, 5, 30),
    },
    {
      title: {
        en: "Information Systems",
        br: "Sistemas de Informação",
      },
      place: "UNIFEBE - Fundação Educacional de Brusque",
      description: {
        en: "Pursued studies in Information Systems at UNIFEBE - Fundação Educacional de Brusque.",
        br: "Realizei estudos em Sistemas de Informação na UNIFEBE - Fundação Educacional de Brusque.",
      },
      yearStart: new Date(2012, 6, 1),
      yearEnd: new Date(2014, 5, 30),
    },
  ];
  return (
    <section className="grid relative gap-4 after:w-1 after:h-full after:absolute dark:after:bg-white after:bg-black after:right-0 after:z-0">
      <h2 className="text-fs-600 font-bold">{title}</h2>
      <div className="grid gap-4 relative">
        {educations.map((education, i) => (
          <motion.article
            aria-description="styling element"
            custom={i}
            variants={variants}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.25 }}
            key={i}
            className="relative mr-8 inline"
          >
            <Card className="backdrop-blur-xs bg-opacity-60 dark:bg-opacity-60 flex flex-col">
              <CardHeader>
                <CardTitle>{education.title[locale as "en" | "br"]}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-bold fs-300">{education.place}</p>
                <p className="fs-300">
                  {education.description[locale as "en" | "br"]}
                </p>
              </CardContent>
              <CardFooter className="mt-auto">
                <time className="fs-300">
                  {format(education.yearStart, "dd.MM.yyyy")} -{" "}
                  {education.yearEnd
                    ? format(education?.yearEnd, "dd.MM.yyyy")
                    : "Present"}
                </time>
              </CardFooter>
            </Card>
            <figure className="absolute -right-14 top-0 z-50 bg-gray-200 dark:bg-gray-600 rounded-full p-2">
              <SchoolIcon className="w-8 h-8" />
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
