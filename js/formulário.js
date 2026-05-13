function calcOrcamento() {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cidade = document.getElementById("cidade").value;
  const dataEntrega = document.getElementById("dataEntrega").value;
  const observacoes = document.getElementById("observacoes").value;

  let mesas = "";
  let valorMesas = 0;

  if (document.getElementById("rede").checked) {
    mesas += "Mesa de Rede, ";
    valorMesas += 1500;
  }

  if (document.getElementById("redeGrande").checked) {
    mesas += "Mesa de Rede Grande, ";
    valorMesas += 2500;
  }

  if (document.getElementById("cacapa").checked) {
    mesas += "Mesa de Caçapa, ";
    valorMesas += 3000;
  }

  if (document.getElementById("cacapaGrande").checked) {
    mesas += "Mesa de Caçapa Grande, ";
    valorMesas += 4500;
  }

  if (document.getElementById("pebolim").checked) {
    mesas += "Pebolim, ";
    valorMesas += 1200;
  }

  if (document.getElementById("tenis").checked) {
    mesas += "Tênis de Mesa, ";
    valorMesas += 1800;
  }

  if (mesas === "") {
    alert("Selecione pelo menos uma mesa!");
    return;
  }

  document.getElementById("orcamentoResult").style.display = "block";

  document.getElementById("nomeOrcamento").innerHTML = nome;
  document.getElementById("resultOrcamento").innerHTML = email;
  document.getElementById("telOrcamento").innerHTML = telefone;
  document.getElementById("cidadeOrcamento").innerHTML = cidade;
  document.getElementById("dataOrcamento").innerHTML = dataEntrega;
  document.getElementById("mesasOrcamento").innerHTML = mesas;
  document.getElementById("valorOrcamento").innerHTML = valorMesas.toFixed(2);
  document.getElementById("obsOrcamento").innerHTML = observacoes;
}

function novoOrcamento() {
  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("cidade").selectedIndex = 0;
  document.getElementById("dataEntrega").value = "";
  document.getElementById("observacoes").value = "";
  document.getElementById("rede").checked = false;
  document.getElementById("redeGrande").checked = false;
  document.getElementById("cacapa").checked = false;
  document.getElementById("cacapaGrande").checked = false;
  document.getElementById("pebolim").checked = false;
  document.getElementById("tenis").checked = false;

  document.getElementById("orcamentoResult").style.display = "none";
}
