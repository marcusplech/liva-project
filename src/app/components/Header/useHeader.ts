"use client";
import { useState, useEffect } from "react";

export const useHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Bloquear scroll quando o menu estiver aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup quando o componente for desmontado
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    toggleMenu,
    closeMenu,
  };
};
