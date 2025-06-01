"use client"

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";
import { IoSettings } from "react-icons/io5";

export default function SettingsTrigger() {
    const { menu, setMenu } = useContext(SettingsContext)
  return <IoSettings className="text-2xl cursor-pointer" style={{ color: 'white' }} onClick={() => setMenu(menu === 'open' ? 'closed' : 'open')} />
}
