import { useContext } from "react"
import { ThemeProviderContext } from "../constants/ThemeProvider"

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
