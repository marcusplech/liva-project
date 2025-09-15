import Button from "./Button";
import Image from "next/image";

function ContentSection() {
  return (
    <section className="p-6 pb-12 pt-16 bg-white lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-20 lg:h-[750px]">
      {/* Image */}
      <div className="hidden lg:block lg:w-1/2 lg:pr-12 w-[472px] lg:ml-[133px] lg:h-full">
        <Image
          src="https://s3-alpha-sig-oac.figma.com/img/cfbb/8cc1/2efa406ec36503d043b014fce0daa687?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kWKFwXRW7hGKXd9L80mNqbC8BSQRKDG6e8CfSzcZagW6RPqVNGlKAHTnpA4nt7AsTITQjNVOvDJa-v5kXozGCvzqjAIRhHJHHcgovIsOYj3oZChqqn43BFJ7zFMfBjgcm8WXnWD7bRfLgrkVQ7ABsk-UOKMgekRR1Usr0ctesV1GHjmKW0U7QYOeGO5-5GVEjWFg8Xdmr7Y-esJZdwlb0sbYxU2UyBcQmFs7C0CxqpJpHVUdXLv0~l9mRKS0f1Qi0aV~ECx7WECutLBKRHj5sj5j4a4XEBvUI32Dd18IzEUw4bRE8Yn3jIyr7yxPWuYrfY1ml6306Hy03BWkGBQ09w__"
          alt="Família feliz em apartamento"
          width={472}
          height={750}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          priority
          quality={95}
        />
      </div>

      {/* Content */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 lg:text-[48px] lg:mb-6">
          Construímos confiança e{" "}
          <span className="text-teal-500 mb-6">realizamos sonhos!</span>
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-12 lg:text-[18px] lg:leading-relaxed lg:mb-8">
          Na Liva, cada projeto é planejado para facilitar a vida dos moradores,
          trazendo uma sensação máxima de bem-estar. Espaços que abrigam
          histórias de vida e que são desenvolvidos para que você viva momentos
          únicos ao lado da sua família.
        </p>
        <Button variant="white" size="lg">
          SAIBA MAIS
        </Button>
      </div>
    </section>
  );
}

export default ContentSection;
