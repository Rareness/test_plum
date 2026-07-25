/* ===== Data ===== */
const BOOKS = [
  {
    id: 1,
    emoji: '🦉',
    title: 'Приключение {name} в волшебном лесу',
    desc: 'Сказочное путешествие через говорящий лес, где {name} подружится с животными и найдёт волшебный ключ.',
    age: '3–6 лет',
    price: 1490,
    gradient: 'linear-gradient(135deg,#8BC6EC,#4ECDC4)'
  },
  {
    id: 2,
    emoji: '🚀',
    title: '{name} и путешествие к звёздам',
    desc: '{name} отправляется в космическое приключение, чтобы зажечь самую яркую звезду в галактике.',
    age: '4–8 лет',
    price: 1590,
    gradient: 'linear-gradient(135deg,#2D3142,#6C63FF)'
  },
  {
    id: 3,
    emoji: '🏰',
    title: '{name} — храбрый герой королевства',
    desc: '{name} становится рыцарем и спасает королевство от ужасно скучающего дракона.',
    age: '5–9 лет',
    price: 1690,
    gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)'
  },
  {
    id: 4,
    emoji: '🐬',
    title: 'Большое приключение {name} в океане',
    desc: '{name} исследует коралловые рифы и находит затонувший сундук с сокровищами.',
    age: '3–7 лет',
    price: 1490,
    gradient: 'linear-gradient(135deg,#4ECDC4,#1A8FE3)'
  },
  {
    id: 5,
    emoji: '🎈',
    title: 'Первый день рождения {name}',
    desc: 'Тёплая книга-подарок о первом годе жизни {name}, которую приятно перечитывать всей семьёй.',
    age: '0–3 года',
    price: 1390,
    gradient: 'linear-gradient(135deg,#FFB6C1,#FFD93D)'
  },
  {
    id: 6,
    emoji: '🦕',
    title: '{name} спасает динозавров',
    desc: '{name} переносится в доисторический мир и помогает динозаврам найти дорогу домой.',
    age: '4–9 лет',
    price: 1590,
    gradient: 'linear-gradient(135deg,#95E1D3,#38ADA9)'
  }
];

const FAQS = [
  { q: 'Сколько времени занимает доставка?', a: 'В среднем 2–4 дня по крупным городам России и 5–7 дней в остальные регионы. Печать книги занимает 1 день.' },
  { q: 'Можно ли изменить имя после заказа?', a: 'Да, в течение 2 часов после оформления — просто напишите нам на почту или в чат, и мы обновим макет.' },
  { q: 'Какой формат и качество печати?', a: 'Твёрдый переплёт, плотная мелованная бумага, полноцветная печать. Формат книги — 21×21 см.' },
  { q: 'Можно ли добавить фото ребёнка?', a: 'Сейчас персонализация включает имя, возраст, пол героя и посвящение. Загрузку фото мы готовим в следующем обновлении.' },
  { q: 'Как оплатить заказ?', a: 'Картой онлайн при оформлении или наличными/картой курьеру при получении — выбирайте, что удобнее.' }
];

const DELIVERY = 0; // бесплатная доставка

/* ===== State ===== */
let cart = JSON.parse(localStorage.getItem('skazkatut_cart') || '[]');
let activeBook = null;

/* ===== Helpers ===== */
const fmt = n => n.toLocaleString('ru-RU') + ' ₽';
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function saveCart() {
  localStorage.setItem('skazkatut_cart', JSON.stringify(cart));
  renderCartCount();
}

