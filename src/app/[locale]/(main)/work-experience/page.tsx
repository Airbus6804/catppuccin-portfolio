import FadeIn from "@/components/animations/fadeIn";
import WorkExperienceCard from "@/components/jobs/work-experience-card";
import MainCardLayout from "@/components/layouts/main-card-layout";
import { workExperience } from "@/assets/workExperienceData";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 p-4">
        {workExperience.map((work) => (
          <WorkExperienceCard key={work.title} {...work} />
        ))}
      </div>
    </MainCardLayout>
  );
}
