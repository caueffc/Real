async function exibirProduto() {
  // pega o id da url
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  // carrega os produtos do model
  const produtos = await carregarProdutos();
  const produto = produtos.find(p => p.id == id);

  if (produto) {
    document.getElementById("produto-imagem").src = "../" + produto.imagem;
    document.getElementById("produto-nome").textContent = produto.nome;
    document.getElementById("produto-descricao").textContent = produto.descricao;
    document.getElementById("produto-preco").textContent = "R$ " + produto.preco.toFixed(2);
  } else {
    document.body.innerHTML = "<h1>Produto não encontrado!</h1>";
  }
}

exibirProduto();
// Função para pegar parâmetro da URL
function getParametro(nome) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nome);
}

// Pegar o ID do produto da URL
const produtoId = getParametro("id");

if (produtoId) {
  fetch("../data/produtos.json")
    .then(res => res.json())
    .then(produtos => {
      const produto = produtos.find(p => p.id == produtoId);

      if (produto) {
        document.getElementById("produto-container").innerHTML = `
          <div class="produto-detalhe">
            <img src="../img/${produto.imagem}" alt="${produto.nome}">
            <h2>${produto.nome}</h2>
            <p>${produto.descricao}</p>
            <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id}, '${produto.nome}', ${produto.preco}, '${produto.imagem}')">
              Comprar
            </button>
          </div>
        `;
      } else {
        document.getElementById("produto-container").innerHTML = `<p>Produto não encontrado!</p>`;
      }
    });
}