import { createContext, useContext, useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

interface ThemeContextType {
    mode: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) throw new Error("useThemeContext must be used within ThemeProvider");
    return context;
};

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const toggleTheme = () => setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

    // Define theme styles for Light and Dark Mode
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    background: {
                        default: mode === "dark" ? "#121212" : "#f5f5f5",
                        paper: mode === "dark" ? "#1e1e1e" : "#ffffff",
                    },
                    text: {
                        primary: mode === "dark" ? "#ffffff" : "#000000",
                    },
                },
            }),
        [mode]
    );

    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
