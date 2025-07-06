// carrinho.js
let carrinho = [];

function adicionarAoCarrinho(jogo) {
  carrinho.push(jogo);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById('lista-carrinho');
  const total = document.getElementById('valor-total');
  lista.innerHTML = '';

  let valorTotal = 0;

  carrinho.forEach((item, index) => {
    valorTotal += parseFloat(item.preco.replace('R$', '').replace(',', '.'));
    lista.innerHTML += `<li>${item.nome} - ${item.preco} <button onclick="removerItem(${index})">Remover</button></li>`;
  });

  total.textContent = `Total: R$${valorTotal.toFixed(2)}`;
}

function removerItem(index) {
  carrinho.splice(index, 1);
  atualizarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

function carregarCarrinho() {
  const carrinhoSalvo = localStorage.getItem('carrinho');
  if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
    atualizarCarrinho();
  }
}

// Chamar ao carregar página
carregarCarrinho();

adicionarAoCarrinho({ nome: "God of War II", preco: "R$39,90" });
