import Image from "next/image";
import avatar from "@/assets/avatar.jpg";

export default function Avatar() {
    return (
        <div className="w-3/4 aspect-square rounded-full bg-ctp-base outline-2 outline-ctp-overlay overflow-hidden animation-scale">
            <Image src={avatar} alt="avatar" className="w-full h-full object-cover md:max-w-[25rem] max-w-[30rem]" />
        </div>
    )
}