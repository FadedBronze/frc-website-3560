import Footer from "src/components/Footer";
import Navbar from "src/components/Navbar";
import Box from "src/components/Box";
import windowSizeContext from "src/contexts/windowSizeContext";

export function TeamPage({
  teamName,
  teamDescription,
  teamList,
  teamImage,
  tools,
  cultureDescriptionOne,
  cultureList,
  cultureDescriptionTwo,
  members,
}: {
  teamName: string;
  teamDescription: string;
  teamList: string[];
  teamImage: string;
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
            src={teamImage}
            alt=""
            className="rounded-lg object-center object-cover w-[512px] h-[300px]"
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
          <div className="flex flex-col gap-8 w-full items-center">
            <div className="flex flex-col gap-10 w-fit items-center">
              <h2 className="uppercase text-3xl font-[Passion_One]">Leads</h2>
              <div className="grid grid-cols-2 gap-8 justify-center">
                {members.slice(0, 2).map((member, index) => (
                  <div key={index} className="flex justify-center">
                    <TeamMember pName={member.pName} src={member.src} />
                  </div>
                ))}
              </div>
            </div>
            {members.length > 2 && (
              <div className="flex flex-col gap-10 w-fit items-center mt-10">
                <h2 className="uppercase text-3xl font-[Passion_One]">
                  General Members
                </h2>
                <div className="flex flex-col gap-20">
                  {Array.from({
                    length: Math.ceil((members.length - 2) / 4),
                  }).map((_, groupIndex) => (
                    <div
                      key={groupIndex}
                      className="flex flex-row gap-8 justify-center"
                    >
                      {members
                        .slice(2)
                        .slice(groupIndex * 4, groupIndex * 4 + 4)
                        .map((member, index) => (
                          <div key={index} className="flex justify-center">
                            <TeamMember pName={member.pName} src={member.src} />
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
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

function TeamMember({ pName, src }: { pName: string; src: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-60">
      <div
        style={{
          backgroundImage: `url(${src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="h-90 w-60 rounded-lg"
      ></div>
      <p className="font-[Inter] font-semibold">{pName}</p>
    </div>
  );
}
