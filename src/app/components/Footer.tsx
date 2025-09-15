import Image from "next/image";
import { Suspense } from "react";
import Button from "./Button";
import { FacebookIcon, InstagramIcon, WhatsAppIcon, FebaIcon } from "./icons";
import Spinner from "./Spinner";

function Footer() {
  return (
    <footer className="bg-black text-white p-6 lg:h-[340px] lg:p-0">
      {/* Layout Mobile */}
      <div className="max-w-md mx-auto lg:hidden">
        {/* Logo e Descrição */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Suspense
              fallback={
                <div className="h-8 w-20 flex items-center justify-center">
                  <Spinner size="sm" className="text-white" />
                </div>
              }
            >
              <Image
                src="https://s3-alpha-sig-oac.figma.com/img/ae03/341f/f33786396d8554342609f57893633a23?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HwvQkVEgopxwbqXDvZbfSTbi9XpJ8DBqAESs4SE8mzVReQXZyTqxZTzpDwAF9tgbQOU9sE5YD2FPj45kfEUsa4ZvtDsWVIhE5WhYDCGjGm1HLLmbuuiB3QbsjsMUtMZb97LORTWQxuYo49ghcQaCGPSXpIvWXE10BB42szzvpa9I3dd48KBpDumVz~c8noJLfLPnshqSIy~GdL--T1cVwr6diMPf6wbXxWOjM9zAbsIQERKcitL4Z3Hhdc-CbNoCvfzXi-rqtfzvPBLjYzbUc12fIeFRBPRcbwgfaGgZ6BV-SRTo4ZN4i7XASzDiBZa~IWmYisyPziOug7DgkNejHw__"
                alt="Liva Logo"
                width={180}
                height={43}
                className="h-8 w-auto brightness-0 invert opacity-60"
              />
            </Suspense>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>

        {/* Navegação */}
        <div className="mb-8">
          <h3 className="text-teal-400 font-medium text-sm mb-4 uppercase tracking-wide">
            NAVEGUE NO SITE
          </h3>
          <nav className="space-y-3">
            <a
              href="#"
              className="block text-gray-300 text-sm hover:text-white transition-colors"
            >
              HOME
            </a>
            <a
              href="#"
              className="block text-gray-300 text-sm hover:text-white transition-colors"
            >
              SOBRE A LIVA
            </a>
            <a
              href="#"
              className="block text-gray-300 text-sm hover:text-white transition-colors"
            >
              EMPREENDIMENTOS
            </a>
            <a
              href="#"
              className="block text-gray-300 text-sm hover:text-white transition-colors"
            >
              NOTÍCIAS
            </a>
            <a
              href="#"
              className="block text-gray-300 text-sm hover:text-white transition-colors"
            >
              CONTATO
            </a>
          </nav>
        </div>

        {/* Redes Sociais */}
        <div className="mb-8">
          <p className="text-gray-300 text-sm mb-4">Acompanhe nas redes</p>
          <div className="flex gap-3">
            <FacebookIcon
              width={20}
              height={20}
              className="cursor-pointer"
              color="white"
            />
            <InstagramIcon
              width={20}
              height={20}
              className="cursor-pointer"
              color="white"
            />
          </div>
        </div>

        {/* Contato */}
        <div className="mb-8">
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
          <div className="space-y-2">
            <p className="text-white font-medium">(11) 9909-9091</p>
            <p className="text-gray-300 text-sm">contato@liva.com.br</p>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={<WhatsAppIcon width={16} height={16} />}
            className="mt-4"
          >
            WHATSAPP
          </Button>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <p>Liva © 2022 Todos os direitos reservados.</p>
            <div className="text-right">
              <FebaIcon
                width={80}
                height={11}
                color="white"
                className="opacity-60"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Layout Desktop */}
      <div className="hidden lg:flex lg:flex-col lg:h-full lg:px-[135px]">
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-4 gap-16 w-full max-w-[1180px] mx-auto h-[200px]">
            {/* Coluna 1: Logo */}
            <div className="flex flex-col justify-center">
              <Suspense
                fallback={
                  <div className="h-8 w-20 flex items-center justify-center">
                    <Spinner size="sm" className="text-white" />
                  </div>
                }
              >
                <Image
                  src="https://s3-alpha-sig-oac.figma.com/img/ae03/341f/f33786396d8554342609f57893633a23?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HwvQkVEgopxwbqXDvZbfSTbi9XpJ8DBqAESs4SE8mzVReQXZyTqxZTzpDwAF9tgbQOU9sE5YD2FPj45kfEUsa4ZvtDsWVIhE5WhYDCGjGm1HLLmbuuiB3QbsjsMUtMZb97LORTWQxuYo49ghcQaCGPSXpIvWXE10BB42szzvpa9I3dd48KBpDumVz~c8noJLfLPnshqSIy~GdL--T1cVwr6diMPf6wbXxWOjM9zAbsIQERKcitL4Z3Hhdc-CbNoCvfzXi-rqtfzvPBLjYzbUc12fIeFRBPRcbwgfaGgZ6BV-SRTo4ZN4i7XASzDiBZa~IWmYisyPziOug7DgkNejHw__"
                  alt="Liva Logo"
                  width={310}
                  height={280}
                  className="w-[108px] h-auto brightness-0 invert opacity-60 mb-4"
                />
              </Suspense>
              <p className="text-gray-300 text-sm leading-relaxed font-extrabold">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            {/* Coluna 2: Navegação */}
            <div>
              <h3 className="text-teal-400 font-extrabold text-sm mb-4 uppercase tracking-wide">
                NAVEGUE NO SITE
              </h3>
              <nav className="space-y-3">
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors font-extrabold"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors font-extrabold"
                >
                  SOBRE A LIVA
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors font-extrabold"
                >
                  EMPREENDIMENTOS
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors font-extrabold"
                >
                  NOTÍCIAS
                </a>
                <a
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors font-extrabold"
                >
                  CONTATO
                </a>
              </nav>
            </div>

            {/* Coluna 3: Redes Sociais */}
            <div className="flex flex-col justify-end">
              <p className="text-gray-300 text-sm mb-4 font-extrabold">
                Acompanhe nas redes
              </p>
              <div className="flex gap-3">
                <FacebookIcon
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  color="white"
                />
                <InstagramIcon
                  width={20}
                  height={20}
                  className="cursor-pointer"
                  color="white"
                />
              </div>
            </div>

            {/* Coluna 4: Contato */}
            <div className="flex flex-col items-end text-right">
              <p className="text-gray-300 text-sm leading-relaxed mb-4 font-extrabold">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore
              </p>
              <div className="space-y-2 mb-4">
                <p className="text-white font-extrabold">(11) 9909-9091</p>
                <p className="text-gray-300 text-sm font-extrabold">
                  contato@liva.com.br
                </p>
              </div>
              <Button
                variant="primary"
                size="md"
                icon={<WhatsAppIcon width={16} height={16} />}
              >
                WHATSAPP
              </Button>
            </div>
          </div>
        </div>

        {/* Divider e Copyright - Desktop */}
        <div className="border-t border-[#1C1C1C] pt-4 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <FebaIcon
                width={80}
                height={11}
                color="white"
                className="opacity-60"
              />
              <p
                className="text-[#6F6F6F] text-xs font-extrabold leading-[17px]"
                style={{ fontFamily: "Open Sans" }}
              >
                Liva © 2022 Todos os direitos reservados.
              </p>
            </div>
            <FebaIcon
              width={80}
              height={11}
              color="white"
              className="opacity-60"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
