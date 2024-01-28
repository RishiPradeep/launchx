import Navbar from "../../components/navbar/navbar";
import { ReactTyped } from "react-typed";
import { IoRocketSharp } from "react-icons/io5";
import { SiLaunchpad } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdGroups } from "react-icons/md";
import Getstarted from "@/components/getStarted/getStarted";
import Footer from "@/components/footer/footer";
import "./homePage.css";

export default function Homepage() {
  return (
    <div className="dark">
      <Navbar />
      <div className="pt-32 max-w-[1024px] mx-auto">
        <div className="flex-col items-center justify-center">
          <p className="text-center text-4xl text-slate-100 font-medium">
            Discover the cosmos at your fingertips with{" "}
            <span className="text-green-400 font-extrabold">Orbitify.</span>
          </p>
          <p className="text-xl text-slate-300 pt-4">
            Your ultimate hub for tracking rocket launches, exploring
            launchpads, and staying connected with astronauts' journeys beyond
            Earth.
          </p>
          <p className="mt-4 text-3xl text-white font-bold">
            Track launches from{" "}
            <span className={`animated-text text-slate-400`}>
              <ReactTyped
                strings={[
                  "NASA.",
                  "ISRO.",
                  "SPACEX.",
                  "CNSA.",
                  "ROSCOSMOS.",
                  "JAXA.",
                  "ESA.",
                ]}
                typeSpeed={60}
                backSpeed={40}
                backDelay={2000}
                loop
              ></ReactTyped>
            </span>
          </p>
          <div className="grid grid-cols-2 pt-8">
            <ul className="text-white col-span-1 flex-col divide-y-2 gap-4">
              <li className="py-4">
                <span className="font-bold text-green-400 text-xl pt-4 pb-2 flex align-middle">
                  <span className="pr-4">
                    <IoRocketSharp size={30}></IoRocketSharp>
                  </span>
                  Track Launches:
                </span>{" "}
                Stay in the loop with real-time updates on upcoming rocket
                launches. Explore detailed information on spacecraft, mission
                objectives, and launch schedules.
              </li>
              <li className="py-4">
                <span className="font-bold text-green-400 text-xl pt-4 pb-2 flex align-middle">
                  <span className="pr-4">
                    <SiLaunchpad> size={30}</SiLaunchpad>
                  </span>
                  Explore Launchpads:
                </span>{" "}
                Dive into the world's most iconic launchpads. From historic
                sites to cutting-edge spaceports, Orbitify provides an immersive
                experience into the heart of space exploration.
              </li>
              <li className="py-4">
                <span className="font-bold text-green-400 text-xl pt-4 pb-2 flex align-middle">
                  <span className="pr-4">
                    <FaUserAstronaut> size={30}</FaUserAstronaut>
                  </span>
                  Connect with Astronauts:
                </span>{" "}
                Follow the adventures of astronauts around the globe. Get
                insights into their missions, experiences, and contributions to
                space exploration.
              </li>
              <li className="py-4">
                <span className="font-bold text-green-400 text-xl pt-4 pb-2 flex align-middle">
                  <span className="pr-4">
                    <SlCalender> size={30}</SlCalender>
                  </span>
                  Personalized Calender:
                </span>{" "}
                Never miss a launch with our personalized calendar feature.
                Customize your space journey by tracking your favorite launches
                and events.
              </li>
              <li className="py-4">
                <span className="font-bold text-green-400 text-xl pt-4 pb-2 flex align-middle">
                  <span className="pr-4">
                    <MdGroups> size={30}</MdGroups>
                  </span>
                  Global Space Community
                </span>{" "}
                Join a thriving community of space enthusiasts. Share your
                passion, discuss missions, and connect with like-minded
                individuals from around the world.
              </li>
            </ul>
            <div className="col-span-1 pl-12 flex-col divide-y">
              <img className="py-8" src="src\assets\usa.png" alt="Image" />
              <img
                className="py-4"
                src="src\assets\disassembled.png"
                alt="Image"
              />
            </div>
          </div>
        </div>
        <hr />
        <Getstarted />
      </div>
      <Footer />
    </div>
  );
}
