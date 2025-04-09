import React from "react";
import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import dhadde from "./assets/exec/dhadde.png";
import harris from "./assets/exec/harris.png";
import harsh from "./assets/exec/harsh.png";
import kirsch from "./assets/exec/kirsch.png";

import aaryan from "./assets/team/aaryan.png";
import amber from "./assets/team/amber.png";
import amer from "./assets/team/amer.png";
import blake from "./assets/team/blake.png";
import devesh from "./assets/team/devesh.png";
import ishan from "./assets/team/ishan.jpg";
import samyat from "./assets/team/samyat.jpg";
import saket from "./assets/team/saket.png";
import ravi from "./assets/team/ravi.png";
import savyasaachi from "./assets/team/savyasaachi.png";
import jenisha from "./assets/team/jenisha.png";

import { TeamMember } from "./TeamPage";

export function Executive() {
  let members = [
    { pName: "Harsh Patel", src: harsh, title: "Team 3560 Captain" },
    { pName: "Mizanne Harris", src: harris, title: "Lead Coach" },
    { pName: "Kuljit Dhadde", src: dhadde, title: "Lead Coach" },
    { pName: "Elizabeth Kirsch", src: kirsch, title: "Teacher Supervisor" },
    { pName: "Devesh Madnani", src: devesh, title: "CAD Head" },
    {
      pName: "Savyasaachi Shimoga-Yogesh",
      src: savyasaachi,
      title: "Mechanical Head",
    },
    { pName: "Blake Davison", src: blake, title: "Electrical Head" },
    { pName: "Aaryan Banerjee", src: aaryan, title: "Programming Head" },
    { pName: "Amber Brar", src: amber, title: "Business Head" },
    { pName: "Amer Sandhu", src: amer, title: "CAD Co-Lead" },
    { pName: "Saket Cherooli", src: saket, title: "Mechanical Co-Lead" },
    { pName: "Ravi Patel", src: ravi, title: "Electrical Co-Lead" },
    { pName: "Samyat Gautam", src: samyat, title: "Programming Co-Lead" },
    { pName: "Jenisha Patel", src: jenisha, title: "Business Co-Lead" },
    { pName: "Ishan Kenth", src: ishan, title: "3560 Mascot" },
  ];

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-10 lg:px-36 gap-16 md:gap-28 mt-10">
        <div className="flex flex-col gap-8 w-full items-center">
          {members.length > 2 && (
            <div className="flex flex-col gap-10 w-fit items-center mt-10">
              <div className="flex flex-col items-center justify-center">
                <h2 className="uppercase text-3xl font-[Passion_One]">
                  Executive Team
                </h2>
                <h3 className="uppercase text-lg font-[Passion_One]">
                  Teachers, Mentors, Students
                </h3>
              </div>

              <div className="flex flex-col gap-20">
                {Array.from(
                  { length: Math.ceil(members.length / 5) },
                  (_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="flex flex-row gap-8 justify-center"
                    >
                      {members
                        .slice(groupIndex * 5, groupIndex * 5 + 5)
                        .map((member, index) => (
                          <div key={index} className="flex justify-center">
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
