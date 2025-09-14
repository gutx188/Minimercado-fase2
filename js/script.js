// Minimercado Bom Preço - JavaScript

// Função para exibir data e hora atual
function exibirDataHora() {
    const agora = new Date();
    const opcoes = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    
    const dataHoraFormatada = agora.toLocaleDateString('pt-BR', opcoes);
    
    // Criar elemento para exibir data/hora se não existir
    let elementoDataHora = document.getElementById('data-hora');
    if (!elementoDataHora) {
        elementoDataHora = document.createElement('div');
        elementoDataHora.id = 'data-hora';
        elementoDataHora.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: rgba(40, 167, 69, 0.9);
            color: white;
            padding: 10px 15px;
            border-radius: 8px;
            font-size: 14px;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        `;
        document.body.appendChild(elementoDataHora);
    }
    
    elementoDataHora.textContent = dataHoraFormatada;
}

// Função para criar carrossel de produtos em destaque
function criarCarrossel() {
    const produtos = [
        {
            nome: 'Maçã',
            imagem: 'images/maca.jpg',
            preco: 'R$ 5,00/kg',
            descricao: 'Maçã fresca e crocante'
        },
        {
            nome: 'Banana',
            imagem: 'images/banana.jpg',
            preco: 'R$ 3,50/kg',
            descricao: 'Banana madura e doce'
        },
        {
            nome: 'Arroz',
            imagem: 'images/arroz.jpg',
            preco: 'R$ 20,00',
            descricao: 'Arroz branco tipo 1'
        }
    ];

    let indiceAtual = 0;
    
    // Criar container do carrossel
    const carrosselContainer = document.createElement('div');
    carrosselContainer.id = 'carrossel-produtos';
    carrosselContainer.style.cssText = `
        background: linear-gradient(135deg, #28a745, #20c997);
        padding: 2rem;
        margin: 2rem 0;
        border-radius: 10px;
        text-align: center;
        color: white;
        position: relative;
        overflow: hidden;
    `;

    const titulo = document.createElement('h2');
    titulo.textContent = 'Produtos em Destaque';
    titulo.style.cssText = 'margin-bottom: 2rem; color: white;';
    carrosselContainer.appendChild(titulo);

    const produtoContainer = document.createElement('div');
    produtoContainer.id = 'produto-destaque';
    produtoContainer.style.cssText = `
        background: rgba(255,255,255,0.1);
        padding: 2rem;
        border-radius: 10px;
        backdrop-filter: blur(10px);
        transition: all 0.5s ease;
    `;

    const botaoAnterior = document.createElement('button');
    botaoAnterior.textContent = '❮';
    botaoAnterior.style.cssText = `
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(255,255,255,0.3);
        border: none;
        color: white;
        font-size: 2rem;
        padding: 10px 15px;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
    `;

    const botaoProximo = document.createElement('button');
    botaoProximo.textContent = '❯';
    botaoProximo.style.cssText = botaoAnterior.style.cssText.replace('left: 20px', 'right: 20px');

    function atualizarProduto() {
        const produto = produtos[indiceAtual];
        produtoContainer.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.descricao}" style="
                width: 200px;
                height: 150px;
                object-fit: cover;
                border-radius: 10px;
                margin-bottom: 1rem;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            ">
            <h3 style="font-size: 1.8rem; margin-bottom: 0.5rem;">${produto.nome}</h3>
            <p style="font-size: 1.1rem; margin-bottom: 0.5rem; opacity: 0.9;">${produto.descricao}</p>
            <div style="font-size: 1.5rem; font-weight: bold; background: rgba(255,255,255,0.2); padding: 0.5rem; border-radius: 5px; display: inline-block;">${produto.preco}</div>
        `;
    }

    botaoAnterior.addEventListener('click', () => {
        indiceAtual = (indiceAtual - 1 + produtos.length) % produtos.length;
        atualizarProduto();
    });

    botaoProximo.addEventListener('click', () => {
        indiceAtual = (indiceAtual + 1) % produtos.length;
        atualizarProduto();
    });

    // Hover effects
    [botaoAnterior, botaoProximo].forEach(botao => {
        botao.addEventListener('mouseenter', () => {
            botao.style.background = 'rgba(255,255,255,0.5)';
            botao.style.transform = 'translateY(-50%) scale(1.1)';
        });
        botao.addEventListener('mouseleave', () => {
            botao.style.background = 'rgba(255,255,255,0.3)';
            botao.style.transform = 'translateY(-50%) scale(1)';
        });
    });

    carrosselContainer.appendChild(produtoContainer);
    carrosselContainer.appendChild(botaoAnterior);
    carrosselContainer.appendChild(botaoProximo);

    // Inserir carrossel após o cabeçalho
    const main = document.querySelector('main');
    if (main) {
        main.insertBefore(carrosselContainer, main.firstChild);
    }

    // Inicializar com o primeiro produto
    atualizarProduto();

    // Auto-rotação do carrossel
    setInterval(() => {
        indiceAtual = (indiceAtual + 1) % produtos.length;
        atualizarProduto();
    }, 5000);
}

// Função para adicionar efeitos de hover nos produtos
function adicionarEfeitosHover() {
    const produtos = document.querySelectorAll('.produto');
    
    produtos.forEach(produto => {
        produto.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(0,0,0,0.2)';
        });
        
        produto.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
}

// Função para criar contador de visitantes (simulado)
function criarContadorVisitantes() {
    let visitantes = localStorage.getItem('visitantes') || 0;
    visitantes = parseInt(visitantes) + 1;
    localStorage.setItem('visitantes', visitantes);
    
    const contador = document.createElement('div');
    contador.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: rgba(40, 167, 69, 0.9);
        color: white;
        padding: 10px 15px;
        border-radius: 8px;
        font-size: 14px;
        z-index: 1000;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    `;
    contador.textContent = `Visitantes: ${visitantes}`;
    document.body.appendChild(contador);
}

// Função para scroll suave
function configurarScrollSuave() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Função para animar elementos quando entram na viewport
function configurarAnimacaoScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
}

// Função principal que inicializa todas as funcionalidades
function inicializar() {
    // Aguardar o carregamento completo da página
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializar);
        return;
    }

    console.log('Minimercado Bom Preço - Sistema carregado!');
    
    // Inicializar funcionalidades
    exibirDataHora();
    criarCarrossel();
    adicionarEfeitosHover();
    criarContadorVisitantes();
    configurarScrollSuave();
    configurarAnimacaoScroll();
    
    // Atualizar data/hora a cada minuto
    setInterval(exibirDataHora, 60000);
    
    // Adicionar classe para indicar que JS está ativo
    document.body.classList.add('js-ativo');
}

// Inicializar quando a página carregar
inicializar();

