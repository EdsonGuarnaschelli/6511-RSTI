// Espera o DOM estar completamente carregado antes de rodar o script
document.addEventListener("DOMContentLoaded", () => {
    // Função para atualizar o contador na interface
    function updateQuantity(coffeeId, newQuantity) {
      const counter = document.querySelector(`#counter-${coffeeId}`);
      if (counter) {
        counter.textContent = newQuantity;
      }
    }
  
    // Função para obter a quantidade armazenada no localStorage
    function getStoredQuantity(coffeeId) {
      const storedQuantity = localStorage.getItem(coffeeId);
      return storedQuantity ? parseInt(storedQuantity) : 1; // valor padrão é 1 se não houver no localStorage
    }
  
    // Função para gerenciar os eventos de incremento e decremento
    function setupCoffeeAmountButtons() {
      const incrementButtons = document.querySelectorAll(".increment-btn");
      const decrementButtons = document.querySelectorAll(".decrement-btn");
  
      // Evento de incremento
      incrementButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const coffeeId = event.target.dataset.id; // Pegando o ID do café
          let currentQuantity = parseInt(
            document.querySelector(`#counter-${coffeeId}`).textContent
          );
          currentQuantity++;
          updateQuantity(coffeeId, currentQuantity); // Atualiza na interface
        });
      });
  
      // Evento de decremento
      decrementButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          const coffeeId = event.target.dataset.id; // Pegando o ID do café
          let currentQuantity = parseInt(
            document.querySelector(`#counter-${coffeeId}`).textContent
          );
          if (currentQuantity > 1) {
            currentQuantity--;
            updateQuantity(coffeeId, currentQuantity); // Atualiza na interface
          }
        });
      });
    }
  
    // Função para salvar no localStorage quando o ícone do carrinho for clicado
    function setupCartButtonListeners() {
      const cartButtons = document.querySelectorAll(".shopping-btn");
  
      cartButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
          // Encontrando o ID do café associado ao botão (utilizando data-id)
          const coffeeCard = event.target.closest(".coffe-card");
          const coffeeId = coffeeCard ? coffeeCard.dataset.id : null; // Obtém o ID do café a partir do data-id
          const quantity = parseInt(
            document.querySelector(`#counter-${coffeeId}`).textContent
          );
  
          if (coffeeId) {
            // Armazenando a quantidade no localStorage
            localStorage.setItem(coffeeId, quantity);
            console.log(
              `Quantidade de ${coffeeId} salva no localStorage: ${quantity}`
            );
          }
        });
      });
    }
  
    // Função para inicializar as quantidades armazenadas ao carregar a página
    function initializeCoffeeQuantities() {
      const coffeeIds = [
        "tradicional",
        "americano",
        "cremoso",
        "gelado",
        "comLeite",
        "latte",
        "cappuccino",
        "macchiato",
        "mochaccino",
        "chocolate",
        "cubano",
        "havainano",
        "arabe",
        "irlandes",
      ]; // Lista de IDs dos cafés
  
      coffeeIds.forEach((coffeeId) => {
        const storedQuantity = getStoredQuantity(coffeeId);
        const counterElement = document.querySelector(`#counter-${coffeeId}`);
  
        if (counterElement) {
          counterElement.textContent = storedQuantity; // Atualiza o contador com a quantidade armazenada
        } else {
          console.error(`Elemento com ID #counter-${coffeeId} não encontrado!`);
        }
      });
    }
  
    // Chama as funções para configurar os botões e inicializar as quantidades
    setupCoffeeAmountButtons();
    setupCartButtonListeners(); // Adiciona o evento no botão do carrinho
    initializeCoffeeQuantities();
  });
  
  // Função para salvar a quantidade e o valor no localStorage
  function updateCartData() {
    const cart = {
      tradicional: parseInt(localStorage.getItem("tradicional")) || 0,
      americano: parseInt(localStorage.getItem("americano")) || 0,
      cremoso: parseInt(localStorage.getItem("cremoso")) || 0,
      gelado: parseInt(localStorage.getItem("gelado")) || 0,
      comleite: parseInt(localStorage.getItem("gelado")) || 0,
      latte: parseInt(localStorage.getItem("gelado")) || 0,
      cappuccino: parseInt(localStorage.getItem("capuccino")) || 0,
      macchiato: parseInt(localStorage.getItem("machiatto")) || 0,
     mochaccino: parseInt(localStorage.getItem("mochaccino")) || 0,
     chocolate: parseInt(localStorage.getItem("chocolate")) || 0,
     cubano: parseInt(localStorage.getItem("cubano")) || 0,
     havaiano: parseInt(localStorage.getItem("havaiano")) || 0,
     arabe: parseInt(localStorage.getItem("arabe")) || 0,
     irlandes: parseInt(localStorage.getItem("irlandes")) || 0,
    };
  
    // Atualiza o contador no carrinho (icônico)
    const totalItems =
    cart.tradicional * 9.9 + cart.americano * 9.9 + cart.cremoso* 9.9 + cart.gelado * 9.9 + cart.comleite * 9.9 + cart.latte * 9.9 + cart.cappuccino * 9.9 + cart.macchiato * 9.9 + cart.mochaccino * 9.9 + cart.chocolate * 9.9 + cart.cubano* 9.9 + cart.havainano* 9.9 + cart.arabe * 9.9 + cart.irlandes * 9.9;
    const totalValue =
    cart.tradicional * 9.9 +
    cart.americano * 9.9 +
    cart.cremoso* 9.9 +
    cart.gelado * 9.9 +   
    cart.comleite * 9.9 +
    cart.latte * 9.9 +  
    cart.cappuccino * 9.9 +
    cart.macchiato * 9.9 +
    cart.mochaccino * 9.9 +
    cart.chocolate * 9.9 +
    cart.cubano* 9.9 +
    cart.havainano* 9.9 +
    cart.arabe * 9.9 +
    cart.irlandes * 9.9;
    
  
    // Atualizar o número de itens no ícone do carrinho
    const cartIcon = document.getElementById("header-shopping-btn");
    const cartCount = document.getElementById("cart-count");
  
    if (totalItems > 0) {
      cartCount.textContent = totalItems;
      cartCount.style.display = "inline"; // Mostra o contador
    } else {
      cartCount.style.display = "none"; // Esconde o contador
    }
  
    // Atualiza o valor total no carrinho
    const totalPrice = document.getElementById("total-price");
    totalPrice.textContent = `R$ ${totalValue.toFixed(2)}`;
  
    // Salva os dados no localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  
  // Atualiza o carrinho ao carregar a página
  document.addEventListener("DOMContentLoaded", updateCartData);
  
  // Lógica de incremento e decremento das quantidades
  document.querySelectorAll(".increment-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const currentCount = parseInt(localStorage.getItem(id)) || 0;
      localStorage.setItem(id, currentCount + 1);
      updateCartData();
    });
  });
  
  document.querySelectorAll(".decrement-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.getAttribute("data-id");
      const currentCount = parseInt(localStorage.getItem(id)) || 0;
      if (currentCount > 0) {
        localStorage.setItem(id, currentCount - 1);
      }
      updateCartData();
    });
  });
  
  // Lógica para adicionar ao carrinho
  document.querySelectorAll(".shopping-btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = e.target.closest(".coffe-card").getAttribute("data-id");
      const currentCount = parseInt(localStorage.getItem(id)) || 0;
      localStorage.setItem(id, currentCount + 1);
      updateCartData();
    });
  });