document.getElementById("numero").addEventListener("input", function () {
  const numero = parseInt(this.value);
  const tabuadaElement = document.getElementById("tabuada");

  // Limpar a tabuada anterior
  tabuadaElement.innerHTML = "";

  // Verificar se o número é válido
  if (!isNaN(numero)) {
    for (let i = 1; i <= 10; i++) {
      const li = document.createElement("li");
      li.textContent = `${numero} x ${i} = ${numero * i}`;
      tabuadaElement.appendChild(li);
    }
  }
});
