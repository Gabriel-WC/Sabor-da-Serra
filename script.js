const menuItems = [
  {
    id: 1, name: "Pão de Queijo da Serra", category: "entradas",
    description: "Pão de queijo artesanal, crocante por fora e macio por dentro. Porção com 8 unidades.",
    price: 18.9, image: "imagens/pratos/pao-de-queijo.jpg", prep: "15–20 min", serves: "1–2 pessoas", rating: 4.9,
    ingredients: "Queijo curado, polvilho, ovos, leite e manteiga.", badge: "Artesanal", featured: true
  },
  {
    id: 2, name: "Tábua de Frios Mineira", category: "entradas",
    description: "Queijo canastra, salame, presunto cru, azeitonas, mel e nozes.",
    price: 42.0, image: "imagens/pratos/tabua-de-frios.jpg", prep: "10–15 min", serves: "2 pessoas", rating: 4.8,
    ingredients: "Queijo canastra, salame, presunto cru, azeitonas, mel e nozes.", badge: "Para compartilhar"
  },
  {
    id: 3, name: "Sopa de Legumes da Montanha", category: "entradas",
    description: "Sopa cremosa de legumes da estação acompanhada de pão caseiro na chapa.",
    price: 24.9, image: "imagens/pratos/sopa-de-legumes.jpg", prep: "20–25 min", serves: "1 pessoa", rating: 4.7,
    ingredients: "Legumes da estação, ervas frescas, caldo artesanal e pão caseiro.", badge: "Conforto"
  },
  {
    id: 4, name: "Pizza Margherita da Roça", category: "pizzas",
    description: "Molho de tomate caseiro, mussarela de búfala, manjericão fresco e azeite.",
    price: 49.9, image: "imagens/pratos/pizza-margherita.jpg", prep: "25–35 min", serves: "2 pessoas", rating: 4.9,
    ingredients: "Massa artesanal, tomate, mussarela de búfala, manjericão e azeite.", badge: "Mais pedido", featured: true
  },
  {
    id: 5, name: "Pizza Calabresa Especial", category: "pizzas",
    description: "Calabresa artesanal, cebola caramelizada, mussarela e orégano.",
    price: 54.9, image: "imagens/pratos/pizza-calabresa.jpg", prep: "25–35 min", serves: "2 pessoas", rating: 4.9,
    ingredients: "Massa artesanal, calabresa, cebola caramelizada, mussarela e orégano.", badge: "Favorita", featured: true
  },
  {
    id: 6, name: "Pizza de Peito de Peru", category: "pizzas",
    description: "Peito de peru defumado, catupiry, milho verde e manjericão.",
    price: 56.9, image: "imagens/pratos/pizza-peito-de-peru.jpg", prep: "25–35 min", serves: "2 pessoas", rating: 4.8,
    ingredients: "Massa artesanal, peito de peru, catupiry, milho e manjericão.", badge: "Cremosa"
  },
  {
    id: 7, name: "Pizza de Champignon", category: "pizzas",
    description: "Champignon refogado, mussarela, alho-poró e parmesão ralado.",
    price: 52.9, image: "imagens/pratos/pizza-champignon.jpg", prep: "25–35 min", serves: "2 pessoas", rating: 4.7,
    ingredients: "Massa artesanal, champignon, mussarela, alho-poró e parmesão.", badge: "Vegetariana"
  },
  {
    id: 8, name: "Refrigerante Artesanal", category: "bebidas",
    description: "Opções de guaraná, laranja ou limão. Garrafa individual de 350 ml.",
    price: 9.9, image: "imagens/pratos/refrigerante-artesanal.jpg", prep: "Pronto", serves: "350 ml", rating: 4.7,
    ingredients: "Base gaseificada artesanal e sabores selecionados.", badge: "Gelado"
  },
  {
    id: 9, name: "Suco Natural da Estação", category: "bebidas",
    description: "Laranja, limão, maracujá ou abacaxi. Copo de 400 ml.",
    price: 12.9, image: "imagens/pratos/suco-natural.jpg", prep: "5–10 min", serves: "400 ml", rating: 4.8,
    ingredients: "Fruta fresca da estação, água e gelo.", badge: "Natural"
  },
  {
    id: 10, name: "Chá Gelado de Hortelã", category: "bebidas",
    description: "Chá preto com hortelã fresca e limão. Copo de 400 ml.",
    price: 10.9, image: "imagens/pratos/cha-gelado.jpg", prep: "5 min", serves: "400 ml", rating: 4.8,
    ingredients: "Chá preto, hortelã, limão, gelo e toque de açúcar.", badge: "Refrescante"
  },
  {
    id: 11, name: "Doce de Leite com Queijo", category: "sobremesas",
    description: "Clássico mineiro: doce de leite caseiro acompanhado de queijo canastra.",
    price: 19.9, image: "imagens/pratos/doce-de-leite.jpg", prep: "5–10 min", serves: "1 pessoa", rating: 4.9,
    ingredients: "Doce de leite artesanal e queijo canastra.", badge: "Clássico"
  },
  {
    id: 12, name: "Torta de Maçã Caramelizada", category: "sobremesas",
    description: "Torta quente de maçã com calda de caramelo e sorvete de creme.",
    price: 23.9, image: "imagens/pratos/torta-de-maca.jpg", prep: "15 min", serves: "1 pessoa", rating: 4.9,
    ingredients: "Maçã, canela, massa amanteigada, caramelo e sorvete de creme.", badge: "Especial"
  },
  {
    id: 13, name: "Brigadeiro de Panela", category: "sobremesas",
    description: "Brigadeiro cremoso servido na panela de ferro com colher de pau.",
    price: 16.9, image: "imagens/pratos/brigadeiro.jpg", prep: "10 min", serves: "1 pessoa", rating: 4.8,
    ingredients: "Chocolate, leite condensado, manteiga e granulado.", badge: "Cremoso"
  }
];

