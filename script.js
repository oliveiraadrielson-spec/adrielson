
// Produtos do Paraná
const produtos = [
    { nome: "Soja", descricao: "Uma das maiores produções do estado, usada na alimentação e exportação." },
    { nome: "Milho", descricao: "Fundamental para ração animal e consumo humano." },
    { nome: "Café", descricao: "Cultura tradicional, especialmente em regiões altas." },
    { nome: "Frango", descricao: "Produção de carnes de alta qualidade para o Brasil e exportação." },
    { nome: "Suínos", descricao: "Criação intensiva e moderna, destaque nacional." },
];

const container = document.getElementById("produtos-container");

produtos.forEach(produto => {
    const div = document.createElement("div");
    div.classList.add("produto");
    div.innerHTML = `<h3>${produto.nome}</h3><p>${produto.descricao}</p>`;
    container.appendChild(div);
});

// Formulário de contato
const form = document.getElementById("form-contato");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    mensagemSucesso.classList.remove("hidden");
    form.reset();
});
