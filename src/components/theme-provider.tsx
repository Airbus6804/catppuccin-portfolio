"use client"
import { SettingsContext } from "@/contextes/settings"
import { useContext } from "react"


export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const { theme } = useContext(SettingsContext);

    return (
        <div className={theme}>
            {children}
        </div>
    )
}
