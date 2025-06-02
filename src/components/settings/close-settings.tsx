"use client"

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";
import { LiaTimesSolid } from "react-icons/lia";

export default function CloseSettings() {
    const { setMenu } = useContext(SettingsContext);

    return (
        <LiaTimesSolid className="text-2xl cursor-pointer" style={{color: "rgba(var(--ctp-text))"}} onClick={() => setMenu("closed")} />
    )
}

