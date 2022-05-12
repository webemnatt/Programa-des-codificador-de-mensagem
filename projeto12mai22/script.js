function botaoCopiar() {
  const textoCopiado = document.querySelector(".mensagem");

  textoCopiado.select();
  document.execCommand("copy");
}

const inputTexto = document.querySelector(".input-texto");

const mensagem = document.querySelector(".mensagem");

const codigo = document.querySelector(".input-texto");

function botaoCodificar() {
  const textoEncriptado = codificar(inputTexto.value);
  mensagem.value = textoEncriptado;
  mensagem.style.backgroundImage = "none";
}

function botaoDescodificar() {
  const textDeCodificado = descodificar(codigo.value);
  mensagem.value = textDeCodificado;
  mensagem.style.backgroundImage = "none";
}

let matrizCodigo = [
  ["a", "ai"],
  ["ã", "nh"],
  ["á", "rv"],
  ["e", "enter"],
  ["é", "pic"],
  ["ê", "nf"],
  ["i", "imes"],
  ["í", "nd"],
  ["o", "ober"],
  ["ó", "dio"],
  ["ô", "mega"],
  ["u", "ufat"],
  ["ú", "lt"],
];

function codificar(textoNormal) {
  textoNormal = textoNormal.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (textoNormal.includes(matrizCodigo[i][0])) {
      textoNormal = textoNormal.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return textoNormal;
}

function descodificar(stringCodificada) {
  stringCodificada = stringCodificada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringCodificada.includes(matrizCodigo[i][1])) {
      stringCodificada = stringCodificada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringCodificada;
}
