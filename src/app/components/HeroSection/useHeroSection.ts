"use client";
import { useState } from "react";

export interface Slide {
  src: string;
  alt: string;
}

export const useHeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: Slide[] = [
    {
      src: "https://s3-alpha-sig-oac.figma.com/img/a5cb/1af5/6bb83ea7fbd3c44f31a8b7484b047849?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C1NxROnBXqPaxmUjqh1~k6zpyEIKdF~OzjTNkxhOhGl7KBvAqsOgqfMRRrJACxz1NsdL5chJ7coFq8KSaISp1JSM8C06DqYrc-co-RRFl2ypgYTdzKHVTD9R0ZUCIS4cdkv2Tcf5plopOK~gEnAFGaRs-kH5Amag68RQGREKfJqIiLcGx32kHutbi2HDbFlvpC7QR4yC3xnoFkd7cXW1jV8xbLFKr~HjXZJVXei238-Ov9zSFYJultKjq4BCPBzARsiVkpcHJClw6DtYL-kp14pOzo6lacpwiObLN94N4GccgJZHE6SSfz3U5D23dg7Zc5qI6aIAU7W44ZMrfg2U0Q__",
      alt: "Barra View - Apartamento com 3 dormitórios",
    },
    {
      src: "https://s3-alpha-sig-oac.figma.com/img/0df2/bb03/84a5f5124916db12e6937eb1b840b2f6?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bywsgd~vM-75Vhp-JDgzKUp60HRolQQ7Xp7wXPw8aUBOvlSLfgutIdC5zhHZQbaeDkgW4N2bCgjQGjlhTGp8Z8pGeKF0nPxvB78AcBB7uAGyuQX4RAVrtTBdxFq9HuurnMtybW0-JnDxHCyPY24dXN9QED5IWSvRnjtLQZpc7sQvwisG2dsLkGz~cPXHloMVza7p~iHVnJHrL0nINfMEEM9ruKpcDL4N~faQT3yKoXTurW6gtlurJ6hAGzBUAsz2dd14t0Vs~z9lavhwfoFXTyJHFS9C~FAegVZMO1XkusAkCaQltGja2fUp2qOM5tVoCvgL04oWblSjhQ62NuF5kQ__",
      alt: "Barra View - Vista 2",
    },
    {
      src: "https://s3-alpha-sig-oac.figma.com/img/5875/2fdb/19fe1739f8fc02994272fe14f7c13df8?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nFa1i~WH1pMfVyWD69DOHa94~FXVSTm7riP5hpY3hdD~6P-SWbH1Yg5ThWo1dh82sDCfMNxV02yo1zbYCGkWq76vPIbNmYzGexTCFTZCbMANdretAbBcypGQjcu6dInOw~Rp8C05W1xO5~Hqu~hnBy36FKJdItdn6ICw3FYmGnrl-nhXI9L1leu9yVo0peiJsg5SZQ9I-AFCtW5vv84d4ufqzQR4mUO59nJpwR~XQU8B750uR9hi7eYLRbP~9WXhBgQ0zRmI53slf43aLmEHXFGpqK9vuD7PsMqCKUfi1gcV-Gy4jY3ZTAqxY4zoXN-nsQGWTqQnJaO-DJWEqiGS~Q__",
      alt: "Barra View - Vista 3",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return {
    currentSlide,
    slides,
    nextSlide,
    prevSlide,
  };
};
