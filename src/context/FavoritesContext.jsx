import { createContext, useContext, useEffect, useState, useCallback } from "react";

const FavoritesContext = createContext(null);
const KEY = "megaia.favorites.v1";

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(favorites));
    } catch {
      /* storage unavailable — ignore */
    }
  }, [favorites]);

  const toggle = useCallback((id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }, []);

  const isFav = useCallback((id) => favorites.includes(id), [favorites]);

  return (
    <FavoritesContext.Provider value={{ favorites, toggle, isFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
}
