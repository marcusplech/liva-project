"use client";
import Button from "../Button";
import { useConsultorSection } from "./useConsultorSection";

function ConsultorSection() {
  const {
    formData,
    errors,
    isSubmitted,
    handleInputChange,
    handleBlur,
    handleSubmit,
  } = useConsultorSection();

  return (
    <section className="bg-black text-white p-6 pt-16 lg:h-[640px] lg:flex lg:p-0">
      {/* Lado Esquerdo - Fundo Preto */}
      <div className="lg:w-[835px] lg:bg-black lg:flex lg:flex-col lg:justify-center lg:pl-[134px] lg:pr-12">
        <div className="mb-8">
          <h2 className="font-bold mb-6 text-[28px] lg:text-[36px] leading-tight">
            Fale agora
            <br />
            com um consultor
            <br />
            de vendas
          </h2>
          <div className="text-gray-300 text-sm mb-8">
            <p className="mb-1">Tire suas dúvidas e conheça de perto o seu</p>
            <p className="font-bold text-white">novo jeito de morar.</p>
          </div>

          {/* Seção dos Consultores */}
          <div className="text-center lg:text-left">
            <p className="text-gray-300 text-sm mb-4">Consultores online</p>
            <div className="flex justify-center lg:justify-start gap-4">
              {/* Consultores */}
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <circle cx="27" cy="27" r="27" fill="white" />
                </svg>
              </div>
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <circle cx="27" cy="27" r="27" fill="white" />
                </svg>
              </div>
              <div className="w-12 h-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                >
                  <circle cx="27" cy="27" r="27" fill="white" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Imagem de Fundo com Formulário */}
      <div
        className="lg:flex-1 lg:relative lg:bg-cover lg:bg-center lg:bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://s3-alpha-sig-oac.figma.com/img/4098/7f0b/d053084b73e9c51d1514e9a6f77cf375?Expires=1758499200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=KlPGGPFBxjM3sfysa~~WOgC2BEE1QF77NQkySUz6IE19QFZGAxC9xeIkX0pM11LYKG~gC6KoMFqIdPTMrNH5ZvvxVrIrLBPWz5jPo0vEP6YDiopHizcnE4ru7woWvXqntnVDupOT6b56n6r9DSmqi64BlR~1lLylF5QNLUsEGXmoMVdJQ58xaP~on2Fk8aEFlwooUi--5WSoMNLX7TbsinYhXSFGroIxwfp-DLEy34tLln1AnT0lu48eszP8xRqitim7KMekxNzqIJNAGwuaJrg46DCS1IgUeXwXCoxLLLi59iaaDdM3jFwrhKMmJLdsoeLGvAc15~3VSpg8tH2KVg__")',
        }}
      >
        {/* Formulário Posicionado */}
        <div className="bg-white p-6 rounded-lg lg:absolute lg:right-[235px] lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:w-[470px] lg:h-[525px] lg:flex lg:flex-col lg:justify-center lg:p-8">
          <form className="space-y-4" noValidate onSubmit={handleSubmit}>
            <fieldset className="space-y-4">
              <legend className="sr-only">Informações de contato</legend>

              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 pt-6 pr-10 border-2 border-black rounded text-sm text-black focus:outline-none focus:border-teal-500 ${
                    errors.name
                      ? "border-red-500"
                      : formData.name && formData.name.trim().length >= 2
                        ? "border-teal-500"
                        : ""
                  }`}
                />
                <label
                  className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                    formData.name ? "top-1 text-xs" : "top-3 text-sm"
                  }`}
                  style={{ color: formData.name ? "#A0A0A0" : "#000000" }}
                >
                  Nome
                </label>
                {formData.name &&
                  formData.name.trim().length >= 2 &&
                  !errors.name && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  className={`w-full p-3 pt-6 pr-10 border-2 border-black rounded text-sm text-black focus:outline-none focus:border-teal-500 ${
                    errors.email
                      ? "border-red-500"
                      : formData.email &&
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                        ? "border-teal-500"
                        : ""
                  }`}
                />
                <label
                  className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                    formData.email ? "top-1 text-xs" : "top-3 text-sm"
                  }`}
                  style={{ color: formData.email ? "#A0A0A0" : "#000000" }}
                >
                  E-mail
                </label>
                {formData.email &&
                  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
                  !errors.email && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                {errors.email && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  maxLength={15}
                  className={`w-full p-3 pt-6 pr-10 border-2 border-black rounded text-sm text-black focus:outline-none focus:border-teal-500 ${
                    errors.phone
                      ? "border-red-500"
                      : formData.phone &&
                          formData.phone.replace(/\D/g, "").length === 11
                        ? "border-teal-500"
                        : ""
                  }`}
                />
                <label
                  className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                    formData.phone ? "top-1 text-xs" : "top-3 text-sm"
                  }`}
                  style={{ color: formData.phone ? "#A0A0A0" : "#000000" }}
                >
                  Telefone
                </label>
                {formData.phone &&
                  formData.phone.replace(/\D/g, "").length === 11 &&
                  !errors.phone && (
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                {errors.phone && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  rows={4}
                  className={`w-full p-3 pt-6 pr-10 border-2 border-black rounded text-sm text-black focus:outline-none focus:border-teal-500 resize-none ${
                    errors.message
                      ? "border-red-500"
                      : formData.message && formData.message.trim().length >= 10
                        ? "border-teal-500"
                        : ""
                  }`}
                ></textarea>
                <label
                  className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                    formData.message ? "top-1 text-xs" : "top-3 text-sm"
                  }`}
                  style={{ color: formData.message ? "#A0A0A0" : "#000000" }}
                >
                  Mensagem
                </label>
                {formData.message &&
                  formData.message.trim().length >= 10 &&
                  !errors.message && (
                    <div className="absolute right-3 top-6">
                      <svg
                        className="w-5 h-5 text-teal-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                  )}
                {errors.message && (
                  <span className="text-red-500 text-xs mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>
            </fieldset>

            <Button
              type="submit"
              variant="primary"
              size="full"
              className="bg-teal-500 border-none hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded transition-colors"
            >
              ENVIAR MENSAGEM
            </Button>
          </form>
        </div>
      </div>

      {/* Modal de Sucesso */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 max-w-md mx-4 text-center">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-8 h-8 text-teal-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mensagem enviada com sucesso!
            </h3>
            <p className="text-gray-600 text-sm">
              Aguarde que em instantes entraremos em contato.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ConsultorSection;
