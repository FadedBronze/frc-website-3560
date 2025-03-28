import type { Route } from "./+types/home";
import { useState } from "react";
import Navbar from "../../src/components/Navbar"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function MainText() {
  return (
    <article className="relative">
      <div className="w-14 bg-blue-400 h-1 rounded mb-3" />
      <h1 className="font-[Passion_One] text-3xl mb-1">FRC TEAM 3560 MECHAWOLVES</h1>
      <p className="mb-6">Ready to build the future? Join our robotics club and dive into hands-on fun with robots! Registrations are now open for grade 9 - 12's. Work on cool projects, learn new skills, and compete in exciting challenges. Don’t wait—sign up today and start your robotics adventure!</p>
      <button className="rounded-sm px-4 py-2 border-1 border-white text-xl font-[Passion_One]">Contact Us</button>
    </article>
  )
}

export default function Home() {
  const displays = [
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" },
    { image: "https://3560.ca/wp-content/uploads/2024/09/6.png" }
  ];
  
  const [currentDisplay, setCurrentDisplay] = useState(0);

  return (
    <>
      <div className="w-screen lg:px-[145px] px-[45px] py-10">
        <Navbar />
        <section className="relative h-[700px] w-screen mt-[-80px] lg:ml-[-145px] ml-[-45px] overflow-x-clip">
          {displays[currentDisplay].image && <img className="w-full object-center object-cover h-full absolute" src={displays[currentDisplay].image} />}
          <div className="bg-black opacity-85 w-full h-full absolute"></div>
          <div className="px-[45px] lg:px-[145px] h-full flex items-center lg:w-2/3">
            <MainText />
          </div>
          <div className="b-[145px] absolute bottom-5 -translate-y-1/2 left-1/2 -translate-x-1/2 flex gap-3">
            {displays.map((d, i) => (
              <div className={"rounded-full w-2 h-2 " + (i == currentDisplay ? "bg-blue-400" : "bg-blue-200")}></div>
            ))}
          </div>
          <div className="font-[Passion_One] text-blue-950 text-lg absolute bottom-0 translate-y-1/2 -translate-x-1/2 left-1/2">MECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVESMECHAWOLVES</div>
        </section>
      </div>
    </>
  );
}
