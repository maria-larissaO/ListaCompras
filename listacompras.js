//Lista de compras
let listaCompras = [];

function adicionarItem() {
  const item = prompt("Digite o nome do item: ");
  listaCompras.push(item);
  console.log(`${item} adicionado à lista!`);
}

function removerItem() {
  const item = prompt("Digite o nome do item a ser removido:");
  const index = listaCompras.indexOf(item);
  if (index !== -1) {
    listaCompras.splice(index, 1);
    console.log(`${item} removido da lista!`);
  } else {
    console.log("Item não encontrado na lista.");
  }
}

function pesquisarItem() {
  const item = prompt("Digite o nome do item a ser pesquisado:");
  if (listaCompras.includes(item)) {
    console.log(`${item} está na lista!`);
  } else {
    console.log(`${item} não está na lista.`);
  }
}

function ordenarLista() {
  listaCompras.sort();
  console.log("Lista ordenada alfabeticamente.");
}

function exibirLista() {
  if (listaCompras.length === 0) {
    console.log("Sua lista está vazia.");
  } else {
    console.log("Sua lista de compras:");
    listaCompras.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

function limparLista() {
  listaCompras = [];
  console.log("Lista de compras limpa!");
}

// Laço principal do programa
while (true) {
  console.log("\n--- Gerenciador de Lista de Compras ---");
  console.log("1. Adicionar item");
  console.log("2. Remover item");
  console.log("3. Pesquisar item");
  console.log("4. Ordenar lista");
  console.log("5. Exibir lista");
  console.log("6. Limpar lista");
  console.log("0. Sair");

  const opcao = parseInt(prompt("Escolha uma opção:"));

  switch (opcao) {
    case 1:
      adicionarItem();
      break;
    case 2:
      removerItem();
      break;
    case 3:
      pesquisarItem();
      break;
    case 4:
      ordenarLista();
      break;
    case 5:
      exibirLista();
      break;
    case 6:
      limparLista();
      break;
    case 0:
      console.log("Encerrando o programa...");
      process.exit();
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
