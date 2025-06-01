// i  need usestate in this context

import { createContext } from "react";

export interface ISettingsContext {
    theme: 'mocha' | 'latte' | 'macchiato' | 'frappe'
    setTheme: (theme: 'mocha' | 'latte' | 'macchiato' | 'frappe') => void
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



