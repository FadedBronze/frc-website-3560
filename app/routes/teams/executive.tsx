import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import dhadde from "./assets/exec/dhadde.png";
import harris from "./assets/exec/harris.png";
import kirsch from "./assets/exec/kirsch.png";

import jahvon from "./assets/team/jahvon.jpg";
import amer from "./assets/team/amer.png";
import devesh from "./assets/team/devesh.png";
import ishan from "./assets/team/ishan.jpg";
import samyat from "./assets/team/samyat.jpg";
import saket from "./assets/team/saket.png";
import ravi from "./assets/team/ravi.png";
import savyasaachi from "./assets/team/savyasaachi.png";
import harrisStudent from "./assets/team/harris.png";
import navin from "./assets/team/navin.png";
import krisha from "./assets/team/krisha.png";
import aditya from "./assets/team/aditya.png";

import { TeamMember } from "./TeamPage";

export function Executive() {
  let members = [
    {
      pName: "Savyasaachi Shimoga-Yogesh", src: savyasaachi, title: "Team 3560 Captain",
    },
    { pName: "Mizanne Harris", src: harris, title: "Lead Coach" },
    { pName: "Kuljit Dhadde", src: dhadde, title: "Lead Coach" },
    { pName: "Elizabeth Kirsch", src: kirsch, title: "Teacher Supervisor" },

    { pName: "Saket Cherooli", src: saket, title: "Mechanical Co-Lead" }, 

    { pName: "Ravi Patel", src: ravi, title: "Electrical Co-Lead" },

    { pName: "Navin Bedi", src: navin, title: "Field Build Co-Lead" },
    { pName: "Krisha ", src: krisha, title: "Field Build Co-Lead" },

    { pName: "Devesh Madnani", src: devesh, title: "CAD Co-Lead" },
    { pName: "Amer Sandhu", src: amer, title: "CAD Co-Lead" },

    { pName: "Jahvon Banerjee", src: jahvon, title: "Programming Co-Lead" },
    { pName: "Samyat Gautam", src: samyat, title: "Programming Co-Lead" },

    { pName: "Harris", src: harrisStudent, title: "Business Co-Lead" },
    { pName: "Aditya", src: aditya, title: "Business Co-Lead" },

    { pName: "Ishan Kenth", src: ishan, title: "3560 Mascot" },
  ];

  return (
    <>
  <Navbar />
  <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-6 lg:px-36 gap-16 md:gap-28 mt-10">
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
