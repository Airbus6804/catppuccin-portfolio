"use client"

import { IconContext } from "react-icons";
import ModalSetup from "./components/modal-setup";
import { Tooltip } from "react-tooltip";
import { SettingsContext, ISettingsContext } from "./contextes/settings";
import { useState } from "react";
export default function Providers({ children }: { children: React.ReactNode }) {

    const [settings, setSettings] = useState<ISettingsContext>({
        theme: 'mocha',
        setTheme: (theme: 'mocha' | 'latte' | 'macchiato' | 'frappe') => {
            setSettings({ ...settings, theme })
        },
        menu: 'open',
        setMenu: (menu: 'open' | 'closed') => {
            setSettings({ ...settings, menu })
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