const CART_STORAGE_KEY = "sabor-da-serra-cart";
const FAVORITES_STORAGE_KEY = "sabor-da-serra-favorites";
const WHATSAPP_NUMBER = ""; // Ex.: 5547999999999 — configure o número real antes do deploy.

let cart = loadCart();
let favorites = loadFavorites();
let currentCategory = "todos";
let searchTerm = "";
let favoritesOnly = false;
let selectedProductId = null;
let selectedProductQuantity = 1;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const menuGrid = $("#menuGrid");
const featuredGrid = $("#featuredGrid");
const emptyState = $("#emptyState");
const searchInput = $("#searchInput");
const favoritesFilter = $("#favoritesFilter");
const categoryButtons = $$(".category");
const cartToggle = $("#cartToggle");
const cartPanel = $("#cartPanel");
const cartOverlay = $("#cartOverlay");
const cartClose = $("#cartClose");
const cartBody = $("#cartBody");
const cartSubtotal = $("#cartSubtotal");
const cartTotal = $("#cartTotal");
const cartCount = $("#cartCount");
const cartProgressText = $("#cartProgressText");
const cartProgressBar = $("#cartProgressBar");
const orderNote = $("#orderNote");
const checkoutBtn = $("#checkoutBtn");
const heroOrderBtn = $("#heroOrderBtn");
const footerCartBtn = $("#footerCartBtn");
const backToTop = $("#backToTop");
const toast = $("#toast");
const toastMessage = $("#toastMessage");

const productModal = $("#productModal");
const productModalClose = $("#productModalClose");
const productModalImage = $("#productModalImage");
const productModalBadge = $("#productModalBadge");
const productModalCategory = $("#productModalCategory");
const productModalRating = $("#productModalRating");
const productModalTitle = $("#productModalTitle");
const productModalDescription = $("#productModalDescription");
const productModalPrep = $("#productModalPrep");
const productModalServes = $("#productModalServes");
const productModalIngredients = $("#productModalIngredients");
const productModalPrice = $("#productModalPrice");
const productModalNote = $("#productModalNote");
const productQuantity = $("#productQuantity");
const productQuantityDecrease = $("#productQuantityDecrease");
const productQuantityIncrease = $("#productQuantityIncrease");
const productModalAdd = $("#productModalAdd");
const productModalAddTotal = $("#productModalAddTotal");

