import FadeIn from "@/components/animations/fadeIn";
import WorkExperienceCard from "@/components/jobs/work-experience-card";
import MainCardLayout from "@/components/layouts/main-card-layout";
import { workExperience } from "@/assets/workExperienceData";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { CSSProperties } from "react";

export const metadata: Metadata = {
    title: "Alessio Ragonesi | Work Experience",
    description: "Alessio Ragonesi | Full Stack Developer",
}

export default async function WorkExperience() {
  const t = await getTranslations();
  return (
    <MainCardLayout
      title={
        <FadeIn direction="bottom">
          <div>
            <h1>{t("jobs.title")}</h1>
          </div>
        </FadeIn>
      }
    >
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4 overflow-y-auto md:h-auto h-[var(--main-card-height)]" style={{'--main-card-height': "calc(100svh - 2rem - 3rem - 3rem)"} as CSSProperties}>
        {workExperience.map((work) => (
          <WorkExperienceCard key={work.title} {...work} />
        ))}
      </div>
    </MainCardLayout>
  );
}
