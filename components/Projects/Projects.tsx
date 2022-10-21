import { motion } from "framer-motion";
import React from "react";

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      pid: 1,
      name: "Medium",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_1/Screenshot%20(104).png",
      about:
        " Its a Medium Clone built in NextJS .It uses a Sanity CMS to add content to Web App.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 2,
      name: "Facebook",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_2/13.png",
      about:
        " Its a Facebook Clone built in NextJS .It uses a Firebase as database to add content to Web App.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 3,
      name: "Reddit",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_3/15.png",
      about:
        " Its a Reddit Clone built in NextJS.It uses lots of new Techologies with basic concept.It will be completed soon.All functionality will work I might consider it for small scale deployment  in production.",
    },
    {
      pid: 4,
      name: "Netflix",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_4/16.png",
      about:
        " Its a Netflix Clone built in NextJS .It basically the frontend project.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 5,
      name: "Linkedin",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_5/17.png",
      about:
        " Its a Linkedin Clone built in NextJS .It uses firebase as online database to add content to Web App.The Site is fully responsive uses TailwindCSS.There is dark mode in app using css variables.",
    },
    {
      pid: 6,
      name: "Spotify",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_6/18.png",
      about:
        " Its a Spotify Clone built in NextJS .It uses Spotify API's from spotify for developers.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 7,
      name: "Instagram",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_7/19.png",
      about:
        " Its Instagram Clone built in NextJS .It uses online database firebase to add content to Web App.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 8,
      name: "Cred",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_9/22.png",
      about:
        " Its a Cred Website Clone built in NextJS .It is just a frontend project to practice animation later framer comes like that.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 9,
      name: "Twitter",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_8/21.png",
      about:
        " Its a Twitter Clone built in NextJS .It uses online database firebase to add content to Web App.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 10,
      name: "Image Gallery",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_10/25.png",
      about:
        " Its a Image Gallery in NextJS .It uses Supabase to add content the data is fully encrypted.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 11,
      name: "Google Photos",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_11/day_11.png",
      about:
        " Its Google Photos Clone built in NextJS .It uses firebase to add content to Web App.The data is encrypted.The Site is fully responsive uses TailwindCSS .",
    },
    {
      pid: 12,
      name: "Youtube",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_12/12q%20(1).png",
      about:
        " Its a Youtube Clone built in NextJS .It uses firebase to add content to Web App.The Site is fully responsive uses TailwindCSS .Slug is there but Videos are played you have access to delete your uploaded content. But Youtube is much more !.",
    },
    {
      pid: 13,
      name: "Google Drive",
      imager:
        "https://raw.githubusercontent.com/Cross-Rehk/June_2022/main/Screenshots/Day_13/13.png",
      about:
        " Its a Google Drive Clone built in NextJS .The encrypted data,responsive,slug,object(view) etc.",
    },
  ];
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              transition={{ duration: 1 }}
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={project.imager}
              className="h-[40vh] mt-12"
              alt=""
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl lg:max-w-7xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="">{project.name} </span>
                <span className='underline decoration-[#F7AB0A]'> {i+1} of {projects.length}</span>
              </h4>

              <p className="text-lg text-center md:text-left">
                {project.about}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </div>
  );
}

export default Projects;
