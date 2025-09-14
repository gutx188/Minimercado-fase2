# Minimercado Bom Preço - Fase 2
## Sistema Web Completo com CSS/Bootstrap, JavaScript e Funcionalidades Avançadas

### Visão Geral do Projeto

Este projeto representa a evolução completa do sistema web do Minimercado Bom Preço, desenvolvido como parte da disciplina de desenvolvimento web. A Fase 2 expandiu significativamente as funcionalidades da Fase 1, transformando uma página HTML básica em uma aplicação web moderna, interativa e acessível.

O sistema agora oferece uma experiência de usuário rica e profissional, incorporando as melhores práticas de desenvolvimento web moderno, incluindo design responsivo, interatividade JavaScript, validação de formulários, e recursos de acessibilidade para deficientes visuais.

### Objetivos Alcançados

#### 1. Implementação de CSS/Bootstrap
- **Design Visual Moderno**: Aplicação de um sistema de cores verde profissional que reflete a identidade do minimercado
- **Layout Responsivo**: Utilização do Bootstrap 5.3.0 para garantir compatibilidade com dispositivos móveis e desktop
- **Componentes Estilizados**: Cards para produtos e serviços, formulários bem estruturados, e navegação intuitiva
- **Animações e Transições**: Efeitos visuais suaves que melhoram a experiência do usuário

#### 2. Funcionalidades JavaScript Avançadas
- **Carrossel de Produtos em Destaque**: Sistema automático e manual de rotação de produtos
- **Funções Temporais**: Exibição de data e hora em tempo real
- **Contador de Visitantes**: Sistema de contagem persistente usando localStorage
- **Validação de Formulários**: Validação em tempo real com feedback visual
- **Scroll Suave**: Navegação fluida entre seções da página

#### 3. Formulário de Cadastro Completo
- **Campos Variados**: Input text, email, tel, date, textarea, radio buttons, checkboxes
- **Validação HTML5**: Campos obrigatórios, patterns, e validação de formato
- **Máscaras de Input**: Formatação automática para CPF e telefone
- **Feedback Visual**: Mensagens de erro e sucesso com Bootstrap

#### 4. Sistema de Agendamento
- **Calendário Integrado**: Campo de data com validação de data mínima
- **Seleção de Horários**: Dropdown com horários disponíveis
- **Tipos de Serviço**: Opções entre retirada no local e tele-entrega
- **Observações**: Campo livre para informações adicionais

#### 5. Melhorias de Acessibilidade
- **Atributos Alt Descritivos**: Audiodescrição detalhada para todas as imagens
- **Navegação por Teclado**: Suporte completo para navegação sem mouse
- **ARIA Labels**: Rótulos apropriados para elementos interativos
- **Contraste de Cores**: Paleta de cores que atende aos padrões de acessibilidade
- **Estrutura Semântica**: HTML semântico com roles e landmarks apropriados

### Estrutura de Arquivos

```
minimercado_web_fase2/
├── index.html              # Página principal com todas as funcionalidades
├── css/
│   └── style.css          # Estilos personalizados e responsivos
├── js/
│   └── script.js          # Funcionalidades JavaScript
├── images/                # Imagens dos produtos
│   ├── maca.jpg
│   ├── banana.jpg
│   ├── arroz.jpg
│   ├── feijao.jpg
│   ├── sabonete.jpg
│   └── detergente.jpg
└── README.md              # Esta documentação
```

### Tecnologias Utilizadas

#### Frontend
- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Estilos personalizados com animações e transições
- **Bootstrap 5.3.0**: Framework CSS para responsividade e componentes
- **Bootstrap Icons**: Ícones vetoriais para melhor experiência visual
- **JavaScript ES6+**: Funcionalidades interativas e validação

#### Recursos Externos
- **CDN Bootstrap**: Carregamento otimizado dos recursos do Bootstrap
- **Google Fonts**: Tipografia profissional (implícita via Bootstrap)

### Funcionalidades Detalhadas

#### Carrossel de Produtos em Destaque
O carrossel implementado oferece:
- **Rotação Automática**: Mudança de produto a cada 5 segundos
- **Controles Manuais**: Botões de navegação anterior/próximo
- **Efeitos Visuais**: Transições suaves e hover effects
- **Responsividade**: Adaptação automática a diferentes tamanhos de tela

#### Sistema de Validação de Formulários
- **Validação em Tempo Real**: Feedback imediato durante a digitação
- **Máscaras de Input**: Formatação automática para CPF (000.000.000-00) e telefone ((11) 99999-9999)
- **Campos Obrigatórios**: Marcação visual e validação de preenchimento
- **Mensagens Personalizadas**: Feedback específico para cada tipo de erro

#### Recursos de Acessibilidade Implementados
- **Alt Text Descritivo**: Cada imagem possui descrição detalhada para leitores de tela
- **Navegação por Teclado**: Todos os elementos interativos são acessíveis via Tab
- **ARIA Labels**: Rótulos apropriados para elementos de formulário
- **Contraste Adequado**: Cores que atendem aos padrões WCAG
- **Estrutura Semântica**: Uso correto de headings, landmarks e roles

### Ajustes e Melhorias Realizados

#### Design e Usabilidade
1. **Paleta de Cores Profissional**: Adoção do verde como cor principal, transmitindo confiança e frescor
2. **Tipografia Hierárquica**: Diferentes tamanhos de fonte para criar hierarquia visual clara
3. **Espaçamento Consistente**: Uso de grid system do Bootstrap para alinhamento perfeito
4. **Hover Effects**: Interações visuais que melhoram a experiência do usuário

