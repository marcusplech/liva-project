"use client";
import Button from "../Button";
import PropertyCard from "../PropertyCard";
import Select from "../Select";
import { FilterIcon } from "../icons";
import { useAboutSection } from "./useAboutSection";
import Image from "next/image";

function AboutSection() {
  const {
    displayedEmpreendimentos,
    shouldShowLoadMoreButton,
    handleLoadMore,
    isFilterActive,
    toggleFilter,
  } = useAboutSection();

  return (
    <section className="p-6 bg-white lg:px-[135px] lg:py-16 lg:h-[1400px]">
      <div className="mb-6 lg:mb-12 lg:flex lg:justify-between lg:items-end">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:text-[48px] lg:mb-0">
          Confira todos os
          <br />
          <span className="text-teal-500">empreendimentos da Liva</span>
        </h2>
        <div className="hidden lg:block">
          <Button
            onClick={toggleFilter}
            variant="filter"
            isActive={isFilterActive}
            icon={!isFilterActive ? <FilterIcon color="white" /> : undefined}
          />
        </div>
      </div>

      {/* Filtros Desktop */}
      {isFilterActive && (
        <div className="hidden lg:flex lg:gap-[30px] lg:mb-12">
          <Select placeholder="Estágio do empreendimento" />
          <Select placeholder="Localização" />
          <Select placeholder="Tipo de imóvel" />
        </div>
      )}

      {/* Layout Mobile - Filtros e Cards */}
      <div className="lg:hidden">
        {/* Filtros */}
        <div className="space-y-3 mb-6">
          <Button
            variant="outline"
            borderColor="black"
            textColor="black"
            className="w-full p-3 text-left text-sm justify-center"
          >
            ✕ FILTROS
          </Button>

          <Select placeholder="Estágio do empreendimento" />

          <Select placeholder="Localização" />

          <Select placeholder="Tipo de imóvel" />
        </div>

        {/* Cards dos Empreendimentos */}
        <div className="space-y-4">
          {displayedEmpreendimentos.map((empreendimento, index) => (
            <PropertyCard
              key={index}
              title={empreendimento.title}
              status={empreendimento.status}
              imageUrl={empreendimento.imageUrl}
            />
          ))}
        </div>
      </div>

      {/* Layout Desktop - Grid de Imagens */}
      <div className="hidden lg:block">
        {/* Grid de Empreendimentos - 4x4 */}
        <div className="grid grid-cols-4 grid-rows-3 gap-[30px] w-full max-w-[1180px] mx-auto">
          {/* Primeira imagem - ocupa 2x2 */}
          {displayedEmpreendimentos[0] && (
            <div className="col-span-2 row-span-2 relative rounded-lg overflow-hidden group cursor-pointer">
              <Image
                src={displayedEmpreendimentos[0].imageUrl}
                alt={displayedEmpreendimentos[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 570px"
                unoptimized
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-6"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 44.41%, rgba(0, 0, 0, 0.50) 100%)",
                }}
              >
                <div className="bg-white px-3 py-1 rounded text-xs font-semibold mb-2 w-fit text-black">
                  {displayedEmpreendimentos[0].status}
                </div>
                <h3 className="text-white font-bold text-lg">
                  {displayedEmpreendimentos[0].title}
                </h3>
              </div>
            </div>
          )}

          {/* Restante das imagens - preenchem o grid 4x4 */}
          {displayedEmpreendimentos.slice(1).map((empreendimento, index) => (
            <div
              key={index + 1}
              className="relative rounded-lg overflow-hidden group cursor-pointer aspect-square"
            >
              <Image
                src={empreendimento.imageUrl}
                alt={empreendimento.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 270px"
              />
              <div
                className="absolute inset-0 flex flex-col justify-end p-4"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 44.41%, rgba(0, 0, 0, 0.50) 100%)",
                }}
              >
                <h3 className="text-white font-bold text-sm">
                  {empreendimento.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botão Carregar Mais */}
      <div
        className={`mt-6 flex justify-center lg:mt-20 ${shouldShowLoadMoreButton ? "" : "hidden lg:flex"}`}
      >
        <Button
          variant="outline"
          size="lg"
          className="px-8 border-2 border-gray-400 text-gray-400 bg-gray-100"
          borderColor="gray-400"
          textColor="gray-400"
          onClick={handleLoadMore}
        >
          CARREGAR MAIS
        </Button>
      </div>
    </section>
  );
}

export default AboutSection;
