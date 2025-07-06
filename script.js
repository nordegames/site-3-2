// Carrinho
const botoes = document.querySelectorAll('.adicionar');
const lista = document.getElementById('lista-carrinho');
const totalSpan = document.getElementById('total');
const som = document.getElementById('coin');
let total = 0;

botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    const nome = btn.dataset.nome;
    const preco = parseFloat(btn.dataset.preco);
    const item = document.createElement('li');
    item.textContent = `${nome} - R$${preco.toFixed(2)}`;
    lista.appendChild(item);
    total += preco;
    totalSpan.textContent = total.toFixed(2);
    som.play();
  });
});

// Busca de jogos
const campoBusca = document.getElementById('busca');
campoBusca.addEventListener('input', () => {
  const termo = campoBusca.value.toLowerCase();
  document.querySelectorAll('#catalogo .jogo').forEach(jogo => {
    const nome = jogo.dataset.nome.toLowerCase();
    jogo.style.display = nome.includes(termo) ? 'block' : 'none';
  });
});


const botaoDetalhes = document.querySelectorAll('.detalhes');
const popup = document.getElementById('popup');
const fechar = document.getElementById('fechar');

botaoDetalhes.forEach(btn => {
  btn.addEventListener('click', () => {
    popup.classList.remove('oculto');
    // Você pode mudar dinamicamente os dados aqui se quiser vários jogos
  });
});

fechar.addEventListener('click', () => {
  popup.classList.add('oculto');
});
