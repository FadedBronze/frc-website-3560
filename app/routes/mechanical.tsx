import type { Route } from "./+types/mechanical";
import { Mechanical } from "~/teams/mechanical";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ Mechanical" },
    { name: "3560", content: "FRC Team 3560's Mechanical Team" },
  ];
}

export default function MechanicalPage() {
  return <Mechanical />;
}
