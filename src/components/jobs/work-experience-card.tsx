import Image from "next/image";
import { StaticImageData } from "next/image";
import FadeIn from "../animations/fadeIn";
import WorkExperienceModalTrigger from "./work-experience-modal-trigger";
import WorkExperienceModal, {
  WorkExperienceModalProps,
} from "./work-experience-modal";
import { getTranslations } from "next-intl/server";
export interface WorkExperienceCardProps extends WorkExperienceModalProps {
  image: StaticImageData;
  title: string;
  short_description: string;
}

export default async function WorkExperienceCard(props: WorkExperienceCardProps) {
  const { image, title, short_description, color } = props;
  const t = await getTranslations();
  return (
    <FadeIn>
      <WorkExperienceModalTrigger
        containerProps={{className: "h-full"}}
        modalChildren={<WorkExperienceModal {...props} />}
      >
        <div
          className="h-full cursor-pointer flex justify-center items-center isolate relative [&:hover_.image-container]:scale-105 [&:hover_.orb]:bg-ctp-blue/10 border rounded-lg group"
          style={{ borderColor: color.alpha(0.1).toString() }}
        >
          <div className="absolute inset-0 bg-ctp-base/60 rounded-lg overflow-hidden -z-10 ">
            <div
              className="orb absolute rounded-full transition-all duration-300 ease-in-out w-full aspect-square blur-2xl top-50 -translate-y-1/4 -translate-x-1/4 group-hover:opacity-10 opacity-5"
              style={{ backgroundColor: color.toString() }}
            />
          </div>

          <div className="flex flex-col justify-center items-center rounded-lg p-4 gap-4">
            <div className="flex justify-center items-center overflow-hidden image-container transition-all duration-300 ease-in-out">
              <Image
                src={image}
                alt={title}
                className="object-cover"
                height={144}
                width={144}
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <h2 className="text-lg font-bold">{title}</h2>
              <p className="text-sm text-ctp-subtext0 text-center">
                {t(short_description)}
              </p>
            </div>
          </div>
        </div>
      </WorkExperienceModalTrigger>
    </FadeIn>
  );
}
