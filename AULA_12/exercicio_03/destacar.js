document.getElementById("nome").addEventListener("input", function () {
  const nomeDigitado = this.value.toLowerCase();
  const itens = document.querySelectorAll("#lista li");

  itens.forEach((item) => {
    // Remove classe de destaque
    item.classList.remove("bold");

    // Verifica se o texto digitado está contido no item da lista
    if (
      item.textContent.toLowerCase().includes(nomeDigitado) &&
      nomeDigitado !== ""
    ) {
      item.classList.add("bold");
    }
  });
});
