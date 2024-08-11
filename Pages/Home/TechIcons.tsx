import React from "react";
import Image from "next/image";
import tsIcon from "@/public/svgs/ts.svg";
import csIcon from "@/public/svgs/cs.svg";
import nextIcon from "@/public/svgs/next.svg";
import netIcon from "@/public/svgs/net.svg";
import reactIcon from "@/public/svgs/react.svg";
import postgresIcon from "@/public/svgs/postgres.svg";
import nodejsIcon from "@/public/svgs/nodejs.svg";
import mongodb from "@/public/svgs/mongodb.svg";
import tailwind from "@/public/svgs/tailwind.svg";
import javascript from "@/public/svgs/javascript.svg";
import genexus from "@/public/svgs/gx.svg";

export default function TechIcons() {
  return (
    <>
      <Image
        alt="GX Icon"
        src={genexus}
        width={300}
        height={100}
        style={{ borderRadius: "10px" }}
        className="w-max-w w-full"
      />
      <Image
        alt="TS Icon"
        src={tsIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Node.js Icon"
        src={nodejsIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="React Icon"
        src={reactIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="Next Icon"
        src={nextIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="JavaScript Icon"
        src={javascript}
        width={300}
        height={100}
        className="w-max-w w-full"
      /> 
      <Image
        alt=".NET Icon"
        src={netIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="C# Icon"
        src={csIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="PostgreSQL Icon"
        src={postgresIcon}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="MongoDB Icon"
        src={mongodb}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
      <Image
        alt="TailwindCSS Icon"
        src={tailwind}
        width={300}
        height={100}
        className="w-max-w w-full"
      />
    </>
  );
}
