"use client"

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";
import { IoSettings } from "react-icons/io5";
import { CSSProperties } from "react";
import useWindowSize from "@/hooks/useWindowSize";
export default function SettingsTrigger() {
    const { menu, setMenu } = useContext(SettingsContext)
    const dimensions = useWindowSize()
  return <IoSettings className="text-2xl cursor-pointer" style={{ color: dimensions.width > 768 ? 'white' : 'rgb(var(--ctp-text))' } as CSSProperties} onClick={() => setMenu(menu === 'open' ? 'closed' : 'open')} />
}
