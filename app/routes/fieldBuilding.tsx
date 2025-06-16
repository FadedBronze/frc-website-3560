import type { Route } from "./+types/fieldBuilding";
import { FieldBuilding } from "~/routes/teams/fieldBuilding";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Teams ~ Field Building" },
    { name: "3560", content: "FRC Team 3560's FieldBuilding Team" },
  ];
}

export default function FieldBuildingPage() {
  return <FieldBuilding />;
}
