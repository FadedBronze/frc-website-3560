import type { Route } from "./+types/programming";
import { Programming } from "~/routes/teams/programming";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ Programming" },
    { name: "3560", content: "FRC Team 3560's Programming Team" },
  ];
}

export default function ProgrammingPage() {
  return <Programming />;
}
