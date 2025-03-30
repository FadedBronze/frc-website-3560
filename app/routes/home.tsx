import type { Route } from "./+types/home";
import BlueSection from "public/BlueSection.svg";
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

function Testimonials() {
  const testimonials = [
    {
      name: "David",
      quote:
        "This was a great experience for me to learn and grow in the field of stem. Thank you 3560!a",
      title: "3560 Alumni",
    },
    {
      name: "Paul",
      quote:
        "This was a great experience for me to learn and grow in the field of stem. Thank you 3560!b",
      title: "Teacher",
    },
    {
      name: "Samuel",
      quote:
        "This was a great experience for me to learn and grow in the field of stem. Thank you 3560!c",
      title: "Mentor",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <section className="color-wolf-black flex flex-col gap-4 w-screen my-20">
      <div
        className="w-screen h-[23vw]"
        style={{
          backgroundImage: `url(${BlueSection})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center justify-center gap-4 relative w-full h-full">
          <div>
            <div className="w-64 h-64 rounded-full bg-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold text-center -translate-y-4">
                {testimonials[activeTestimonial].name}
                <br />
                {testimonials[activeTestimonial].title}
              </span>
            </div>
            <div className="w-64 h-[60px] bg-wolf-blue absolute -translate-y-[60px]"></div>
          </div>

          <p className="text-2xl text-wolf-black font-medium italic">
            "{testimonials[activeTestimonial].quote}"
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setActiveTestimonial(
                    (activeTestimonial - 1 + testimonials.length) %
                      testimonials.length
                  );
                }}
                className="p-2 rounded-full bg-wolf-blue hover:bg-blue-500 transition-colors duration-300"
              >
                <CircleArrowLeft size={24} />
              </button>
              <button
                onClick={() => {
                  setActiveTestimonial(
                    (activeTestimonial + 1) % testimonials.length
                  );
                }}
                className="p-2 rounded-full bg-wolf-blue hover:bg-blue-500 transition-colors duration-300"
              >
                <CircleArrowRight size={24} />
              </button>
            </div>
            <div className="flex gap-2 overflow-hidden relative w-16 justify-center items-center">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === activeTestimonial ? "bg-blue-300" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
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
      <button
        role="link"
        onClick={() => {
          document.querySelector("#contact")?.scrollIntoView();
        }}
        className="rounded-sm px-4 py-2 border-1 border-white text-xl font-[Passion_One] hover:text-wolf-black hover:bg-white transition-colors duration-200 cursor-pointer"
      >
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
  }, [displays.length]);

  const [position, setPosition] = useState(0);
  const [velocity, setVelocity] = useState(0);

  useEffect(() => {
    let lastTime = performance.now();
    let lastScrollY = window.scrollY;
    let timeout = setTimeout(() => setVelocity(0), 100);

    const handleScroll = () => {
      const now = performance.now();
      const deltaTime = now - lastTime;
      clearTimeout(timeout);

      if (deltaTime > 0) {
        const scrollDistance = Math.abs(window.scrollY - lastScrollY);
        const velocity = scrollDistance / deltaTime; // Scroll speed

        // Adjust marquee speed dynamically
        const newSpeed = Math.max(2, velocity * 10); // Faster scroll = lower duration
        setPosition(newSpeed + window.scrollY);
        setVelocity(newSpeed);
      }

      timeout = setTimeout(() => setVelocity(0), 100);
      lastScrollY = window.scrollY;
      lastTime = now;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const cappedVel = Math.min(velocity / 5, 1);

  return (
    <>
      <Navbar />
      <section className="relative h-[700px] w-full mt-[-80px] overflow-x-clip">
        {displays.map((display, index) => (
          <img
            key={index}
            className={`w-full object-center object-cover h-full absolute transition-opacity duration-1000 ${
              index === currentDisplay ? "opacity-100" : "opacity-0"
            }`}
            src={display.image}
          />
        ))}
        <div className="bg-wolf-black opacity-85 w-full h-full absolute"></div>
        <div className="px-[45px] lg:px-[145px] h-full flex items-center">
          <MainText />
        </div>
        <div className="flex absolute bottom-6 -translate-y-1/2 left-1/2 -translate-x-1/2 items-center justify-center gap-4">
          <CircleArrowLeft
            size={24}
            className="opacity-20 hover:scale-[115%] transition-transform duration-150"
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
                  (i == currentDisplay ? "bg-wolf-blue" : "bg-blue-200")
                }
              ></div>
            ))}
          </div>
          <CircleArrowRight
            size={24}
            className="opacity-20 hover:scale-[115%] transition-transform duration-150"
            onClick={() =>
              setCurrentDisplay((prev) => (prev + 1) % displays.length)
            }
          />
        </div>

        <div
          style={{
            color: `rgb(${cappedVel * 255 * 0.3}, ${
              8 + cappedVel * 247 * 0.6
            }, ${34 + cappedVel * 221})`,
            transition: "color",
            letterSpacing: "-2px",
          }}
          className="font-[Passion_One] text-7xl absolute bottom-1 translate-y-[calc(100%-7px)] left-0 whitespace-nowrap overflow-hidden w-full"
        >
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="whitespace-nowrap inline-block"
              style={{
                transform: `translateX(-${position / 2}px)`,
                transition: `transform`,
              }}
            >
              {Array.from({ length: 4 }).map((_, i) => (
                <span
                  key={i}
                  className={`transition-colors duration-500 relative marquee-item ${
                    velocity === 0 ? "hover:text-blue-950" : ""
                  }`}
                >
                  MECHAWOLVES
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>
      <div className="w-full py-10 flex flex-col gap-4">
        <div className="lg:px-[145px] px-[45px] w-full h-full">
          <section className="gap-8 py-16 md:py-30 grid grid-cols-1 md:grid-cols-2">
            <ResponsiveIframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
            <article>
              <h2 className="font-[Passion_One] text-3xl mb-3">
                WELCOME TO 3560
              </h2>
              <p>
                At 3560 FRC Robotics, we are a passionate team of students and
                mentors dedicated to designing, building, and programming robots
                for competition. Since 2011, our mission has been to foster
                innovation, teamwork, and problem-solving skills while preparing
                the next generation of STEM leaders. Through hands-on experience
                and collaboration, we aim to inspire a love for technology and
                make a positive impact on our community.
              </p>
            </article>
          </section>
          <section>
            <article className="mb-8 md:mb-16">
              <h2 className="font-[Passion_One] text-3xl mb-3">SUBDIVISIONS</h2>
              <p>
                The 3560 FRC Robotics team is divided into specialized subteams
                that work together to bring the robot to life. The Mechanical
                team handles the design and assembly of the robot’s structure,
                while the Programming team writes the code for its functions.
                The Electrical team manages wiring and power systems, and the
                CAD team creates 3D models to plan the robot’s design. The
                Graphic team focuses on branding and visual content, and the
                Business team oversees fundraising, sponsorships, and outreach
                to ensure the team’s success.
              </p>
            </article>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 max:sm:grid-cols-1 gap-16 pt-10">
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
                      className="rounded-sm px-4 py-3 bg-wolf-blue font-[Passion_One] text-wolf-black hover:bg-blue-500 hover:-translate-y-1 transition-all duration-300 cursor-pointer text-xl"
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
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
