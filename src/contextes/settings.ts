"use client"

import { createContext } from "react";

export type Theme = 'mocha' | 'latte' | 'macchiato' | 'frappe'

export interface ISettingsContext {
    theme: Theme
    setTheme: (theme: Theme) => void
    menu: 'open' | 'closed'
    setMenu: (menu: 'open' | 'closed') => void
}

const settings: ISettingsContext = {
    theme: 'mocha',
    setTheme: () => {},
    menu: 'open',
    setMenu: () => {}
}

export const SettingsContext = createContext<ISettingsContext>(settings);



