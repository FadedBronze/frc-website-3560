import type { Route } from "./+types/electrical";
import { Electrical } from "~/teams/electrical";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ Electrical" },
    { name: "3560", content: "FRC Team 3560's Electrical Team" },
  ];
}

export default function ElectricalPage() {
  return <Electrical />;
}
