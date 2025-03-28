import Footer from "src/components/Footer";
import computer from "./assets/computer.png";
import Navbar from "src/components/Navbar";
import windowSizeContext from "src/contexts/windowSizeContext";

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
  const { width } = windowSizeContext();

  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-10 lg:px-36 gap-16 md:gap-28 mt-10">
        <div className="flex max-xl:flex-col gap-8">
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
            {width > 800 && <Bar color="#D9D9D9" />}
            <h1 className="uppercase text-3xl font-[Passion_One]">
              Tools, Concepts, and Technology
            </h1>
            {width > 800 && <Bar color="#D9D9D9" />}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 w-full">
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
    <div className="bg-wolf-blue min-h-32 md:min-h-40 h-auto flex-grow text-wolf-black rounded-lg p-4 md:p-7 justify-center gap-1 flex flex-col hover:-translate-y-1 transition-all duration-300">
      <h1 className="uppercase text-2xl font-[Passion_One]">{title}</h1>
      <p>{body}</p>
    </div>
  );
}

function TeamMember({ pName, src }: { pName: string; src: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 flex-grow">
      <img
        src={src}
        alt=""
        className="h-full rounded-lg object-center object-cover w-full"
      />
      <p className="font-[Passion_One] text-xl">{pName}</p>
    </div>
  );
}
