const projetos = [
  {
    id: 1,
    imgSrc: "./img/projetos/studio-ghibli-desktop-preview.png",
    altText: "Página Studio Ghibli",
    titulo: "Studio Ghibli",
    descricao:
      'Uma landing page temática sobre o filme "A Viagem de Chihiro" do Studio Ghibli.',
    tecnologias: ["HTML", "CSS"],
    projetoLink: "https://desafio-studio-ghibli.vercel.app/",
    repositorioLink: "https://github.com/msumii/desafio-studio-ghibli"
  },
  {
    id: 2,
    imgSrc:
      "./img/projetos/bikcraft-desktop-preview.png",
    altText: "Preview do projeto Bikcraft",
    titulo: "Bikcraft",
    descricao:
      "Um site de vendas focado em bicicletas elétricas sob medida.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    projetoLink: "https://bikcraft-eight-eta.vercel.app/",
    repositorioLink: "https://github.com/msumii/bikcraft"
  },
  {
    id: 3,
    imgSrc:
      "./img/projetos/faq-accordion-desktop-preview.png",
    altText: "Preview do Projeto FAQs",
    titulo: "FAQs Accordion",
    descricao:
      "Um card interativo de perguntas frequentes que facilita o acesso às principais dúvidas.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    projetoLink: "https://desafio-faq-accordion.vercel.app/",
    repositorioLink: "https://github.com/msumii/desafio-faq-accordion"
  }
];

const slots = document.querySelectorAll(".projeto-slot");
const projetoImg = document.querySelector(".imagem-projeto");
const projetoTitulo = document.querySelector(".projeto-titulo");
const projetoDescricao = document.querySelector(".projeto-descricao");
const navProjeto = document.querySelector(".navegacao-projeto");
const navRepositorio = document.querySelector(".navegacao-repositorio");
const projetoTecnologias = document.querySelector(".projeto-tecnologias");

let indiceAtivo = 1;

function atualizarCarrossel() {
  const total = projetos.length;

  slots.forEach((slot, i) => {
    let projetoIndex = (indiceAtivo - 1 + i + total) % total;
    slot.querySelector("img").src = projetos[projetoIndex].imgSrc;
    slot.querySelector("img").alt = projetos[projetoIndex].altText;

    slot.classList.toggle("ativo", i === 1);
  });

  const projetoAtual = projetos[indiceAtivo];
  projetoImg.src = projetoAtual.imgSrc;
  projetoImg.alt = projetoAtual.altText;
  projetoTitulo.textContent = projetoAtual.titulo;
  projetoDescricao.textContent = projetoAtual.descricao;
  navProjeto.href = projetoAtual.projetoLink || "#";
  navRepositorio.href = projetoAtual.repositorioLink || "#";

  projetoTecnologias.innerHTML = "";
  if (projetoAtual.tecnologias) {
    projetoAtual.tecnologias.forEach((tec) => {
      const span = document.createElement("span");
      span.textContent = tec;
      projetoTecnologias.appendChild(span);
    });
  }
}

// Navegação por setas
document.querySelector(".anterior-carrossel").addEventListener("click", () => {
  indiceAtivo = (indiceAtivo - 1 + projetos.length) % projetos.length;
  atualizarCarrossel();
});

document.querySelector(".anterior-projeto").addEventListener("click", () => {
  indiceAtivo = (indiceAtivo - 1 + projetos.length) % projetos.length;
  atualizarCarrossel();
});

document.querySelector(".proximo-carrossel").addEventListener("click", () => {
  indiceAtivo = (indiceAtivo + 1) % projetos.length;
  atualizarCarrossel();
});

document.querySelector(".proximo-projeto").addEventListener("click", () => {
  indiceAtivo = (indiceAtivo + 1) % projetos.length;
  atualizarCarrossel();
});

// Clique nas imagens
slots.forEach((slot, i) => {
  slot.addEventListener("click", () => {
    if (i === 1) return; // já é o centro
    indiceAtivo = (indiceAtivo - 1 + i + projetos.length) % projetos.length;
    atualizarCarrossel();
  });
});

// Inicializa
atualizarCarrossel();

// Funcionamento botões ver projetos ou habilidades

const portfolioProjetos = document.querySelector(".portfolio-projetos");
const portfolioProjeto = document.querySelector(".portfolio-projeto");
const portfolioHabilidades = document.querySelector(".portfolio-habilidades");
const botaoProjetos = document.getElementById("projetos");
const botaoHabilidades = document.getElementById("habilidades");

let mostrandoProjetos = true;

function atualizarDisplay() {
  if (mostrandoProjetos) {
    portfolioHabilidades.style.display = "none";

    // portfolioProjetos aparece sempre
    portfolioProjeto.style.display = "grid";

    // portfolioProjeto aparece apenas se a tela for >= 1200px
    if (window.innerWidth >= 1200) {
      portfolioProjetos.style.display = "grid";
    } else {
      portfolioProjetos.style.display = "none";
    }
  } else {
    // Se mostrando habilidades
    portfolioHabilidades.style.display = "grid";
    portfolioProjetos.style.display = "none";
    portfolioProjeto.style.display = "none";
  }
}

// Clique em projetos
botaoProjetos.addEventListener("click", () => {
  mostrandoProjetos = true;
  atualizarDisplay();
});

// Clique em habilidades
botaoHabilidades.addEventListener("click", () => {
  mostrandoProjetos = false;
  atualizarDisplay();
});

// Sempre que a tela for redimensionada
window.addEventListener("resize", atualizarDisplay);

// Inicializa o display
atualizarDisplay();
// Habilidades

const habilidades = [
  {
    id: 1,
    nome: "HTML5",
    sobre:
      "O HTML5 é a versão mais recente do HTML, usada para estruturar e exibir conteúdo na web, com novos recursos para áudio, vídeo e interatividade."
  },
  {
    id: 2,
    nome: "CSS3",
    sobre:
      "O CSS3 é a evolução do CSS, responsável por definir o visual das páginas web, permitindo criar designs modernos com cores, fontes, transições e efeitos visuais."
  },
  {
    id: 3,
    nome: "JavaScript",
    sobre:
      "O JavaScript é uma linguagem de programação que adiciona interatividade às páginas web, permitindo criar animações, validar formulários e tornar o site dinâmico."
  },
  {
    id: 4,
    nome: "Carregando",
    sobre:
      "Habilidade atualmente em desenvolvimento, retorne em breve para conferir as atualizações e acompanhar o progresso dessa área em constante aprimoramento."
  },
  {
    id: 5,
    nome: "Carregando",
    sobre:
      "Habilidade atualmente em desenvolvimento, retorne em breve para conferir as atualizações e acompanhar o progresso dessa área em constante aprimoramento."
  },
  {
    id: 6,
    nome: "Carregando",
    sobre:
      "Habilidade atualmente em desenvolvimento, retorne em breve para conferir as atualizações e acompanhar o progresso dessa área em constante aprimoramento."
  }
];

const habilidade = document.querySelectorAll(".habilidade");
const nomeHabilidade = document.querySelector(".nome-habilidade");
const sobreHabilidade = document.querySelector(".sobre-habilidade");

habilidade.forEach((habilidade, i) => {
  habilidade.addEventListener("mouseenter", () => {
    nomeHabilidade.textContent = habilidades[i].nome;
    sobreHabilidade.textContent = habilidades[i].sobre;
  });
  habilidade.addEventListener("mouseleave", () => {
    nomeHabilidade.textContent = "Conheça sobre";
    sobreHabilidade.textContent =
      "Passe o mouse por cima para ler suas informações.";
  });
});

//Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}