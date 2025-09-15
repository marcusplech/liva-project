# Liva Project 🏠

Um projeto moderno de interface web desenvolvido com Next.js, TypeScript e Tailwind CSS, focado em apresentar informações sobre imóveis de forma elegante e interativa.

## 🌐 Live Demo

🔗 **[https://liva-project.vercel.app/](https://liva-project.vercel.app/)**

Veja o projeto funcionando em produção! A aplicação está hospedada na Vercel com deploy automático.

## 🚀 Tecnologias Utilizadas

- **Next.js 15** - Framework React para produção
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **React Hooks** - Gerenciamento de estado moderno
- **ESLint** - Linting de código
- **Prettier** - Formatação de código

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## 🔧 Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/marcusplech/liva-project.git
   cd liva-project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse a aplicação:**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

## 📁 Estrutura do Projeto

```
feba-project/
├── public/                 # Arquivos estáticos
│   ├── file.svg
│   ├── globe.svg
│   └── ...
├── src/
│   └── app/
│       ├── components/     # Componentes React reutilizáveis
│       │   ├── AboutSection.tsx
│       │   ├── Button.tsx
│       │   ├── ContactSection.tsx
│       │   ├── Footer.tsx
│       │   ├── Header.tsx
│       │   ├── HeroSection.tsx
│       │   ├── PropertyCard.tsx
│       │   └── PropertySection.tsx
│       ├── data/          # Dados estáticos
│       │   └── properties.ts
│       ├── utils/         # Utilitários e hooks
│       │   └── useAboutSection.ts
│       ├── globals.css    # Estilos globais
│       ├── layout.tsx     # Layout principal
│       └── page.tsx       # Página inicial
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🎨 Funcionalidades

### Componentes Principais

- **Header**: Navegação principal com logo e menu
- **HeroSection**: Seção de destaque com call-to-action
- **PropertySection**: Exibição de propriedades com filtros
- **AboutSection**: Informações sobre a empresa com filtro interativo
- **ContactSection**: Formulário de contato
- **Footer**: Rodapé com informações adicionais

### Características Técnicas

- **Componente Button Customizável**: Sistema de variantes (primary, secondary, filter)
- **Hooks Personalizados**: `useAboutSection` para gerenciar estado da seção sobre
- **Design Responsivo**: Interface adaptável para diferentes dispositivos
- **Tipagem TypeScript**: Código totalmente tipado para maior segurança
- **Filtros Interativos**: Sistema de filtros com estados visuais

## 🛠️ Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção

# Qualidade de código
npm run lint         # Executa ESLint
npx prettier --write . # Formata código com Prettier
```

### Customizando Componentes

O sistema de componentes é modular e reutilizável. Exemplo do componente Button:

```typescript
<Button 
  variant="primary" 
  size="lg" 
  onClick={handleClick}
>
  Texto do Botão
</Button>
```

### Modificando Estilos

O projeto usa Tailwind CSS. Para customizar:

1. Edite `tailwind.config.ts` para temas personalizados
2. Modifique `src/app/globals.css` para estilos globais
3. Use classes Tailwind diretamente nos componentes

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Convenções de Código

- Use TypeScript para tipagem
- Siga as regras do ESLint configurado
- Formate código com Prettier antes do commit
- Use nomes descritivos para componentes e funções
- Mantenha componentes pequenos e focados

## 🐛 Problemas Conhecidos

- Certifique-se de que todas as imagens estão na pasta `public/`
- Verifique se as dependências estão atualizadas
- Em caso de erro de build, limpe o cache: `rm -rf .next node_modules && npm install`

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Marcus Plech**
- GitHub: [@marcusplech](https://github.com/marcusplech)
- LinkedIn: [Marcus Plech](https://www.linkedin.com/in/devmarcusplech/)
