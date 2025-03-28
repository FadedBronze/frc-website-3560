import type { Route } from "./+types/home";
import { useState, useRef, useEffect } from "react";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import windowSizeContext from "src/contexts/windowSizeContext";
import {
  Lightbulb,
  Code,
  BriefcaseBusiness,
  Cuboid,
  WandSparkles,
  Wrench,
  CircleArrowLeft,
  CircleArrowRight,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "3560 Mechawolves" },
    {
      name: "description",
      content: "Chinguacousy SS' FRC Team - 3560 Mechawolves",
    },
  ];
}

function MainText() {
  return (
    <article className="relative w-full lg:w-1/2">
      <div className="w-14 bg-blue-400 h-1 rounded mb-3" />
      <h1 className="font-[Passion_One] text-3xl mb-1 uppercase ">
        FRC Team 3560{" "}
        <span className="hover:text-blue-400 transition-colors duration-300">
          MECHAWOLVES
        </span>
      </h1>
      <p className="mb-6">
        Ready to build the future? Join our robotics club and dive into hands-on
        fun with robots! Registrations are now open for grade 9 - 12's. Work on
        cool projects, learn new skills, and compete in exciting challenges.
        Don’t wait—sign up today and start your robotics adventure!
      </p>
      <button className="rounded-sm px-4 py-2 border-1 border-white text-xl font-[Passion_One] hover:text-[#00041A] hover:bg-white transition-colors duration-200 cursor-pointer">
        Contact Us
      </button>
    </article>
  );
}

function ResponsiveIframe(props: any) {
  const divRef = useRef<HTMLDivElement>(null);
  const { width, height } = windowSizeContext();
  const [divWidth, setDivWidth] = useState(480);

  const setWidth = () => {
    if (divRef.current == null) return;
    setDivWidth(divRef.current.clientWidth);
  };

  useEffect(setWidth, []);

  useEffect(setWidth, [width, height]);

  return (
    <div ref={divRef} {...props}>
      <iframe
        width={divWidth}
        height={(divWidth * 1080) / 1920}
        src={props.src}
      ></iframe>
    </div>
  );
}

