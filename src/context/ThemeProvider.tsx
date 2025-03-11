import { createContext, useContext, useState, ReactNode } from 'react';

// Définition du type du contexte
type ThemeContextType = {
  theme: "light" | "dark";
  updateTheme: (newTheme: "light" | "dark") => void;
  toggleTheme: () => void;
};

// Création du contexte avec une valeur par défaut de `undefined`
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Hook personnalisé pour utiliser le contexte
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context; // Ici, on est sûr que `context` ne sera jamais `undefined`
};

// Provider du contexte
type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else if (theme === 'light') {
      setTheme('dark')
    }
  }
  return (
    <ThemeContext.Provider value={{ theme: theme, updateTheme: setTheme, toggleTheme: toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};