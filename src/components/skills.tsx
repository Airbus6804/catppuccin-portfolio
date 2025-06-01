"use client";

import { SkillKey, skills } from "@/assets/skillsData";
import React, { useState } from "react";
import FadeIn from "./animations/fadeIn";
import { Tooltip } from "react-tooltip";
import Color from "color";
export interface SkillProps {
  skill: SkillKey;
  fontSize?: string;
}

export default function Skills({ skill, fontSize = "3rem" }: SkillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <FadeIn>
      <div
        data-tooltip-id={`skills-tooltip-${skill}`}
        data-tooltip-content={skills[skill].name}
        className="w-full aspect-square rounded-lg bg-ctp-base border relative isolate overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
        style={{ borderColor: skills[skill].color.alpha(0.2).toString() }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute inset-0 rounded-lg overflow-hidden -z-10">
          <div
            className="orb absolute rounded-full transition-all duration-300 ease-in-out w-full aspect-square blur-2xl  -translate-y-1/4 -translate-x-1/4"
            style={{
              backgroundColor: skills[skill].color
                .alpha(isHovered ? 0.2 : 0.1)
                .toString(),
            }}
          />
        </div>

        <div className="w-full h-full flex items-center justify-center">
          {React.createElement(skills[skill].icon, {
            style: { color: skills[skill].color.toString() },
            fontSize,
          })}
        </div>
      </div>
      <Tooltip
        id={`skills-tooltip-${skill}`}
        style={{ backgroundColor: skills[skill].color.alpha(0.15).toString() }}
      />
    </FadeIn>
  );
}