function formatCurrency(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function getCategoryLabel(category) {
  return ({ entradas: "Entradas", pizzas: "Pizzas", bebidas: "Bebidas", sobremesas: "Sobremesas" })[category] || category;
}

function safeParse(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function loadCart() {
  const parsed = safeParse(CART_STORAGE_KEY, []);
  if (!Array.isArray(parsed)) return [];
  return parsed.flatMap((item) => {
    const source = menuItems.find((menuItem) => menuItem.id === Number(item.id));
    const quantity = Math.floor(Number(item.quantity));
    if (!source || quantity <= 0) return [];
    return [{ id: source.id, quantity, note: typeof item.note === "string" ? item.note.slice(0, 120) : "" }];
  });
}

function loadFavorites() {
  const parsed = safeParse(FAVORITES_STORAGE_KEY, []);
  if (!Array.isArray(parsed)) return new Set();
  return new Set(parsed.map(Number).filter((id) => menuItems.some((item) => item.id === id)));
}

function saveCart() {
  try { localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart)); } catch {}
}

function saveFavorites() {
  try { localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify([...favorites])); } catch {}
}

function getCartSource(cartItem) {
  return menuItems.find((item) => item.id === cartItem.id);
}

function renderFeatured() {
  const featured = menuItems.filter((item) => item.featured).slice(0, 3);
  featuredGrid.innerHTML = featured.map((item) => `
    <article class="featured-card reveal" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${item.name}">
      <img src="${item.image}" alt="${item.name}" loading="lazy" width="700" height="800" onerror="this.onerror=null;this.src='imagens/placeholder.svg'">
      <span class="featured-card__badge">${item.badge}</span>
      <button type="button" class="featured-card__favorite ${favorites.has(item.id) ? "is-active" : ""}" data-favorite-id="${item.id}" aria-label="${favorites.has(item.id) ? "Remover" : "Adicionar"} ${item.name} dos favoritos" aria-pressed="${favorites.has(item.id)}">${favorites.has(item.id) ? "♥" : "♡"}</button>
      <div class="featured-card__body">
        <div class="featured-card__meta"><span>★ ${item.rating.toFixed(1).replace(".", ",")}</span><span>${item.prep}</span></div>
        <h3>${item.name}</h3>
        <div class="featured-card__bottom"><span class="featured-card__price">${formatCurrency(item.price)}</span><span class="featured-card__open" aria-hidden="true">↗</span></div>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function renderMenu() {
  const normalizedTerm = searchTerm.toLocaleLowerCase("pt-BR");
  const filtered = menuItems.filter((item) => {
    const searchable = `${item.name} ${item.description} ${item.ingredients} ${getCategoryLabel(item.category)}`.toLocaleLowerCase("pt-BR");
    return (currentCategory === "todos" || item.category === currentCategory)
      && (!normalizedTerm || searchable.includes(normalizedTerm))
      && (!favoritesOnly || favorites.has(item.id));
  });

  emptyState.hidden = filtered.length !== 0;
  menuGrid.hidden = filtered.length === 0;
  menuGrid.innerHTML = filtered.map((item, index) => `
    <article class="card reveal" data-id="${item.id}" tabindex="0" role="button" aria-label="Ver detalhes de ${item.name}" style="transition-delay:${Math.min(index, 6) * 35}ms">
      <div class="card__visual">
        <img class="card__image" src="${item.image}" alt="${item.name}" loading="lazy" width="560" height="430" onerror="this.onerror=null;this.src='imagens/placeholder.svg'">
        <span class="card__badge">${item.badge}</span>
        <button type="button" class="card__favorite ${favorites.has(item.id) ? "is-active" : ""}" data-favorite-id="${item.id}" aria-label="${favorites.has(item.id) ? "Remover" : "Adicionar"} ${item.name} dos favoritos" aria-pressed="${favorites.has(item.id)}">${favorites.has(item.id) ? "♥" : "♡"}</button>
      </div>
      <div class="card__body">
        <div class="card__topline"><span>${getCategoryLabel(item.category)}</span><span class="card__rating">★ ${item.rating.toFixed(1).replace(".", ",")}</span></div>
        <h3 class="card__title">${item.name}</h3>
        <p class="card__description">${item.description}</p>
        <div class="card__facts"><span>${item.prep}</span><span>${item.serves}</span></div>
        <div class="card__footer">
          <div class="card__price-wrap"><small>a partir de</small><span class="card__price">${formatCurrency(item.price)}</span></div>
          <button type="button" class="card__add" data-id="${item.id}" aria-label="Adicionar ${item.name} ao pedido"><span aria-hidden="true">＋</span> Adicionar</button>
        </div>
      </div>
    </article>
  `).join("");
  observeReveals();
}

function toggleFavorite(id) {
  if (favorites.has(id)) favorites.delete(id); else favorites.add(id);
  saveFavorites();
  renderFeatured();
  renderMenu();
  const item = menuItems.find((product) => product.id === id);
  showToast(favorites.has(id) ? `${item.name} salvo nos favoritos.` : `${item.name} removido dos favoritos.`);
}

function updateModalTotal() {
  const item = menuItems.find((product) => product.id === selectedProductId);
  if (!item) return;
  productQuantity.textContent = selectedProductQuantity;
  productModalAddTotal.textContent = formatCurrency(item.price * selectedProductQuantity);
}

function openProductModal(id, source = "menu") {
  const item = menuItems.find((product) => product.id === Number(id));
  if (!item) return;
  selectedProductId = item.id;
  selectedProductQuantity = 1;

  productModalImage.src = item.image;
  productModalImage.alt = item.name;
  productModalImage.onerror = () => { productModalImage.onerror = null; productModalImage.src = "imagens/placeholder.svg"; };
  productModalBadge.textContent = item.badge;
  productModalCategory.textContent = getCategoryLabel(item.category);
  productModalRating.textContent = item.rating.toFixed(1).replace(".", ",");
  productModalTitle.textContent = item.name;
  productModalDescription.textContent = item.description;
  productModalPrep.textContent = item.prep;
  productModalServes.textContent = item.serves;
  productModalIngredients.textContent = item.ingredients;
  productModalPrice.textContent = formatCurrency(item.price);

  const existingCartItem = cart.find((cartItem) => cartItem.id === item.id);
  productModalNote.value = source === "cart" && existingCartItem ? existingCartItem.note || "" : "";
  updateModalTotal();

  if (typeof productModal.showModal === "function") productModal.showModal();
  else productModal.setAttribute("open", "");
}

function closeProductModal() {
  if (typeof productModal.close === "function" && productModal.open) productModal.close();
  else productModal.removeAttribute("open");
  selectedProductId = null;
}

function changeProductQuantity(delta) {
  selectedProductQuantity = Math.max(1, Math.min(20, selectedProductQuantity + delta));
  updateModalTotal();
}

function addToCart(id, quantity = 1, note = "") {
  const item = menuItems.find((product) => product.id === Number(id));
  if (!item) return;
  const existing = cart.find((cartItem) => cartItem.id === item.id);
  if (existing) {
    existing.quantity += quantity;
    if (note.trim()) existing.note = note.trim();
  } else {
    cart.push({ id: item.id, quantity, note: note.trim() });
  }
  saveCart();
  updateCartUI();
  showToast(`${quantity > 1 ? `${quantity}x ` : ""}${item.name} adicionado ao pedido.`);
  bumpCart();
}

function addSelectedProductToCart() {
  if (!selectedProductId) return;
  addToCart(selectedProductId, selectedProductQuantity, productModalNote.value);
  closeProductModal();
  openCart();
}

function removeFromCart(id) {
  const item = menuItems.find((product) => product.id === id);
  cart = cart.filter((cartItem) => cartItem.id !== id);
  saveCart();
  updateCartUI();
  if (item) showToast(`${item.name} removido do pedido.`);
}

function changeQuantity(id, delta) {
  const cartItem = cart.find((item) => item.id === id);
  if (!cartItem) return;
  cartItem.quantity += delta;
  if (cartItem.quantity <= 0) return removeFromCart(id);
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => {
    const source = getCartSource(item);
    return sum + (source ? source.price * item.quantity : 0);
  }, 0);

  cartCount.textContent = totalItems;
  cartCount.dataset.count = String(totalItems);
  cartSubtotal.textContent = formatCurrency(totalPrice);
  cartTotal.textContent = formatCurrency(totalPrice);
  checkoutBtn.disabled = cart.length === 0;

  const progress = Math.min(100, (totalItems / 4) * 100);
  cartProgressBar.style.width = `${progress}%`;
  cartProgressText.textContent = totalItems === 0 ? "Adicione itens ao seu pedido" : totalItems < 4 ? `${totalItems} ${totalItems === 1 ? "item" : "itens"} no pedido • continue explorando` : `${totalItems} itens • pedido bem servido`;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <div class="cart__empty">
        <strong>Seu carrinho está vazio.</strong>
        <span>Escolha um produto no cardápio e toque em “Adicionar” para incluí-lo no pedido.</span>
        ${favorites.size ? '<button type="button" class="cart__favorites-cta" data-action="show-favorites">♡ Ver meus favoritos</button>' : ''}
      </div>`;
    return;
  }

  cartBody.innerHTML = cart.map((cartItem) => {
    const item = getCartSource(cartItem);
    if (!item) return "";
    return `
      <article class="cart-item">
        <button type="button" class="cart-item__product" data-action="details" data-id="${item.id}" aria-label="Ver detalhes de ${item.name}">
          <img class="cart-item__image" src="${item.image}" alt="${item.name}" width="70" height="70" onerror="this.onerror=null;this.src='imagens/placeholder.svg'">
          <span class="cart-item__copy">
            <span class="cart-item__name">${item.name}</span>
            ${cartItem.note ? `<span class="cart-item__note">Obs.: ${escapeHtml(cartItem.note)}</span>` : ""}
            <span class="cart-item__unit">${formatCurrency(item.price)} cada</span>
          </span>
        </button>
        <div class="cart-item__side">
          <span class="cart-item__price">${formatCurrency(item.price * cartItem.quantity)}</span>
          <div>
            <div class="cart-item__actions">
              <button type="button" class="cart-item__btn" data-action="decrease" data-id="${item.id}" aria-label="Diminuir quantidade">−</button>
              <span class="cart-item__qty">${cartItem.quantity}</span>
              <button type="button" class="cart-item__btn" data-action="increase" data-id="${item.id}" aria-label="Aumentar quantidade">+</button>
            </div>
            <button type="button" class="cart-item__remove" data-action="remove" data-id="${item.id}">Remover</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function openCart() {
  cartPanel.classList.add("is-open");
  cartPanel.setAttribute("aria-hidden", "false");
  cartToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
  setTimeout(() => cartClose.focus(), 120);
}

function closeCart() {
  cartPanel.classList.remove("is-open");
  cartPanel.setAttribute("aria-hidden", "true");
  cartToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

function showToast(message) {
  toastMessage.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

function bumpCart() {
  cartToggle.animate([
    { transform: "scale(1)" },
    { transform: "scale(1.08)" },
    { transform: "scale(1)" }
  ], { duration: 320, easing: "ease-out" });
}

function generateWhatsAppMessage() {
  const lines = cart.flatMap((cartItem) => {
    const item = getCartSource(cartItem);
    if (!item) return [];
    const line = `• ${cartItem.quantity}x ${item.name} — ${formatCurrency(item.price * cartItem.quantity)}`;
    return cartItem.note ? [line, `  Obs.: ${cartItem.note}`] : [line];
  });
  const totalPrice = cart.reduce((sum, cartItem) => {
    const item = getCartSource(cartItem);
    return sum + (item ? item.price * cartItem.quantity : 0);
  }, 0);

  return encodeURIComponent([
    "Olá! Gostaria de fazer um pedido no Sabor da Serra:", "", ...lines, "",
    `Total dos itens: ${formatCurrency(totalPrice)}`,
    orderNote.value.trim() ? `Observações gerais: ${orderNote.value.trim()}` : "",
    "", "Aguardo a confirmação de entrega e pagamento. Obrigado!"
  ].filter(Boolean).join("\n"));
}

function handleCheckout() {
  if (cart.length === 0) return;
  if (!/^55\d{10,13}$/.test(WHATSAPP_NUMBER)) {
    showToast("Configure o número do WhatsApp no script.js antes do deploy.");
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`, "_blank", "noopener,noreferrer");
}

function observeReveals() {
  const nodes = $$(".reveal:not(.is-visible)");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }
  if (!observeReveals.observer) {
    observeReveals.observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.revealDelay || 0);
        setTimeout(() => entry.target.classList.add("is-visible"), delay);
        observer.unobserve(entry.target);
      });
    }, { threshold: .08, rootMargin: "0px 0px -30px" });
  }
  nodes.forEach((node) => observeReveals.observer.observe(node));
}

