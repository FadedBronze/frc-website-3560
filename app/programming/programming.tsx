import Footer from "src/components/Footer";
import computer from "./assets/computer.png";
import aaryan from "./assets/team/aaryan.png";
import jahvon from "./assets/team/jahvon.jpg";
import Navbar from "src/components/Navbar";

export function Programming() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center pt-16 pb-4 font-[Inter] px-36 gap-28">
        <div className="flex flex-row gap-8">
          <div className="flex flex-col gap-4">
            <Bar color="#5398FF" width="20" />
            <h1 className="uppercase text-4xl font-[Passion_One]">
              The Programming Team
            </h1>
            <p className="font-medium">
              We, programming team are responsible for bringing life to the
              robot we make use of a variety of tools and technologies in order
              to efficiently and accurately address challenges our robot has to
              face. Some of the things we do include:
            </p>
            <ul className="list-disc pl-5">
              <li>
                Simulation testing - testing the robot in a virtual environment
              </li>
              <li>
                PID curve tuning - tuning the motor settings in order to
                smoothly start and stop
              </li>
              <li>
                Graphics programming - using linear algebra to translate raw
                data
              </li>
              <li>
                AI vision - using algorithms to assess the position of objects
                and more
              </li>
            </ul>
          </div>
          <img src={computer} alt="" className="rounded-lg" />
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
            <Box
              title="WPILib"
              body="In the programming team we are responsible for bringing life to
              the robot. We use tools like:"
            />
            <Box
              title="Closed Loop Control"
              body="In the programming team we are responsible for bringing life to
              the robot. We use tools like:"
            />
            <Box
              title="Limelight"
              body="In the programming team we are responsible for bringing life to
              the robot. We use tools like:"
            />
            <Box
              title="Pathplanner"
              body="In the programming team we are responsible for bringing life to
              the robot. We use tools like:"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-4xl font-[Passion_One]">Culture</h1>
          <p>
            Beyond writing code, we also collaborates with the Mechanical,
            Electrical, and CAD teams to ensure systems work seamlessly. We
            believe that
          </p>
          <ul className="list-disc pl-5">
            <li>communication</li>
            <li>leadership</li>
            <li>& initiative</li>
          </ul>
          <p>
            are key for meeting programming deadlines and working effective with
            the rest of the team.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-4xl font-[Passion_One]">
            Programming Team
          </h1>
          <div className="flex gap-8 w-full">
            <TeamMember pName="Aaryan Banerjee" src={aaryan} />
            <TeamMember pName="Jahvon Cockburn" src={jahvon} />
            <TeamMember
              pName="Samyat Gautam"
              src="https://picsum.photos/200/300?grayscale"
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function Bar({
  color,
  width,
  custom,
}: {
  color?: string;
  width?: string;
  custom?: string;
}) {
  color = color ? color : "#fff";
  width = width ? `w-${width}` : "flex-grow";
  custom = custom ? custom : "";
  return <div className={`bg-[${color}] ${width} h-[3px] ${custom}`}></div>;
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
