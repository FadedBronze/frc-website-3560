import Footer from "src/components/Footer";
import computer from "./assets/computer.png";
import aaryan from "./assets/team/aaryan.png";
import jahvon from "./assets/team/jahvon.jpg";
import Navbar from "src/components/Navbar";

export function TeamPage({
  teamName,
  teamDescription,
  teamList,
  tools,
  cultureDescriptionOne,
  cultureList,
  cultureDescriptionTwo,
  members,
}: {
  teamName: string;
  teamDescription: string;
  teamList: string[];
  tools: { title: string; body: string }[];
  cultureDescriptionOne: string;
  cultureList: string[];
  cultureDescriptionTwo: string;
  members: { pName: string; src: string }[];
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-36 gap-28 mt-10">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4">
            <Bar color="#5398FF" width="dk" custom="w-20" />
            <h1 className="uppercase text-4xl font-[Passion_One]">
              {teamName}
            </h1>
            <p className="font-medium">{teamDescription}</p>
            <ul className="list-disc pl-5">
              {teamList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <img
            src={computer}
            alt=""
            className="rounded-lg object-center object-cover"
          />
        </div>
        <div className="flex flex-col w-full gap-8">
          <div className="flex justify-between items-center w-full gap-12">
            <Bar color="#D9D9D9" />
            <h1 className="uppercase text-3xl font-[Passion_One]">
              Tools, Concepts, and Technology
            </h1>
            <Bar color="#D9D9D9" />
          </div>
          <div className="flex flex-grow gap-8">
            {tools.map((tool, index) => (
              <Box key={index} title={tool.title} body={tool.body} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-4xl font-[Passion_One]">Culture</h1>
          <p>{cultureDescriptionOne}</p>
          <ul className="list-disc pl-5">
            {cultureList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>{cultureDescriptionTwo}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-4xl font-[Passion_One]">
            {teamName.charAt(0).toUpperCase() + teamName.slice(1)} Team
          </h1>
          <div className="flex gap-8 w-full">
            {members.map((member, index) => (
              <TeamMember key={index} pName={member.pName} src={member.src} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Bar({
  color = "#fff",
  width = "flex-grow",
  custom = "",
}: {
  color?: string;
  width?: string;
  custom?: string;
}) {
  return (
    <div
      className={`${width} h-[3px] ${custom}`}
      style={{ backgroundColor: color }}
    ></div>
  );
}

function Box({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#5398FF] min-h-40 h-auto flex-grow text-[#00041A] rounded-lg p-7 justify-center gap-1 flex flex-col">
      <h1 className="uppercase text-2xl font-[Passion_One]">{title}</h1>
      <p>{body}</p>
    </div>
  );
}

function TeamMember({ pName, src }: { pName: string; src: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-grow max-w-64">
      <img
        src={src}
        alt=""
        className="h-80 rounded-lg object-center object-cover w-full"
      />
      <p className="font-[Passion_One] text-xl">{pName}</p>
    </div>
  );
}
