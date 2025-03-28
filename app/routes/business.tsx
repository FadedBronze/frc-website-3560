import type { Route } from "./+types/business";
import { Business } from "~/teams/business";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ Business" },
    { name: "3560", content: "FRC Team 3560's Business Team" },
  ];
}

export default function ProgrammingPage() {
  return <Business />;
}
