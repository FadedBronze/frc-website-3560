import type { Route } from "./+types/executive";
import { Executive } from "~/routes/teams/executive";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ Executive" },
    { name: "3560", content: "FRC Team 3560's Executive Team" },
  ];
}

export default function ExecutivePage() {
  return <Executive />;
}
