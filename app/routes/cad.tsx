import type { Route } from "./+types/cad";
import { CAD } from "~/routes/teams/cad";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ CAD" },
    { name: "3560", content: "FRC Team 3560's CAD Team" },
  ];
}

export default function CadPage() {
  return <CAD />;
}
