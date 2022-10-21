import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

// type Props = {
//   company: String;
//   position: String;
//   tech1: String;
//   tech2: String;
//   tech3: String;
// };

function Card({ company, position, tech1,avatar, tech2, tech3 , started,ended , sp1,sp2,sp3,sp4,sp5 }) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[500px] xl:w-[800px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden mt-10 lg:mt-16">
      <motion.img
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={avatar}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">
          {position.toUpperCase()} of {company}
        </h4>
        <p className="font-bold text-2xl mt-1">Technology</p>
        <div className="flex space-x-2 my-2">
          <div className="h-10 w-10 rounded-full relative">
            <Image
              layout="fill"
              className=" rounded-full"
              src={tech1}
              alt=""
            />
          </div>
          <div className="h-10 w-10 rounded-full relative">
            <Image
              layout="fill"
              className=" rounded-full"
              src={tech2}
              alt=""
            />
          </div>
          <div className="h-10 w-10 rounded-full relative">
            <Image
              layout="fill"
              className=" rounded-full"
              src={tech3}
              alt=""
            />
          </div>

          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {started} - {ended}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>{sp1}</li>
          <li>{sp2}</li>
          <li>{sp3}</li>
          <li>{sp4}</li>
          <li>{sp5}</li>
        </ul>
      </div>
    </article>
  );
}

export default Card;
