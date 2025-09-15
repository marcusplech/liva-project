"use client";
import { Suspense } from "react";
import Button from "../Button";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "../icons";
import { useHeader } from "./useHeader";
import Spinner from "../Spinner";

function Header() {
  const { isMenuOpen, toggleMenu } = useHeader();

  return (
    <>
      {/* Desktop Header */}
      <header className="hidden lg:flex items-center justify-between px-8 py-4 bg-white fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Suspense
            fallback={
              <div className="h-10 w-24 flex items-center justify-center">
                <Spinner size="sm" />
              </div>
            }
          >
            <Image
              src="https://s3-alpha-sig-oac.figma.com/img/2d21/c6c9/c1e62846eb0342bce8d519d0d76f8e3b?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WxKmrH-Us5tMRS89iiMORJrpPVJPEjaeT7CRyNs4fQs32Ny2HYtKeFUi38IFrloSNpiYCXNE61q3fqF9esqRcYrP46-qM7qCd45nktn3es5QR0iqkD6sofI2hqlLMENFOqVT0ZjwEuxvGbIi2jvbSrB7BRyf6QDrhuEhqwOP6e72wnaOmm5QoXIyA-5O-t7CwB0fRIZww7rVFUye9KBJugpkBCHEzXTlEqtade4murGd-lglbEuKMl~rH1V3sMVpPq3XNASTzZ34-wbj1s-Hfh8OJM5au~GywL1740zy0WQLsRiMl9cqwJrXIbH3K6Km-hV363p~l1dwd-d946c14w__"
              alt="Liva Logo"
              width={100}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Suspense>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8">
          <a
            href="#"
            className="text-gray-800 font-extrabold hover:text-teal-600 transition-colors uppercase"
          >
            HOME
          </a>
          <a
            href="#"
            className="text-gray-800 font-extrabold hover:text-teal-600 transition-colors uppercase"
          >
            SOBRE A LIVA
          </a>
          <a
            href="#"
            className="text-gray-800 font-extrabold hover:text-teal-600 transition-colors uppercase"
          >
            EMPREENDIMENTOS
          </a>
          <a
            href="#"
            className="text-gray-800 font-extrabold hover:text-teal-600 transition-colors uppercase"
          >
            NOTÍCIAS
          </a>
          <a
            href="#"
            className="text-gray-800 font-extrabold hover:text-teal-600 transition-colors uppercase"
          >
            CONTATO
          </a>
        </nav>

        {/* Social Icons and CTA */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <FacebookIcon className="w-5 h-5 text-gray-600 hover:text-teal-600 transition-colors cursor-pointer" />
            <InstagramIcon className="w-5 h-5 text-gray-600 hover:text-teal-600 transition-colors cursor-pointer" />
            <WhatsAppIcon className="w-5 h-5 text-gray-600 hover:text-teal-600 transition-colors cursor-pointer" />
          </div>
          <Button
            variant="primary"
            size="md"
            className="w-full border-none"
            icon={<WhatsAppIcon className="w-4 h-4" />}
          >
            WHATSAPP
          </Button>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white fixed top-0 left-0 right-0 z-50">
        {/* Logo */}
        <div className="flex items-center">
          <Suspense
            fallback={
              <div className="h-8 w-20 flex items-center justify-center">
                <Spinner size="sm" />
              </div>
            }
          >
            <Image
              src="https://s3-alpha-sig-oac.figma.com/img/2d21/c6c9/c1e62846eb0342bce8d519d0d76f8e3b?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WxKmrH-Us5tMRS89iiMORJrpPVJPEjaeT7CRyNs4fQs32Ny2HYtKeFUi38IFrloSNpiYCXNE61q3fqF9esqRcYrP46-qM7qCd45nktn3es5QR0iqkD6sofI2hqlLMENFOqVT0ZjwEuxvGbIi2jvbSrB7BRyf6QDrhuEhqwOP6e72wnaOmm5QoXIyA-5O-t7CwB0fRIZww7rVFUye9KBJugpkBCHEzXTlEqtade4murGd-lglbEuKMl~rH1V3sMVpPq3XNASTzZ34-wbj1s-Hfh8OJM5au~GywL1740zy0WQLsRiMl9cqwJrXIbH3K6Km-hV363p~l1dwd-d946c14w__"
              alt="Liva Logo"
              width={80}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Suspense>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <div className="w-6 h-6 flex items-center justify-center">
              <span className="text-2xl text-gray-800 leading-none">×</span>
            </div>
          ) : (
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className="block w-5 h-0.5 bg-gray-800"></span>
              <span className="block w-5 h-0.5 bg-gray-800 mt-1"></span>
              <span className="block w-5 h-0.5 bg-gray-800 mt-1"></span>
            </div>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-40 pt-16">
          {/* Divider line */}
          <div className="border-t border-gray-200"></div>

          <nav className="flex flex-col justify-between h-full">
            <div className="px-6 py-8">
              <a
                href="#"
                className="text-gray-800 font-extrabold text-lg hover:text-teal-600 transition-colors uppercase block mb-6"
              >
                HOME
              </a>
              <a
                href="#"
                className="text-gray-800 font-extrabold text-lg hover:text-teal-600 transition-colors uppercase block mb-6"
              >
                SOBRE A LIVA
              </a>
              <a
                href="#"
                className="text-gray-800 font-extrabold text-lg hover:text-teal-600 transition-colors uppercase block mb-6"
              >
                EMPREENDIMENTOS
              </a>
              <a
                href="#"
                className="text-gray-800 font-extrabold text-lg hover:text-teal-600 transition-colors uppercase block mb-6"
              >
                NOTÍCIAS
              </a>
              <a
                href="#"
                className="text-gray-800 font-extrabold text-lg hover:text-teal-600 transition-colors uppercase block mb-6"
              >
                CONTATO
              </a>

              <div className="flex flex-col gap-2">
                <span className="text-black">Acompanhe nas redes</span>
                <div className="flex items-center space-x-4 mb-6">
                  <FacebookIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 cursor-pointer"
                  />
                  <InstagramIcon
                    width={20}
                    height={20}
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 w-full p-4 mt-auto flex items-center justify-center min-h-[80px]">
              <Button
                variant="primary"
                size="md"
                className="w-full border-none"
                icon={<WhatsAppIcon className="w-4 h-4" />}
              >
                WHATSAPP
              </Button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export default Header;
