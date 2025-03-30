import aaryan from "./assets/team/aaryan.png";
import jahvon from "./assets/team/jahvon.jpg";
import samyat from "./assets/team/samyat.jpg";
import computer from "./assets/repr/programming.png";
import { TeamPage } from "./TeamPage";

export function Programming() {
  return (
    <TeamPage
      teamName="programming"
      teamDescription="We, programming team are responsible for bringing life to the
              robot we make use of a variety of tools and technologies in order
              to efficiently and accurately address challenges our robot has to
              face. Some of the things we do include:"
      teamList={[
        "Simulation testing - testing the robot in a virtual environment",
        "PID curve tuning - tuning the motor settings in order to smoothly start and stop",
        "Graphics programming - using linear algebra to translate raw data",
        "AI vision - using algorithms to assess the position of objects and more",
      ]}
      teamImage={computer}
      tools={[
        {
          title: "WPILib",
          body: "A library of tools for programming FRC robots.",
        },
        {
          title: "Closed Loop Control",
          body: "Techniques for precise motor control.",
        },
        { title: "Limelight", body: "Vision processing for object detection." },
        {
          title: "Pathplanner",
          body: "Tool for creating autonomous robot paths.",
        },
      ]}
      cultureDescriptionOne="Beyond writing code, we also collaborate with the Mechanical, Electrical, and CAD teams to ensure systems work seamlessly. We believe that"
      cultureList={["communication", "leadership", "initiative"]}
      cultureDescriptionTwo="are key for meeting programming deadlines and working effectively with the rest of the team."
      members={[
        { pName: "Aaryan Banerjee", src: aaryan },
        { pName: "Jahvon Cockburn", src: jahvon },
        { pName: "Samyat Gautam", src: samyat },
      ]}
    />
  );
}
