"use client";

import { useState } from "react";
import ProgramsSection from "./ProgramsSection";
import ScheduleSection from "./ScheduleSection";
import { Course } from "@/types";

interface WrapperProps {
  initialCourses: Course[];
}

export default function ProgramsAndScheduleWrapper({ initialCourses }: WrapperProps) {
  // Aquí vive el estado que comparten ambas secciones
  const [activeLevel, setActiveLevel] = useState("Todos");

  return (
    <>
      <ProgramsSection setActiveLevel={setActiveLevel} />
      <ScheduleSection 
        activeLevel={activeLevel} 
        setActiveLevel={setActiveLevel} 
        initialCourses={initialCourses} 
      />
    </>
  );
}