export default function Home() {
  const displays = [
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/1.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/8.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/5.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/4.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/3.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/2.png" },
  ];

  const [currentDisplay, setCurrentDisplay] = useState(0);

  useEffect(() => {
    const int = setInterval(() => {
      setCurrentDisplay((prev) => (prev + 1) % displays.length);
    }, 5000);
    return () => clearInterval(int);
  });

  return (
    <>
      <Navbar />
      <section className="relative h-[700px] w-full mt-[-80px] overflow-x-clip">
        {displays[currentDisplay].image && (
          <img
            className="w-full object-center object-cover h-full absolute"
            src={displays[currentDisplay].image}
          />
        )}
        <div className="bg-black opacity-85 w-full h-full absolute"></div>
        <div className="px-[45px] lg:px-[145px] h-full flex items-center">
          <MainText />
        </div>
        <div className="flex absolute bottom-3 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center gap-4">
          <CircleArrowLeft
            size={24}
            className="hover:scale-[115%] transition-transform duration-150"
            onClick={() =>
              setCurrentDisplay(
                (prev) => (prev - 1 + displays.length) % displays.length
              )
            }
          />
          <div className="b-[145px]  flex gap-3">
            {displays.map((_, i) => (
              <div
                className={
                  "rounded-full w-2 h-2 " +
                  (i == currentDisplay ? "bg-blue-400" : "bg-blue-200")
                }
              ></div>
            ))}
          </div>
          <CircleArrowRight
            size={24}
            className="hover:scale-[115%] transition-transform duration-150"
            onClick={() =>
              setCurrentDisplay((prev) => (prev + 1) % displays.length)
            }
          />
        </div>

        <div className="font-[Passion_One] text-blue-950 text-3xl absolute bottom-0 translate-y-1/2 left-0 whitespace-nowrap overflow-hidden w-full">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="whitespace-nowrap inline-block animate-[marquee_10s_linear_infinite]"
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className="hover:text-blue-800 transition-colors duration-300 relative marquee-item"
                  onMouseOver={(e) => {
                    const allSpans = document.querySelectorAll(".marquee-item");
                    const currentIndex = Array.from(allSpans).indexOf(
                      e.currentTarget
                    );
                    const before = allSpans[currentIndex - 1] as HTMLElement;
                    const after = allSpans[currentIndex + 1] as HTMLElement;

                    if (before) before.style.color = "#1c398e";
                    if (after) after.style.color = "#1c398e";
                  }}
                  onMouseLeave={(e) => {
                    const allSpans = document.querySelectorAll(".marquee-item");
                    const currentIndex = Array.from(allSpans).indexOf(
                      e.currentTarget
                    );
                    const before = allSpans[currentIndex - 1] as HTMLElement;
                    const after = allSpans[currentIndex + 1] as HTMLElement;

                    if (before) before.style.color = "";
                    if (after) after.style.color = "";
                  }}
                >
                  MECHAWOLVES
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <div className="w-full lg:px-[145px] px-[45px] py-10">
        <section className="gap-8 py-30 grid grid-cols-1 md:grid-cols-2">
          <ResponsiveIframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
          <article>
            <h2 className="font-[Passion_One] text-3xl mb-3">
              WELCOME TO 3560
            </h2>
            <p>
              At 3560 FRC Robotics, we are a passionate team of students and
              mentors dedicated to designing, building, and programming robots
              for competition. Our mission is to foster innovation, teamwork,
              and problem-solving skills while preparing the next generation of
              STEM leaders. Through hands-on experience and collaboration, we
              aim to inspire a love for technology and make a positive impact on
              our community.
            </p>
          </article>
        </section>
        <section>
          <article className="mb-16">
            <h2 className="font-[Passion_One] text-3xl mb-3">SUBDIVISIONS</h2>
            <p>
              The 3560 FRC Robotics team is divided into specialized subteams
              that work together to bring the robot to life. The Mechanical team
              handles the design and assembly of the robot’s structure, while
              the Programming team writes the code for its functions. The
              Electrical team manages wiring and power systems, and the CAD team
              creates 3D models to plan the robot’s design. The Graphic team
              focuses on branding and visual content, and the Business team
              oversees fundraising, sponsorships, and outreach to ensure the
              team’s success.
            </p>
          </article>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 max:sm:grid-cols-1 gap-16 pt-10 -mb-16">
            {[
              {
                name: "PROGRAMMING",
                src: Code,
                description:
                  "The Programming team writes the code that controls the robot, developing software for autonomous and driver-controlled functions using advanced logic and problem-solving.",
              },
              {
                name: "MECHANICAL",
                src: Wrench,
                description:
                  "The Mechanical team designs, builds, and assembles the robot’s physical components, focusing on structure, movement, and durability to ensure peak performance.",
              },
              {
                name: "ELECTRICAL",
                src: Lightbulb,
                description:
                  "The Electrical team handles the wiring and power systems, ensuring that all components are properly connected and the robot operates safely and efficiently.",
              },
              {
                name: "CAD",
                src: Cuboid,
                description:
                  "The CAD (Computer-Aided Design) team creates detailed 3D models of the robot, using precision design to plan and simulate its structure before building.",
              },
              {
                name: "GRAPHICS",
                src: WandSparkles,
                description:
                  "The Graphic team focuses on branding and visual design, creating logos, team merchandise, and digital content to represent the team’s identity.",
              },
              {
                name: "BUSINESS",
                src: BriefcaseBusiness,
                description:
                  "The Business team manages outreach, fundraising, and sponsorships, ensuring the team has the resources and support needed for success. They also handle marketing and team communications.",
              },
            ].map((subteam) => (
              <article className="relative">
                <h3 className="font-[Passion_One] text-2xl mb-3">
                  {subteam.name}
                </h3>
                <p className="mb-5">{subteam.description}</p>
                {subteam.name !== "GRAPHICS" && (
                  <button
                    onClick={() => {
                      window.location.href = `/${subteam.name.toLowerCase()}`;
                    }}
                    className="rounded-sm px-4 py-3 bg-blue-400 font-[Passion_One] text-[#00041A] hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-xl"
                  >
                    Learn More
                  </button>
                )}
                <subteam.src className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[200%] scale-[7.0] opacity-10"></subteam.src>
              </article>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
