"use client"

import { createContext } from "react";

export type Theme = 'mocha' | 'latte' | 'macchiato' | 'frappe'

export interface ISettingsContext {
    theme: Theme
    setTheme: (theme: Theme) => void
    menu: 'open' | 'closed'
    setMenu: (menu: 'open' | 'closed') => void
    bg: number
    availableBg: Array<{id: number, import: () => Promise<any>}>
    setBg: (bg: number) => void
    bgImage: any
}

const settings: ISettingsContext = {
    theme: 'mocha',
    setTheme: () => {},
    menu: 'closed',
    setMenu: () => {},
    bg: 1,
    setBg: () => {},
    availableBg: [],
    bgImage: null,
}

export const SettingsContext = createContext<ISettingsContext>(settings);



