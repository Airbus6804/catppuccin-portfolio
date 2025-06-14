"use client"

import { WebsiteNavigation } from "@/types/websiteNavigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const links: WebsiteNavigation[] = [
    {
        current: "/",
        nextUrl: "/work-experience",
        nextText: 'we',

    },
    {
        current: "/work-experience",
        prevUrl: "/",
        prevText: "home",
        nextUrl: "/skills",
        nextText: "competenze"
    },
    {
        current: "/skills",
        prevUrl: "/work-experience",
        prevText: "we"
    }
]

function NavigationLink({url, text, direction, borderLeft}: {url: string, text: string, direction: "left" | "right", borderLeft: boolean}) {

    const t = useTranslations();

    return (
        <Link href={url} className={`flex-1 py-4 border-t-2 border-ctp-overlay 
        text-ctp-subtext0 text-sm flex items-center gap-2 [&:hover>*]:text-ctp-blue
        hover:border-t-ctp-blue 
        decoration-ctp-blue
        hover:bg-ctp-blue/10
        transition-all duration-300 ease-in-out
        hover:underline ${borderLeft ? "border-l-2 hover:border-l-ctp-blue [*:hover+&]:border-l-ctp-blue" : ""}`}>
            <div  className="flex items-center gap-2 justify-center flex-1">
                {direction === "left" && <FaArrowLeft />}
                <span>{t(text)}</span>
                {direction === "right" && <FaArrowRight />}
            </div>
        </Link>
    )
}

export default function BottomNavigationLink() {

    let pathname = usePathname();
    const {locale} = useParams()

    pathname = pathname.replace(`/${locale}`, "");

    if(pathname.endsWith("/") && pathname !== "/") {
        pathname = pathname.slice(0, -1);
    }
    
    const currentLink = links.find(link => link.current === pathname);

    const makeUrl = (url: string) => {
        return `/${locale}${url}`
    }

    return (
        <div className="flex justify-between">
            {currentLink?.prevUrl && currentLink?.prevText && (
                <NavigationLink borderLeft={false} url={makeUrl(currentLink.prevUrl)} text={currentLink.prevText} direction="left"/>
            )}
            {currentLink?.nextUrl  && currentLink?.nextText && (
                <NavigationLink borderLeft={currentLink.prevUrl ? true : false} url={makeUrl(currentLink.nextUrl)} text={currentLink.nextText} direction="right"/>
            )}
        </div>
    )
}