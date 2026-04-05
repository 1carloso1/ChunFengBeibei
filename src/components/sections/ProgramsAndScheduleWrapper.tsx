"use client";

import { useState } from "react";
import ProgramsSection from "./ProgramsSection";
import ScheduleSection from "./ScheduleSection";

export default function ProgramsAndScheduleWrapper() {
  // Aquí vive el estado que comparten ambas secciones
  const [activeLevel, setActiveLevel] = useState("Todos");

  return (
    <>
      <ProgramsSection setActiveLevel={setActiveLevel} />
      <ScheduleSection activeLevel={activeLevel} setActiveLevel={setActiveLevel} />
    </>
  );
}