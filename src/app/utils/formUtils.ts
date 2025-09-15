// Função para aplicar máscara de telefone no formato (99) 99999-9999
export const applyPhoneMask = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, "");

  // Aplica a máscara baseada no número de dígitos
  if (numbers.length <= 2) {
    return `(${numbers}`;
  } else if (numbers.length <= 7) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  } else {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  }
};

// Interface para os erros de validação
export interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

// Interface para os dados do formulário
export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// Função para validar todos os campos do formulário
export const validateForm = (formData: FormData): ValidationErrors => {
  const errors: ValidationErrors = {};

  // Validação do nome
  if (!formData.name.trim()) {
    errors.name = "Nome é obrigatório";
  } else if (formData.name.trim().length < 2) {
    errors.name = "Nome deve ter pelo menos 2 caracteres";
  }

  // Validação do email
  if (!formData.email.trim()) {
    errors.email = "E-mail é obrigatório";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "E-mail inválido";
  }

  // Validação do telefone
  if (!formData.phone.trim()) {
    errors.phone = "Telefone é obrigatório";
  } else {
    const phoneNumbers = formData.phone.replace(/\D/g, "");
    if (phoneNumbers.length !== 11) {
      errors.phone = "Telefone deve ter 11 dígitos no formato (99) 99999-9999";
    }
  }

  // Validação da mensagem
  if (!formData.message.trim()) {
    errors.message = "Mensagem é obrigatória";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Mensagem deve ter pelo menos 10 caracteres";
  }

  return errors;
};

// Função para verificar se há erros no formulário
export const hasErrors = (errors: ValidationErrors): boolean => {
  return Object.keys(errors).length > 0;
};
