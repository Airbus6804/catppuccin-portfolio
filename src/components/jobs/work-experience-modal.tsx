import { SkillKey } from "@/assets/skillsData";
import Color from "color";
import { getTranslations } from "next-intl/server";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import MainCardLayout from "../layouts/main-card-layout";
import Skills from "../skills";
export interface WorkExperienceModalProps {
  title: string;
  image: StaticImageData;
  description: string;
  url: string;
  startDate: Date;
  endDate?: Date;
  list?: Array<{ text: string; emoji: string }>;
  color: ReturnType<typeof Color>;
  skills?: SkillKey[];
}

export default async function WorkExperienceModal({
  title,
  image,
  url,
  startDate,
  endDate,
  list,
  color,
  skills,
}: WorkExperienceModalProps) {
  const t = await getTranslations();
  return (
    <div className="max-w-2xl p-2 overflow-hidden">
      <MainCardLayout
        title={
          <span className="inline-flex items-center gap-2">
            <Image src={image} alt={title} width={24} height={24} />
            <Link
              href={url}
              target="_blank"
              className="text-ctp-text font-bold transition-all duration-300 ease-in-out hover:text-[var(--hover-color)]"
              style={
                { "--hover-color": color.toString() } as React.CSSProperties
              }
            >
              {title}
            </Link>
          </span>
        }
      >
        <div className="flex flex-col gap-4 justify-center">
          <p className=" text-ctp-text font-bold">
            {startDate.toLocaleDateString()} -{" "}
            {endDate?.toLocaleDateString() ?? t("jobs.now")}
          </p>
          <div className="flex flex-col gap-2">
            <p className=" text-ctp-text font-bold">{t("jobs.done")}</p>
            <ul className="flex flex-col">
              {list?.map((item, index) => (
                <li
                  key={index}
                  className=" text-ctp-text text-sm flex gap-2 items-end justify-start"
                >
                  <div
                    className={`w-[6px] h-[6px]  rounded-full self-center`}
                    style={{ backgroundColor: color.toString() }}
                  />
                  <span>
                    <span className="underline">{t(item.text)}</span>
                    <span>{item.emoji} </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {skills && (
            <div className="flex flex-col gap-2">
              <p className=" text-ctp-text font-bold">{t("jobs.used")}</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <div key={skill} className="h-14 w-14">
                    <Skills skill={skill} fontSize="2rem" />
                  </div>
                ))}
              </div>
            </div>
          )}
          {/* <p className=" text-ctp-text">{description}</p> */}
        </div>
      </MainCardLayout>
    </div>
  );
}
