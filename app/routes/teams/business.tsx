import amber from "./assets/team/amber.png";
import jenisha from "./assets/team/jenisha.png";
import business from "./assets/repr/business.png";
import { TeamPage } from "./TeamPage";

export function Business() {
  return (
    <TeamPage
      teamName="business"
      teamDescription="The Business team is essential for managing the operational aspects of the robotics team. They handle everything from securing sponsorships and fundraising to managing finances and budgets, ensuring the team has the resources needed to compete effectively. By building relationships with sponsors and the community, they provide financial support and visibility, allowing the team to focus on building and competing with their robot."
      teamList={[
        "Securing sponsorships and fundraising",
        "Managing finances and budgets",
        "Building relationships with sponsors and the community",
        "Coordinating outreach efforts and events",
        "Handling media relations and marketing materials",
        "Documentation and award submissions",
      ]}
      teamImage={business}
      tools={[
        {
          title: "Budgeting Tools",
          body: "Software for managing team finances and budgets.",
        },
        {
          title: "Marketing Platforms",
          body: "Tools for creating promotional materials and managing outreach.",
        },
        {
          title: "CRM Software",
          body: "Used for managing sponsor and community relationships.",
        },
        {
          title: "Presentation Tools",
          body: "Software for creating award submissions and reports.",
        },
      ]}
      cultureDescriptionOne="Beyond managing finances and outreach, the Business team emphasizes"
      cultureList={["organization", "communication", "teamwork"]}
      cultureDescriptionTwo="to ensure the team remains well-funded, recognized, and prepared for long-term success."
      members={[
        { pName: "Amber Brar", src: amber },
        { pName: "Jenisha Patel", src: jenisha },
      ]}
    />
  );
}
