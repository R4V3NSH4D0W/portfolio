import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* // ? Title  */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon
          className={
            "flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"
          }
        />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            03.
          </span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            {" "}
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col   xl:space-y-36 space-y-8 md:space-y-28">
        {/* // ?  Project  -1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://github.com/R4V3NSH4D0W/kitsuneev3"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/Group 1.png"}
                alt={"Project Screen shot"}
                className={` w-[30rem] `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full   bg-AAprimary opacity-60 z-10"></div>
                <div className="absolute  bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/Group 1.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project{" "}
                </span>
                <a
                  href="https://kitsunee.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Kitsunee
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6  z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right ">
                  Kitsune is a free,{" "}
                  <span className="text-AAsecondary">open source</span> project,
                  where you can stream any anime without ads. This project was
                  created for learning purposes with the help of{" "}
                  <span className="text-AAsecondary">React native {""}</span>
                  and <span className="text-AAsecondary"> Node.js</span>
                </p>
              </div>
              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">Node.js</span>
                <span className="pr-4 z-10">Consumet</span>
                <span className="pr-4 z-10">Typescript</span>
              </ul>

              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://github.com/R4V3NSH4D0W/kitsuneev3"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project  0*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://github.com/R4V3NSH4D0W/Travel-Ideas-AI"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/travelideas.png"}
                alt={"Project Screen shot"}
                className={` w-[35rem] `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/travelideas.png"}
                  alt={"Project Screen shot"}
                  className={` w-[30rem] h-[20rem] `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://github.com/R4V3NSH4D0W/Travel-Ideas-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Travel Ideas AI
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  <span className="text-AAsecondary">Travel Ideas AI</span> is a
                  mobile application built using
                  <span className="text-AAsecondary">
                    {" "}
                    Google Gemini AI
                  </span>{" "}
                  and developed with
                  <span className="text-AAsecondary"> React Native Expo</span>.
                  This platform provides personalized travel recommendations
                  based on user preferences and AI-powered insights. It also
                  features
                  <span className="text-AAsecondary">
                    {" "}
                    Google Landmark Recognition
                  </span>
                  , enabling users to identify famous landmarks with support for
                  up to five languages: English, Japanese, Korean, Dutch, and
                  Russian.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">React Native</span>
                <span className="pr-4 z-10">Expo</span>
                <span className="pr-4 z-10">Google Gemini AI</span>
                <span className="pr-4 z-10">Google Vison API</span>
                <span className="pr-4 z-10">Tailwind</span>
                <span className="pr-4 z-10">Firebase</span>
              </ul>

              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://github.com/R4V3NSH4D0W/Travel-Ideas-AI"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* // ?  Project  1*/}
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96 "
        >
          {/* Left image */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center"
          >
            <div className="relative rounded w-full h-full col-span-7 ">
              {/* <Link href={"/typing"}>
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAsecondary 
           transition-opacity opacity-20 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </Link> */}

              <a
                href="https://artgallery.lenishmagar.me"
                target={"_blank"}
                rel="noreferrer"
              >
                <div
                  // onClick={}
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>

              <Img
                src={"/artgallery.png"}
                alt={"Project Screen shot"}
                className={`w-full rounded h-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/artgallery.png"}
                  alt={"Project Screen shot"}
                  className={`w-full h-full `}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 
            col-span-8 flex flex-col items-start md:items-end space-y-3"
            >
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project{" "}
                </span>
                <a
                  href="https://artgallery.lenishmagar.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Art gallery
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  <span className="text-AAsecondary">ArtGallery</span> is a
                  single-vendor e-commerce store specializing in{" "}
                  <span className="text-AAsecondary">string art</span>. Users
                  can explore and purchase unique art pieces with support for
                  <span className="text-AAsecondary">
                    {" "}
                    Cash on Delivery (COD)
                  </span>{" "}
                  as the payment method. Built using{" "}
                  <span className="text-AAsecondary">Next.js</span> and
                  <span className="text-AAsecondary"> Tailwind CSS</span>, this
                  platform offers a seamless and visually appealing shopping
                  experience.
                </p>
              </div>

              <ul
                className="flex flex-wrap w-full text-gray-300 md:text-gray-400
               text-sm font-Text2 md:justify-end"
              >
                <span className="pr-4 z-10">Nextjs</span>
                <span className="pr-4 z-10">TailwindCSS</span>
              </ul>

              <div className="z-10 flex fle-row space-x-5 ">
                <GithubIcon link="https://github.com/R4V3NSH4D0W/ArtGallery" />
                <a
                  href="https://artgallery.lenishmagar.me"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="relative md:grid md:grid-cols-12 w-full md:h-96  "
        >
          {/* ani Stream */}
          <div
            className="hidden bg-AAprimary z-10  py-4 
          absolute md:grid grid-cols-12 w-full h-full  content-center "
          >
            <div className="relative rounded w-full h-full col-start-6 col-span-7 ">
              <a
                href={"https://anistream.solvryn.me/"}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className="absolute w-full h-full rounded bg-AAprimary 
           transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"
                ></div>
              </a>
              <Img
                src={"/anistream.png"}
                alt={"Project Screen shot"}
                className={` w-full `}
              />
            </div>
          </div>

          {/* right Content */}
          <div className=" md:absolute py-4  md:grid md:grid-cols-12 w-full h-full  content-center ">
            {/* background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-AAsecondary opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img
                  src={"/anistream.png"}
                  alt={"Project Screen shot"}
                  className={` w-full h-full`}
                />
              </div>
            </div>

            <div
              className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6   
            col-span-8 flex flex-col items-start  space-y-3 md:order-1"
            >
              <div className="flex flex-col space-y-1  z-10">
                <span className="text-AAsecondary text-base">
                  Recent Project
                </span>
                <a
                  href="https://anistream.solvryn.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className=" md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    AniStream
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-left ">
                  AniStream is a free,{" "}
                  <span className="text-AAsecondary">open source</span> project,
                  where you can stream any anime without ads. This project was
                  created for learning purposes with the help of{" "}
                  <span className="text-AAsecondary">Next.js {""}</span>
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Consumet</span>
              </ul>

              <div className="z-10 flex fle-row space-x-5 ">
                <a
                  href="https://anistream.solvryn.me/"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* // ?  Project 2 */}
      </div>
    </div>
  );
}
