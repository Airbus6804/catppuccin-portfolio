"use client"

import { IconContext } from "react-icons";
import ModalSetup from "./components/modal-setup";
import { Tooltip } from "react-tooltip";
import { SettingsContext, ISettingsContext, Theme } from "./contextes/settings";
import { useState } from "react";
export default function Providers({ children }: { children: React.ReactNode }) {


    const [settings, setSettings] = useState<ISettingsContext>({
        theme: localStorage?.getItem('theme') as Theme ?? 'mocha',
        setTheme: (theme: 'mocha' | 'latte' | 'macchiato' | 'frappe') => {
            localStorage.setItem('theme', theme)
            setSettings((prev) => ({ ...prev, theme }))
        },
        menu: 'closed',
        setMenu: (menu: 'open' | 'closed') => {
            console.log("setMenu", menu)
            setSettings((prev) => ({ ...prev, menu }))
        }
    })
    
    return (
        <IconContext.Provider value={{ style: { color: "var(--ctp-text)", verticalAlign: "middle" } }}>
            <ModalSetup />
            <SettingsContext.Provider value={settings}>
                {children}
            </SettingsContext.Provider>
        </IconContext.Provider>
    )
}