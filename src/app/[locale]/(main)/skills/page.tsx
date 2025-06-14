import MainCardLayout from "@/components/layouts/main-card-layout";
import Skills from "@/components/skills";
import { SkillKey, skills } from "@/assets/skillsData";
import { CSSProperties } from "react";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alessio Ragonesi | Skills",
    description: "Alessio Ragonesi | Full Stack Developer",
}

export default async function SkillsPage() {
    const t = await getTranslations();
    return (
        <MainCardLayout title={t("skills.title")}>
            <div className="grid md:grid-cols-5 lg:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-4 p-4 overflow-y-auto lg:h-auto md:h-[var(--main-card-height-md)] h-[var(--main-card-height)]" style={{'--main-card-height': "calc(100svh - 2rem - 3rem - 3rem)", '--main-card-height-md': "calc(50svh - 2rem - 3rem - 3rem)"} as CSSProperties}> 
                {Object.keys(skills).map((skill, index) => (
                    <Skills key={index} skill={skill as SkillKey} />
                ))}
            </div>
        </MainCardLayout>
    )
}
