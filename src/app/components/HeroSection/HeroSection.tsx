"use client";
import { Suspense } from "react";
import Button from "../Button";
import Image from "next/image";
import { useHeroSection } from "./useHeroSection";
import Spinner from "../Spinner";

function HeroSection() {
  const { currentSlide, slides, nextSlide, prevSlide } = useHeroSection();

  return (
    <section className="relative h-90 md:h-[750px] overflow-hidden">
      {slides.map((slide, index) => (
        <Suspense
          key={index}
          fallback={
            index === currentSlide ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                <Spinner size="lg" />
              </div>
            ) : null
          }
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className={`object-cover transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
            priority
            quality={100}
            sizes="100vw"
            unoptimized
          />
        </Suspense>
      ))}
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative z-10 px-6 md:px-0 pt-6 md:pt-0 h-full flex flex-col justify-between">
        <div className="md:absolute md:left-[230px] md:top-[250px]">
          <p className="text-white text-sm md:text-[14px] font-medium mb-4 mt-12">
            PRÉ LANÇAMENTO
          </p>
          <h1 className="text-white mb-4 text-3xl md:text-[80px] font-bold md:font-[700] leading-tight">
            Barra View
          </h1>
          <div className="inline-block bg-custom-green text-black px-3 py-1 rounded text-xs md:text-[18px] mb-12 font-medium">
            Apartamento com 3 dormitórios sendo 1 suíte
          </div>
          <Button
            variant="transparent"
            size="lg"
            className="flex h-11 px-3.5 justify-center items-start gap-3.5 shrink-0 rounded border-2 border-white text-xs md:text-[16px]"
          >
            SAIBA MAIS
          </Button>
        </div>

        {/* Navigation arrows - Mobile */}
        <nav className="flex md:hidden" aria-label="Navegação do carrossel">
          <Button
            variant="arrow"
            className="w-10 h-14 p-0"
            aria-label="Slide anterior"
            onClick={prevSlide}
          >
            <span className="text-lg" aria-hidden="true">
              ←
            </span>
          </Button>
          <Button
            variant="arrow"
            className="w-10 h-14 p-0"
            aria-label="Próximo slide"
            onClick={nextSlide}
          >
            <span className="text-lg" aria-hidden="true">
              →
            </span>
          </Button>
        </nav>
      </div>

      {/* Navigation arrows - Desktop */}
      <Button
        variant="arrow"
        className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-16 p-0 z-20"
        aria-label="Slide anterior"
        onClick={prevSlide}
      >
        <span className="text-2xl" aria-hidden="true">
          ←
        </span>
      </Button>
      <Button
        variant="arrow"
        className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-16 p-0 z-20"
        aria-label="Próximo slide"
        onClick={nextSlide}
      >
        <span className="text-2xl" aria-hidden="true">
          →
        </span>
      </Button>
    </section>
  );
}

export default HeroSection;
