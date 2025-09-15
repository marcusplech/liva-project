import React from "react";

type ButtonVariant =
  | "primary" // bg-liva-green - botão principal
  | "secondary" // botão secundário com borda
  | "ghost" // transparente com hover
  | "navigation" // botões de navegação do carrossel
  | "social" // botões de redes sociais
  | "modal" // botão do modal
  | "outline" // botão com borda
  | "white" // fundo branco, borda preta, texto preto
  | "transparent" // botão transparente conforme Figma
  | "arrow" // botões de seta com cor preta
  | "filter-active" // filtro ativo - fundo preto, texto branco
  | "filter-inactive" // filtro inativo - fundo branco, texto preto
  | "filter"; // filtro que alterna baseado no isActive

type ButtonSize = "sm" | "md" | "lg" | "full";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: "left";
  children?: React.ReactNode;
  borderColor?: string;
  textColor?: string;
  isActive?: boolean; // para controlar estado do filtro
}

const Button = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "left",
  children,
  className = "",
  borderColor,
  textColor,
  isActive,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "cursor-pointer font-semibold transition-all duration-200 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-offset-2 rounded border-2";

  const variantClasses = {
    primary: "bg-liva-green text-white hover:opacity-90 focus:ring-teal-500",
    secondary:
      "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50 focus:ring-gray-500",
    ghost: "bg-transparent text-gray-800 hover:bg-gray-100 focus:ring-gray-500",
    navigation:
      "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 focus:ring-white/50",
    social: "text-white hover:opacity-90 focus:ring-offset-0",
    modal: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-500",
    outline:
      "border border-teal-500 text-teal-500 hover:bg-teal-50 focus:ring-teal-500",
    white:
      "bg-white text-black border border-black hover:!bg-white hover:!text-black hover:shadow-md focus:ring-gray-500",
    transparent:
      "bg-transparent text-white border-2 border-white hover:bg-white/10 focus:ring-white/50",
    arrow:
      "bg-black text-white hover:bg-gray-800 focus:ring-gray-500 rounded-none",
    "filter-active":
      "bg-black text-white border-black hover:bg-gray-800 focus:ring-gray-500",
    "filter-inactive":
      "bg-white text-black border-black hover:bg-gray-50 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3 text-sm",
    full: "w-full py-3 text-sm",
  };

  // Custom colors override variant colors
  const customBorderClass = borderColor
    ? `border-${borderColor}`
    : "border-black";
  const customTextClass = textColor ? `text-${textColor}` : "";

  // Para variant filter, determina automaticamente baseado no isActive
  const finalVariant =
    variant === "filter"
      ? isActive
        ? "filter-inactive"
        : "filter-active"
      : variant;

  const classes = `
    ${baseClasses}
    ${customBorderClass}
    ${customTextClass || variantClasses[finalVariant]}
    ${!customTextClass ? variantClasses[finalVariant] : ""}
    ${sizeClasses[size]}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button className={classes} {...props}>
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      <span>
        {variant === "filter" ? (isActive ? "✕ FILTROS" : "FILTROS") : children}
      </span>
    </button>
  );
};

export default Button;
