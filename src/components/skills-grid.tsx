"use client";

import { SkillKey } from "@/assets/skillsData";
import Skills from "@/components/skills";

interface SkillsGridProps {
    skills: SkillKey[];
}

export default function SkillsGrid({ skills }: SkillsGridProps) {
    return (
        <>
            {skills.map((skill, index) => (
                <Skills key={index} skill={skill} />
            ))}
        </>
    );
} 