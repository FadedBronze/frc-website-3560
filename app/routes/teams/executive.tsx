import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import harris from "./assets/exec/mrs.harris.png";
import kirsch from "./assets/exec/ms.kirsh.png";

import jahvon from "./assets/team/jahvon.jpg";
import amer from "./assets/team/amer.png";
import devesh from "./assets/team/devesh.png";
import sudit from "./assets/team/sudit.png";
import samyat from "./assets/team/samyat.jpg";
import saket from "./assets/team/saket.png";
import ravi from "./assets/team/ravi.png";
import savyasaachi from "./assets/team/savyasaachi.png";
import navin from "./assets/team/navin.png";
import krisha from "./assets/team/krisha.png";
import aditya from "./assets/team/additya.png";

import jenisha from "./assets/team/jenisha.png";
import surina from "./assets/team/_DSC5923.png";

import { TeamMember } from "./TeamPage";

export function Executive() {
  let members = [
    {
      pName: "Savyasaachi Shimoga-Yogesh", src: savyasaachi, title: "Team 3560 Captain",
    },
    { pName: "Mizanne Harris", src: harris, title: "Lead Coach" },
    { pName: "Elizabeth Kirsch", src: kirsch, title: "Teacher Supervisor" },

    { pName: "Saket Cherooli", src: saket, title: "Mechanical Co-Lead & Safety Officer" }, 

    { pName: "Ravi Patel", src: ravi, title: "Electrical Co-Lead" },

    { pName: "Navin Bedi", src: navin, title: "Field Build Co-Lead" },
    { pName: "Krisha ", src: krisha, title: "Field Build Co-Lead" },

    { pName: "Devesh Madnani", src: devesh, title: "CAD Co-Lead" },
    { pName: "Amer Sandhu", src: amer, title: "CAD Co-Lead" },

    { pName: "Jahvon Cockburn", src: jahvon, title: "Programming Co-Lead" },
    { pName: "Samyat Gautam", src: samyat, title: "Programming Co-Lead" },

    { pName: "Aditya", src: aditya, title: "Business Co-Lead" },

    { pName: "Sudit", src: sudit, title: "Business Co-Lead" },

    { pName: "Jenisha", src: jenisha, title: "Business Media" },

    { pName: "Serina", src: surina, title: "Business Media" },
  ];

  return (
    <>
  <Navbar />
  <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-6 lg:px-36 gap-16 md:gap-28 mt-10 mb-16">
    <div className="flex flex-col gap-8 w-full items-center">
      {members.length > 2 && (
        <div className="flex flex-col gap-10 w-full items-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <h2 className="uppercase text-3xl font-[Passion_One] text-center">
              Executive Team
            </h2>
            <h3 className="uppercase text-lg font-[Passion_One] text-center">
              Teachers, Mentors, Students
            </h3>
          </div>

          <div className="flex flex-col gap-10 w-full">
            {Array.from(
              { length: Math.ceil(members.length / 5) },
              (_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="flex flex-col md:flex-row gap-8 justify-center items-center"
                >
                  {members
                    .slice(groupIndex * 5, groupIndex * 5 + 5)
                    .map((member, index) => (
                      <div key={index} className="flex justify-center w-full md:w-auto">
                        <TeamMember
                          pName={member.pName}
                          src={member.src}
                          title={member.title}
                        />
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  </main>
  <Footer />
</>
  );
}

export default Executive;
