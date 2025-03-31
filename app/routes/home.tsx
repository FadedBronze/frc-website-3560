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
  Plus,
} from "lucide-react";
import { WolfButton } from "src/components/WolfButton";
import { openSponsorModal } from "src/functions/sponsor";

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
  const testimonials: Record<string, string> = {
    "David Smith":
      "This was a great experience for me to learn and grow in the field of stem. Thank you 3560!",
    "Paul Longboat":
      "This was a great experience for me to learn and grow in the field of stem. Wow 3560!",
    "Samuel Van Wilderman":
      "This was a great experience for me to learn and grow in the field of stem. Yipee 3560!",
  };

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { width } = windowSizeContext();

  return (
    <section className="color-wolf-black flex flex-col gap-4 w-screen my-20">
      <div className="w-screen h-[441px] relative">
        {width > 600 && (
          <img
            className="absolute left-0 translate-x-[-160px] lg:translate-x-[-60px] scale-x-[-1.0] scale-y-[-1.0]"
            src={BlueSection}
          />
        )}
        {width > 600 && (
          <img
            className="absolute right-0 translate-x-[160px] lg:translate-x-[60px] scale-x-[1.0]"
            src={BlueSection}
          />
        )}
        <div
          className="absolute top-0 h-full bg-wolf-blue"
          style={{
            width: width > 600 ? "66.66%" : "100%",
            left: width > 600 ? "16.66%" : "0%",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center gap-8 relative z-10 w-full h-full mt-4 lg:px-[145px] px-[45px]">
          <p className="text-3xl text-wolf-black font-medium italic text-center">
            "{testimonials[Object.keys(testimonials)[activeTestimonial]]}"
          </p>
          <div className="flex gap-4">
            {Object.keys(testimonials).map((name, i) => (
              <p
                onMouseOver={() => setActiveTestimonial(i)}
                className={`${
                  i == activeTestimonial
                    ? "text-wolf-black -translate-y-[5px]"
                    : "text-white"
                } text-2xl font-[Passion_One] transition-transform duration-300`}
              >
                {i == activeTestimonial ? "-" : ""} {name}
              </p>
            ))}
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
      <WolfButton
        title="Contact Us"
        callback={() => {
          document.querySelector("#contact")?.scrollIntoView();
        }}
        hollow
      />
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

  const teamDescriptions = [
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
  ];

  const faq = [
    {
      question: "What does FRC stand for?",
      answer:
        "FRC stands for FIRST Robotics Competition. It is a global high school robotics competition where teams of students design, build, and program robots to complete specific tasks in a competitive environment.",
    },
    {
      question: "Who can join Mechawolves?",
      answer:
        "Mechawolves is open to all students at our school who are interested in robotics, technology, engineering, and programming. No prior experience is needed, as we provide training and mentorship to all new members.",
    },
    {
      question: "What skills can I learn by joining the team?",
      answer:
        "By joining Mechawolves, you’ll gain hands-on experience in robotics, programming, CAD (computer-aided design), mechanical engineering, and electronics. You’ll also develop valuable teamwork, problem-solving, and leadership skills that are essential for future STEM careers.",
    },
    {
      question: "How often does the team meet?",
      answer:
        "We meet regularly after school, with additional meetings during the build season leading up to competitions. Our schedule includes weekly practice sessions, special workshops, and collaborative events with other teams.",
    },
    {
      question: "Do I need any experience to join?",
      answer:
        "No prior experience is necessary! We welcome students of all skill levels and backgrounds. Our team mentors and experienced members will guide you through the process of learning robotics, programming, and other related skills.",
    },
    {
      question: "What impact does Mechawolves have on the community?",
      answer:
        "Mechawolves not only sparks interest in STEM among students but also engages with the local community through outreach programs, demonstrations, and partnerships. We strive to inspire the next generation of engineers, coders, and innovators!",
    },
  ];

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
            {displays.map((display, i) => (
              <div
                className={
                  "rounded-full w-2 h-2 " +
                  (i == currentDisplay ? "bg-wolf-blue" : "bg-blue-200")
                }
                key={display.image}
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
                  className={`transition-colors duration-500 relative marquee-item select-none ${
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
              {teamDescriptions.map((subteam) => (
                <article className="relative">
                  <h3 className="font-[Passion_One] text-2xl mb-3">
                    {subteam.name}
                  </h3>
                  <p className="mb-5">{subteam.description}</p>
                  {subteam.name !== "GRAPHICS" && (
                    <WolfButton
                      title="Learn More"
                      href={`/${subteam.name.toLowerCase()}`}
                      hollow={false}
                    />
                  )}
                  <subteam.src className="absolute top-1/2 -translate-y-1/2 right-0 -translate-x-[200%] scale-[7.0] opacity-10"></subteam.src>
                </article>
              ))}
            </div>
          </section>
        </div>
        <Testimonials />
        <div className="px-36 mt-10 flex flex-col gap-8">
          <div>
            <h1 className="text-3xl font-[Passion_One] uppercase">
              Ready to get in touch?
            </h1>
            <p className="text-xl">
              Mechawolves is a passionate team of engineers working to make
              change within FRC and Robotics. We would love your support for a
              bright future of innovation and possibility!
            </p>
          </div>

          <div id="FAQ" className="flex gap-4">
            <WolfButton
              title="Sponsorship Package"
              callback={openSponsorModal}
              hollow
            />
            <WolfButton title="Let's Chat" href="/" />
          </div>
        </div>
        <div className="px-36 mt-22 flex flex-col gap-8">
          <h1 className="text-3xl font-[Passion_One] uppercase">
            Frequently Asked Questions
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faq.map((qa, index) => (
              <div key={index} className="flex flex-col gap-4 h-6">
                <button
                  className="cursor-pointer flex z-10 gap-2"
                  onClick={(e) => {
                    e.currentTarget.parentElement?.classList.toggle("h-6");

                    const answer =
                      e.currentTarget.parentElement?.querySelector("p");

                    answer?.classList.toggle("-translate-y-10");
                    answer?.classList.toggle("opacity-0");

                    e.currentTarget
                      .querySelector("svg")
                      ?.classList.toggle("rotate-90");
                  }}
                >
                  <Plus
                    size={28}
                    strokeWidth={3}
                    className={`transition-transform duration-300`}
                  />
                  <h1 className="text-2xl font-semibold">{qa.question}</h1>
                </button>
                <p className="text-lg opacity-0 -translate-y-10 transition-all duration-300">
                  {qa.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
