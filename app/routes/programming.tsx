import type { Route } from "./+types/programming";
import { Programming } from "~/programming/programming";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ProgrammingPage() {
  return <Programming />;
}
