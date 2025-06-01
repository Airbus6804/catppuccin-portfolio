import FadeIn from "@/components/animations/fadeIn";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import Avatar from "../../../components/avatar";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Alessio Ragonesi | Home",
    description: "Alessio Ragonesi | Full Stack Developer",
}

export default async function MainPage() {
    const t = await getTranslations("HomePage");
    return (
        <div className="flex items-center h-full flex-col-reverse md:flex-row">
            <div className="flex-1 flex md:justify-center justify-start items-center flex-col">
                <FadeIn>
                <div className="flex flex-col gap-2 text-xl">
                    <span className=" ">{t("intro")}</span>
                    <span className="font-bold text-ctp-green">{t("job")}</span>
                    <span className="text-ctp-subtext0 text-sm flex items-center gap-2 hover:text-ctp-blue">
                        <FaMapMarkerAlt /> <span>Viterbo, {t("country")}</span>
                    </span>
                    <a href="tel:+393278251677" className="text-ctp-subtext0 text-sm flex items-center gap-2 hover:text-ctp-blue hover:underline">
                        <FaPhone /> <span>327 825 1677</span>
                    </a>
                    <a href="mailto:aleragonesi04@gmail.com" className="text-ctp-subtext0 text-sm flex items-center gap-2 hover:text-ctp-blue hover:underline">
                        <CiMail /> <span>aleragonesi04@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/alessio-ragonesi/" className="text-ctp-subtext0 text-sm flex items-center gap-2 hover:text-ctp-blue hover:underline">
                        <FaLinkedin /> <span>Linkedin</span>
                    </a>
                    <a href="https://github.com/Airbus6804" className="text-ctp-subtext0 text-sm flex items-center gap-2 hover:text-ctp-blue hover:underline">
                        <FaGithub /> <span>Github</span>
                    </a>
                    <a href="/Curriculum Ragonesi Alessio.pdf" download className="text-ctp-subtext0 text-sm flex items-center gap-2 hover:text-ctp-blue hover:underline">
                        <FaFilePdf /> <span>Curriculum</span>
                    </a>
                    {/* <File name="Curriculum" icon={<FaFilePdf />} link="/Curriculum Ragonesi Alessio.pdf"/> */}
                </div>
                </FadeIn>   

            </div>
            <div className="flex-1 flex md:justify-end items-center">
                <FadeIn className="flex justify-center items-center">    
                    <Avatar />
                </FadeIn>
            </div>
            
        </div>
    )
}