function handleScroll() {
  const y = window.scrollY;
  $(".header").classList.toggle("is-scrolled", y > 12);
  backToTop.classList.toggle("is-visible", y > 650);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && window.innerWidth > 800) {
    const heroImage = $(".hero__image-wrap img");
    if (heroImage && y < 850) heroImage.style.transform = `scale(1.07) translateY(${Math.min(18, y * .018)}px)`;
  }
}

searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim();
  renderMenu();
});

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((item) => { item.classList.remove("category--active"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("category--active");
    button.setAttribute("aria-pressed", "true");
    currentCategory = button.dataset.category;
    renderMenu();
  });
});

favoritesFilter.addEventListener("click", () => {
  favoritesOnly = !favoritesOnly;
  favoritesFilter.classList.toggle("is-active", favoritesOnly);
  favoritesFilter.setAttribute("aria-pressed", String(favoritesOnly));
  renderMenu();
});

function handleProductAreaClick(event, area) {
  const favoriteButton = event.target.closest("[data-favorite-id]");
  if (favoriteButton) {
    event.stopPropagation();
    toggleFavorite(Number(favoriteButton.dataset.favoriteId));
    return;
  }
  const addButton = event.target.closest(".card__add");
  if (addButton) {
    event.stopPropagation();
    addToCart(Number(addButton.dataset.id));
    return;
  }
  const card = event.target.closest(area);
  if (card) openProductModal(Number(card.dataset.id));
}