/* ===== Render: Catalog ===== */
function renderBooks() {
  const grid = $('#bookGrid');
  grid.innerHTML = BOOKS.map(b => `
    <div class="book-card">
      <div class="book-cover" style="background:${b.gradient}">
        <span class="cover-emoji">${b.emoji}</span>
        <p class="cover-title">${b.title.replace('{name}', 'Вашего ребёнка')}</p>
      </div>
      <div class="book-info">
        <h3>${b.title.replace('{name}', 'Имя')}</h3>
        <p class="desc">${b.desc.replace('{name}', 'ваш ребёнок')}</p>
        <div class="book-meta">
          <span class="age-pill">${b.age}</span>
          <span class="price">${fmt(b.price)}</span>
        </div>
        <button class="btn btn-primary" data-book-id="${b.id}">Персонализировать</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-book-id]').forEach(btn => {
    btn.addEventListener('click', () => openPersonalize(Number(btn.dataset.bookId)));
  });
}

/* ===== Render: FAQ ===== */
function renderFaq() {
  const list = $('#faqList');
  list.innerHTML = FAQS.map((f, i) => `
    <div class="faq-item" data-i="${i}">
      <button class="faq-q">${f.q} <span class="icon">✛</span></button>
      <div class="faq-a"><p>${f.a}</p></div>
    </div>
  `).join('');

  list.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-q').addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
}

/* ===== Personalize modal ===== */
function openPersonalize(bookId) {
  activeBook = BOOKS.find(b => b.id === bookId);
  $('#fieldName').value = '';
  $('#fieldDedication').value = '';
  $('#fieldAge').selectedIndex = 2;
  $$('input[name=gender]')[0].checked = true;
  $('#fieldError').classList.remove('show');
  $('#modalBookDesc').textContent = activeBook.desc.replace('{name}', 'вашего ребёнка');
  $('#modalPrice').textContent = fmt(activeBook.price);
  $('#previewEmoji').textContent = activeBook.emoji;
  $('#previewCover').style.background = activeBook.gradient;
  updatePreview();
  $('#personalizeOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closePersonalize() {
  $('#personalizeOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function updatePreview() {
  const name = $('#fieldName').value.trim();
  const dedication = $('#fieldDedication').value.trim();
  const displayName = name || '...';
  $('#previewTitle').innerHTML = activeBook.title.replace('{name}', `<b>${escapeHtml(displayName)}</b>`);
  $('#previewDedication').textContent = dedication ? `«${dedication}»` : '';
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function addToCart() {
  const name = $('#fieldName').value.trim();
  if (!name) {
    $('#fieldError').classList.add('show');
    return;
  }
  $('#fieldError').classList.remove('show');
  const gender = document.querySelector('input[name=gender]:checked').value;
  const age = $('#fieldAge').value;
  const dedication = $('#fieldDedication').value.trim();

  cart.push({
    cartId: Date.now() + Math.random().toString(16).slice(2),
    bookId: activeBook.id,
    title: activeBook.title.replace('{name}', name),
    emoji: activeBook.emoji,
    gradient: activeBook.gradient,
    price: activeBook.price,
    childName: name,
    gender,
    age,
    dedication,
    qty: 1
  });
  saveCart();
  closePersonalize();
  openCart();
}

/* ===== Cart drawer ===== */
function renderCartCount() {
  const count = cart.reduce((s, i) => s + i.qty, 0);
  $('#cartCount').textContent = count;
}

function renderCartItems() {
  const wrap = $('#cartItems');
  if (cart.length === 0) {
    wrap.innerHTML = `<div class="cart-empty">🛒<br>Ваша корзина пока пуста</div>`;
    $('#cartTotal').textContent = fmt(0);
    return;
  }
  wrap.innerHTML = cart.map(item => `
    <div class="cart-item" data-cart-id="${item.cartId}">
      <div class="cart-item-cover" style="background:${item.gradient}">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <div class="meta">${item.gender} · ${item.age}${item.dedication ? ' · «' + item.dedication + '»' : ''}</div>
        <div class="cart-item-row">
          <div class="qty-stepper">
            <button data-action="dec">−</button>
            <span>${item.qty}</span>
            <button data-action="inc">+</button>
          </div>
          <b>${fmt(item.price * item.qty)}</b>
        </div>
        <button class="remove-item" data-action="remove">Удалить</button>
      </div>
    </div>
  `).join('');

  wrap.querySelectorAll('.cart-item').forEach(el => {
    const id = el.dataset.cartId;
    el.querySelector('[data-action=inc]').addEventListener('click', () => changeQty(id, 1));
    el.querySelector('[data-action=dec]').addEventListener('click', () => changeQty(id, -1));
    el.querySelector('[data-action=remove]').addEventListener('click', () => removeFromCart(id));
  });

  $('#cartTotal').textContent = fmt(cartTotal());
}

function cartTotal() {
  return cart.reduce((s, i) => s + i.price * i.qty, 0) + (cart.length ? DELIVERY : 0);
}

function changeQty(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCartItems();
}

function removeFromCart(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  saveCart();
  renderCartItems();
}

function openCart() {
  renderCartItems();
  $('#cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  $('#cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

/* ===== Checkout ===== */
function openCheckout() {
  if (cart.length === 0) return;
  $('#checkoutFormWrap').classList.remove('hide');
  $('#checkoutSuccess').classList.remove('show');
  $('#checkoutError').classList.remove('show');
  $('#checkoutTotal').textContent = fmt(cartTotal());
  $('#checkoutOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  $('#checkoutOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function submitOrder() {
  const name = $('#checkoutName').value.trim();
  const phone = $('#checkoutPhone').value.trim();
  const address = $('#checkoutAddress').value.trim();
  if (!name || !phone || !address) {
    $('#checkoutError').classList.add('show');
    return;
  }
  $('#checkoutError').classList.remove('show');

  const orderNum = '#' + Math.floor(10000 + Math.random() * 89999);
  $('#orderNumber').textContent = orderNum;
  $('#checkoutFormWrap').classList.add('hide');
  $('#checkoutSuccess').classList.add('show');

  cart = [];
  saveCart();
}

/* ===== Nav / burger ===== */
function toggleNav() {
  $('#mainNav').classList.toggle('open');
}

/* ===== Wire up events ===== */
document.addEventListener('DOMContentLoaded', () => {
  renderBooks();
  renderFaq();
  renderCartCount();

  $('#fieldName').addEventListener('input', updatePreview);
  $('#fieldDedication').addEventListener('input', updatePreview);

  $('#addToCartBtn').addEventListener('click', addToCart);
  $$('[data-close-personalize]').forEach(el => el.addEventListener('click', closePersonalize));
  $('#personalizeOverlay').addEventListener('click', e => { if (e.target.id === 'personalizeOverlay') closePersonalize(); });

  $('#cartBtn').addEventListener('click', openCart);
  $$('[data-close-cart]').forEach(el => el.addEventListener('click', closeCart));
  $('#cartOverlay').addEventListener('click', e => { if (e.target.id === 'cartOverlay') closeCart(); });

  $('#checkoutBtn').addEventListener('click', () => { closeCart(); openCheckout(); });
  $$('[data-close-checkout]').forEach(el => el.addEventListener('click', closeCheckout));
  $('#checkoutOverlay').addEventListener('click', e => { if (e.target.id === 'checkoutOverlay') closeCheckout(); });
  $('#submitOrderBtn').addEventListener('click', submitOrder);

  $('#burgerBtn').addEventListener('click', toggleNav);
  $$('.main-nav a').forEach(a => a.addEventListener('click', () => $('#mainNav').classList.remove('open')));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closePersonalize(); closeCart(); closeCheckout(); }
  });
});
