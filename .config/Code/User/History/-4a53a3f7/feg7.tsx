import { useState, useEffect, createContext, useContext, ReactNode } from "react";

const ThemeContext = createContext({} as any);

export const useTheme = () => {
  return useContext(ThemeContext);
};

type ProvideThemeProps = {
    children: ReactNode;
}

export function ProvideTheme({children}: ProvideThemeProps) {
    const [theme, setTheme] = useState<string>(`light`);
    
    useEffect(() => {
      console.log(localStorage.getItem("theme"))
        if (localStorage.getItem("theme")) {
            setTheme(localStorage.getItem("theme"));
        }
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          setTheme("dark");
        } else {
          setTheme("light");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const setLightTheme = () => {
        setTheme("light");
    }

    const setDarkTheme = () => {
        setTheme("dark");
    }
    
    return (
      <ThemeContext.Provider value={{ setLightTheme, setDarkTheme, theme }}>
        <div className={theme}>{children}</div>
      </ThemeContext.Provider>
    );
}