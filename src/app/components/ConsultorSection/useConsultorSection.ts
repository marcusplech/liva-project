"use client";
import { useState, useEffect } from "react";
import {
  applyPhoneMask,
  validateForm,
  hasErrors,
  type ValidationErrors,
  type FormData,
} from "../../utils/formUtils";

export const useConsultorSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Fecha a modal automaticamente após 2 segundos
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    let processedValue = value;

    // Aplica máscara apenas para o campo telefone
    if (name === "phone") {
      processedValue = applyPhoneMask(value);
      // Limita a 15 caracteres (máscara completa)
      if (processedValue.length > 15) {
        processedValue = processedValue.slice(0, 15);
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: processedValue,
    }));

    // Limpa o erro quando o usuário começa a digitar
    if (errors[name as keyof ValidationErrors]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ValidationErrors];
        return newErrors;
      });
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name } = e.target;
    const fieldErrors = validateForm(formData);

    if (fieldErrors[name as keyof ValidationErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name as keyof ValidationErrors],
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    setErrors(formErrors);

    if (!hasErrors(formErrors)) {
      setIsSubmitted(true);
      // Limpar os campos do formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      // Limpar os erros
      setErrors({});
    }
  };

  return {
    formData,
    errors,
    isSubmitted,
    handleInputChange,
    handleBlur,
    handleSubmit,
  };
};