#### Performance e Otimização
1. **Carregamento de CDN**: Uso de CDNs para Bootstrap, reduzindo tempo de carregamento
2. **Compressão de Imagens**: Otimização das imagens dos produtos
3. **JavaScript Otimizado**: Código eficiente com event listeners apropriados
4. **CSS Minificado**: Estilos organizados e otimizados

#### Funcionalidade e Interatividade
1. **Validação Robusta**: Sistema de validação que previne envios inválidos
2. **Feedback Visual**: Indicações claras de sucesso e erro
3. **Navegação Intuitiva**: Menu de navegação com scroll suave
4. **Responsividade Total**: Funcionamento perfeito em dispositivos móveis

### Instruções de Uso

#### Para Desenvolvedores
1. **Estrutura Modular**: Arquivos organizados por tipo (CSS, JS, imagens)
2. **Código Comentado**: JavaScript e CSS com comentários explicativos
3. **Padrões Web**: Seguimento das melhores práticas de desenvolvimento
4. **Compatibilidade**: Testado nos principais navegadores modernos

#### Para Usuários Finais
1. **Navegação Intuitiva**: Menu superior com links para todas as seções
2. **Formulários Simples**: Preenchimento guiado com validação em tempo real
3. **Informações Claras**: Produtos e serviços bem descritos com preços visíveis
4. **Contato Fácil**: Informações de contato sempre visíveis no rodapé

### Publicação no GitHub e GitHub Pages

#### Repositório GitHub
O projeto está preparado para ser publicado em repositório GitHub com:
- **Estrutura Organizada**: Arquivos bem organizados e nomeados
- **README Completo**: Documentação detalhada das funcionalidades
- **Código Limpo**: Seguindo padrões de qualidade e boas práticas

#### GitHub Pages
Para publicação via GitHub Pages:
1. **Arquivos Estáticos**: Todos os recursos são estáticos e compatíveis
2. **Paths Relativos**: Caminhos de arquivos configurados para funcionamento online
3. **CDN External**: Dependências externas carregadas via CDN
4. **Responsividade**: Funcionamento garantido em todos os dispositivos

## Como Publicar no GitHub Pages e GitHub Normal

Para publicar este projeto no GitHub Pages e em um repositório GitHub normal, siga os passos abaixo:

### 1. Criar um Repositório no GitHub

1. Acesse o GitHub e faça login na sua conta.
2. Clique no botão "New" (Novo) para criar um novo repositório.
3. Dê um nome ao seu repositório (ex: `minimercado-web-fase2`).
4. Escolha se o repositório será público ou privado.
5. **Não** marque a opção para inicializar o repositório com um `README.md` (você já tem um).
6. Clique em "Create repository" (Criar repositório).

### 2. Fazer Upload dos Arquivos para o Repositório

Você pode fazer o upload dos arquivos de duas maneiras:

#### Opção A: Usando a Interface Web do GitHub

1. Na página do seu novo repositório no GitHub, clique em "uploading an existing file" (fazer upload de um arquivo existente).
2. Arraste e solte a pasta `minimercado_web_fase2` (ou o conteúdo dela) para a área indicada.
3. Confirme o commit das alterações.

#### Opção B: Usando Git (Recomendado)

1. Abra o terminal ou prompt de comando no seu computador.
2. Navegue até o diretório onde você descompactou o projeto `minimercado_web_fase2`.
3. Inicialize um repositório Git local:
   ```bash
   git init
   ```
4. Adicione todos os arquivos ao stage:
   ```bash
   git add .
   ```
5. Faça o primeiro commit:
   ```bash
   git commit -m "Fase 2 - Projeto Minimercado Web com CSS/Bootstrap e JavaScript"
   ```
6. Adicione o repositório remoto do GitHub (substitua `SEU_USUARIO` e `NOME_DO_REPOSITORIO` pelos seus dados):
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/NOME_DO_REPOSITORIO.git
   ```
7. Envie os arquivos para o GitHub:
   ```bash
   git push -u origin master
   ```

### 3. Ativar o GitHub Pages

1. No seu repositório no GitHub, clique na aba "Settings" (Configurações).
2. No menu lateral esquerdo, clique em "Pages".
3. Em "Source" (Fonte), selecione a branch `master` (ou `main`, dependendo do seu repositório) e a pasta `/(root)`.
4. Clique em "Save" (Salvar).
5. O GitHub Pages irá gerar um link para o seu site (ex: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`). Pode levar alguns minutos para o site ficar online.

Agora seu projeto estará disponível tanto no repositório GitHub quanto publicado via GitHub Pages!

### Conclusão

A Fase 2 do projeto Minimercado Bom Preço representa um salto qualitativo significativo em relação à Fase 1. A implementação bem-sucedida de CSS/Bootstrap, JavaScript avançado, formulários interativos, sistema de agendamento e recursos de acessibilidade resultou em uma aplicação web moderna e profissional.

O projeto demonstra domínio completo das tecnologias web fundamentais e aplicação prática dos conceitos aprendidos na disciplina. A atenção aos detalhes de usabilidade, acessibilidade e design responsivo garante uma experiência de usuário excepcional em todos os dispositivos.

O sistema está pronto para uso real, oferecendo todas as funcionalidades necessárias para um minimercado moderno operar online, desde a apresentação de produtos até o agendamento de entregas, sempre mantendo os mais altos padrões de qualidade e acessibilidade web.

---

**Desenvolvido por**: Equipe de Desenvolvimento Web  
**Data**: Setembro 2024  
**Versão**: 2.0  
**Tecnologias**: HTML5, CSS3, Bootstrap 5.3.0, JavaScript ES6+

