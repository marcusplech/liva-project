"use client";
import { useState, useEffect } from "react";
import empreendimentosData from "../../data/empreendimentos.json";

export const useAboutSection = () => {
  const [showAll, setShowAll] = useState(false);
  const [isFilterActive, setIsFilterActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener("resize", checkIsDesktop);

    return () => window.removeEventListener("resize", checkIsDesktop);
  }, []);

  const displayedEmpreendimentos =
    showAll || isDesktop
      ? empreendimentosData
      : empreendimentosData.slice(0, 4);
  const hasMoreItems = empreendimentosData.length > 4;
  const shouldShowLoadMoreButton = !showAll && hasMoreItems && !isDesktop;

  const handleLoadMore = () => {
    setShowAll(true);
  };

  const toggleFilter = () => {
    setIsFilterActive(!isFilterActive);
  };

  return {
    displayedEmpreendimentos,
    shouldShowLoadMoreButton,
    handleLoadMore,
    isFilterActive,
    toggleFilter,
  };
};
