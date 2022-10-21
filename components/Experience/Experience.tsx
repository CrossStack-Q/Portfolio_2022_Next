import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";

type Props = {};

function Experience({}: Props) {
  const cards = [
    {
      eid: 1,
      avataro: "https://pbs.twimg.com/profile_images/1374086963830034432/Z162OTah_400x400.jpg",
      company: "Devsnest",
      position: "Student",
      started:"June 2022",
      ended:"January 2023",
      technologies: {
        t1: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/server.png",
        t2: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/react.png",
        t3: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/block.png",
      },
      summary: {
        p1: "HTML,CSS",
        p2: "JAVASCRIPT",
        p3: "REACT",
        p4: "DATABASE",
        p5: "NodeJS",
      },
    },
    {
      eid: 2,
      avataro: "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/two.png",
      company: "Other",
      position: "ceo",
      started:"October 2022",
      ended:" 2023",
      technologies: {
        t1: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/server.png",
        t2: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/react.png",
        t3: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/block.png",
      },
      summary: {
        p1: "DSA",
        p2: "COA",
        p3: "OS",
        p4: "AI",
        p5: "DL",
      },
    },
    {
      eid: 3,
      avataro: "https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/logo_flies/two.png",
      company: "Other",
      position: "ceo",
      started:"October 2022",
      ended:" 2023",
      technologies: {
        t1: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/server.png",
        t2: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/react.png",
        t3: "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/block.png",
      },
      summary: {
        p1: "None",
        p2: "None",
        p3: "OS",
        p4: "AI",
        p5: "More",
      },
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll hide-scroll p-10 snap-x snap-mandatory ">
        {cards.map((card, i) => (
          <Card position={card.position} avatar={card.avataro} company={card.company} tech1={card.technologies.t1} tech2={card.technologies.t2} tech3={card.technologies.t3} started={card.started} ended={card.ended} sp1={card.summary.p1} sp2={card.summary.p2} sp3={card.summary.p3} sp4={card.summary.p4} sp5={card.summary.p5} />
        ))}
        {/* ExperienceCard */}
      </div>
    </motion.div>
  );
}

export default Experience;