menuGrid.addEventListener("click", (event) => handleProductAreaClick(event, ".card"));
featuredGrid.addEventListener("click", (event) => handleProductAreaClick(event, ".featured-card"));

[menuGrid, featuredGrid].forEach((grid) => grid.addEventListener("keydown", (event) => {
  if (event.target.closest("button")) return;
  const card = event.target.closest("[data-id]");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openProductModal(Number(card.dataset.id));
  }
}));

cartToggle.addEventListener("click", openCart);
heroOrderBtn.addEventListener("click", openCart);
footerCartBtn.addEventListener("click", openCart);
cartClose.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);
checkoutBtn.addEventListener("click", handleCheckout);

cartBody.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  const action = button.dataset.action;
  if (action === "show-favorites") {
    closeCart();
    favoritesOnly = true;
    favoritesFilter.classList.add("is-active");
    favoritesFilter.setAttribute("aria-pressed", "true");
    renderMenu();
    document.querySelector("#cardapio")?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const id = Number(button.dataset.id);
  if (action === "details") openProductModal(id, "cart");
  if (action === "increase") changeQuantity(id, 1);
  if (action === "decrease") changeQuantity(id, -1);
  if (action === "remove") removeFromCart(id);
});

productModalClose.addEventListener("click", closeProductModal);
productQuantityDecrease.addEventListener("click", () => changeProductQuantity(-1));
productQuantityIncrease.addEventListener("click", () => changeProductQuantity(1));
productModalAdd.addEventListener("click", addSelectedProductToCart);
productModal.addEventListener("click", (event) => { if (event.target === productModal) closeProductModal(); });

backToTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
window.addEventListener("scroll", handleScroll, { passive: true });

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (productModal.open) closeProductModal();
  else if (cartPanel.classList.contains("is-open")) closeCart();
});

renderFeatured();
renderMenu();
updateCartUI();
observeReveals();
handleScroll();
