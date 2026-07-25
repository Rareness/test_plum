/* ===== Data ===== */
const BOOKS = [
  {
    id: 1,
    emoji: '🦉',
    decor: ['🌳', '🍄', '🦋', '🐿️', '🌿'],
    title: 'Приключение {name} в волшебном лесу',
    desc: 'Сказочное путешествие через говорящий лес, где {name} подружится с животными и найдёт волшебный ключ.',
    age: '3–6 лет',
    price: 1490,
    gradient: 'linear-gradient(135deg,#8BC6EC,#4ECDC4)',
    story: [
      'Однажды {name} находит в саду тропинку, которая светится в сумерках, и идёт по ней в волшебный лес.',
      'В самой чаще леса {name} встречает мудрую сову — она знает обо всех секретах этих мест.',
      'Вместе они проходят поляну говорящих грибов и находят старый дуб с потайной дверцей.',
      'Внутри дуба спрятан волшебный ключ. Теперь {name} — хранитель леса, и лес всегда рад гостю.'
    ]
  },
  {
    id: 2,
    emoji: '🚀',
    decor: ['⭐', '🪐', '🌌', '☄️', '✨'],
    title: '{name} и путешествие к звёздам',
    desc: '{name} отправляется в космическое приключение, чтобы зажечь самую яркую звезду в галактике.',
    age: '4–8 лет',
    price: 1590,
    gradient: 'linear-gradient(135deg,#2D3142,#6C63FF)',
    story: [
      'Ночью {name} видит в окне падающую звезду и загадывает желание — полететь к звёздам.',
      'Утром у дома приземляется маленькая ракета. Она приглашает {name} в путешествие по галактике.',
      'На далёкой планете {name} встречает дружелюбных инопланетян, которые потеряли самую яркую звезду.',
      '{name} находит звезду за туманным облаком и зажигает небо. Теперь оно сияет ярче прежнего.'
    ]
  },
  {
    id: 3,
    emoji: '🏰',
    decor: ['👑', '🐉', '✨', '🛡️', '🌟'],
    title: '{name} — храбрый герой королевства',
    desc: '{name} становится рыцарем и спасает королевство от ужасно скучающего дракона.',
    age: '5–9 лет',
    price: 1690,
    gradient: 'linear-gradient(135deg,#FF6B6B,#FFD93D)',
    story: [
      'В королевстве переполох: солнце спряталось, а дракон слишком грустит, чтобы его вернуть.',
      'Король и королева зовут на помощь самого храброго рыцаря королевства — {name}.',
      '{name} находит дракона у старой башни и узнаёт, что он просто соскучился по друзьям.',
      '{name} и дракон устраивают для всего королевства праздник. Солнце возвращается, а дракон больше не грустит.'
    ]
  },
  {
    id: 4,
    emoji: '🐬',
    decor: ['🐚', '🐠', '🌊', '⚓', '🪸'],
    title: 'Большое приключение {name} в океане',
    desc: '{name} исследует коралловые рифы и находит затонувший сундук с сокровищами.',
    age: '3–7 лет',
    price: 1490,
    gradient: 'linear-gradient(135deg,#4ECDC4,#1A8FE3)',
    story: [
      'На берегу {name} находит ракушку, которая шепчет: «Приходи в гости, под водой ждут друзья».',
      'Дружелюбный дельфин показывает {name} путь через яркий коралловый риф.',
      'Среди водорослей они находят старый сундук, запертый на ржавый замок.',
      'Внутри сундука — карта всех сокровищ океана. Теперь {name} — почётный друг морских жителей.'
    ]
  },
  {
    id: 5,
    emoji: '🎈',
    decor: ['🎂', '🎁', '✨', '🎉', '🩷'],
    title: 'Первый день рождения {name}',
    desc: 'Тёплая книга-подарок о первом годе жизни {name}, которую приятно перечитывать всей семьёй.',
    age: '0–3 года',
    price: 1390,
    gradient: 'linear-gradient(135deg,#FFB6C1,#FFD93D)',
    story: [
      'Это первый год жизни {name} — самый маленький и самый большой год из всех.',
      'Каждый день был открытием: первая улыбка, первый шаг, первое звонкое «привет!».',
      'Родные и друзья собираются вместе, чтобы отпраздновать этот особенный день рождения.',
      'С днём рождения, {name}! Пусть впереди будет ещё много чудесных историй.'
    ]
  },
  {
    id: 6,
    emoji: '🦕',
    decor: ['🌋', '🌿', '🦴', '🥚', '🍃'],
    title: '{name} спасает динозавров',
    desc: '{name} переносится в доисторический мир и помогает динозаврам найти дорогу домой.',
    age: '4–9 лет',
    price: 1590,
    gradient: 'linear-gradient(135deg,#95E1D3,#38ADA9)',
    story: [
      'Странный портал открывается прямо в песочнице — и {name} оказывается в доисторическом мире.',
      'Маленький динозаврёнок потерялся и не может найти дорогу домой к своей стае.',
      '{name} и динозаврёнок идут через джунгли папоротников, минуя дремлющего трицератопса.',
      'Они находят стаю у подножия вулкана. Динозавры благодарят {name} и дарят на память зуб трицератопса.'
    ]
  }
];

const FAQS = [
  { q: 'Сколько времени занимает доставка?', a: 'В среднем 2–4 дня по крупным городам России и 5–7 дней в остальные регионы. Печать книги занимает 1 день.' },
  { q: 'Можно ли изменить имя после заказа?', a: 'Да, в течение 2 часов после оформления — просто напишите нам на почту или в чат, и мы обновим макет.' },
  { q: 'Какой формат и качество печати?', a: 'Твёрдый переплёт, плотная мелованная бумага, полноцветная печать. Формат книги — 21×21 см.' },
  { q: 'Можно ли добавить фото ребёнка?', a: 'Да — в конструкторе книги можно сразу загрузить фото. Оно появится на обложке и внутри страниц, и вы увидите готовую книгу ещё до заказа. Фото хранится только в вашем браузере и никуда не отправляется.' },
  { q: 'Как оплатить заказ?', a: 'Картой онлайн при оформлении или наличными/картой курьеру при получении — выбирайте, что удобнее.' }
];

const PAGES_TOTAL = 6; // обложка + 4 страницы истории + посвящение
const MEDALLION_PAGE = 2; // индекс страницы с фото-медальоном
const DELIVERY = 0;

/* ===== State ===== */
let cart = JSON.parse(localStorage.getItem('skazkatut_cart') || '[]');
let activeBook = null;
let currentPhoto = null;
let currentPageIndex = 0;

/* ===== Helpers ===== */
const fmt = n => n.toLocaleString('ru-RU') + ' ₽';
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function saveCart() {
  try {
    localStorage.setItem('skazkatut_cart', JSON.stringify(cart));
  } catch (e) {
    console.warn('Корзина не сохранена локально: превышен лимит хранилища браузера.');
  }
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
        <button class="btn btn-primary" data-book-id="${b.id}">Собрать книгу</button>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('[data-book-id]').forEach(btn => {
    btn.addEventListener('click', () => openConstructor(Number(btn.dataset.bookId)));
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

/* ===== Constructor: book pages ===== */
function buildPages(book, name, dedication) {
  const safeName = name ? escapeHtml(name) : '';
  const boldName = `<b>${safeName || '...'}</b>`;
  const sub = (tpl) => tpl.replace(/\{name\}/g, boldName);
  const dediText = dedication
    ? escapeHtml(dedication)
    : `Эта книга создана специально для ${safeName ? boldName : 'вашего ребёнка'}.`;

  return [
    { type: 'cover', text: sub(book.title) },
    { type: 'story', text: sub(book.story[0]) },
    { type: 'story', text: sub(book.story[1]), medallion: true },
    { type: 'story', text: sub(book.story[2]) },
    { type: 'story', text: sub(book.story[3]) },
    { type: 'dedication', text: dediText }
  ];
}

function renderDecor(decorSet, pageIndex) {
  return decorSet.map((emoji, i) => {
    const seed = (pageIndex * 7 + i * 13) % 100;
    const top = 8 + (seed * 0.6) % 68;
    const left = 4 + ((seed * 3 + i * 17) % 88);
    const size = 1.3 + (i % 3) * 0.5;
    const rotate = (seed % 40) - 20;
    return `<span class="scene-decor" style="top:${top}%;left:${left}%;font-size:${size}rem;transform:rotate(${rotate}deg)">${emoji}</span>`;
  }).join('');
}

function pageHTML(book, page, idx) {
  if (page.type === 'cover') {
    return `
      <span class="cover-badge">Персональная книга</span>
      ${currentPhoto
        ? `<img class="cover-photo" src="${currentPhoto}" alt="Фото ребёнка">`
        : `<div class="cover-photo-placeholder">${book.emoji}</div>`}
      <h4>${page.text}</h4>`;
  }
  if (page.type === 'story') {
    return `
      <div class="scene">
        ${renderDecor(book.decor, idx)}
        ${page.medallion
          ? (currentPhoto
              ? `<div class="medallion"><img src="${currentPhoto}" alt="Фото ребёнка"></div>`
              : `<div class="medallion-placeholder">📷</div>`)
          : ''}
        <span class="hero-emoji">${book.emoji}</span>
      </div>
      <p class="story-text">${page.text}</p>`;
  }
  const name = $('#fieldName').value.trim();
  return `
    <span class="the-end">Конец</span>
    ${currentPhoto ? `<img class="dedi-photo" src="${currentPhoto}" alt="Фото ребёнка">` : ''}
    <p class="dedi-text">«${page.text}»</p>
    <span class="stamp">Специально для ${name ? escapeHtml(name) : 'вашего ребёнка'} · СказкаТут</span>`;
}

function renderPage() {
  if (!activeBook) return;
  const name = $('#fieldName').value.trim();
  const dedication = $('#fieldDedication').value.trim();
  const pages = buildPages(activeBook, name, dedication);
  const page = pages[currentPageIndex];

  const el = $('#bookPage');
  el.className = 'book-page page-' + page.type;
  el.style.background = activeBook.gradient;
  el.innerHTML = pageHTML(activeBook, page, currentPageIndex);

  renderDots(pages.length);
}

function renderDots(total) {
  const wrap = $('#flipDots');
  wrap.innerHTML = Array.from({ length: total }).map((_, i) =>
    `<button class="${i === currentPageIndex ? 'active' : ''}" data-page="${i}" aria-label="Страница ${i + 1}" type="button"></button>`
  ).join('');
  wrap.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      currentPageIndex = Number(b.dataset.page);
      renderPage();
    });
  });
}

function flip(delta) {
  currentPageIndex = (currentPageIndex + delta + PAGES_TOTAL) % PAGES_TOTAL;
  renderPage();
}

/* ===== Constructor: photo upload ===== */
function updatePhotoUI() {
  const wrap = $('#photoPreviewWrap');
  if (currentPhoto) {
    wrap.innerHTML = `<img src="${currentPhoto}" alt="Фото ребёнка">`;
    $('#removePhotoBtn').hidden = false;
  } else {
    wrap.innerHTML = '📷';
    $('#removePhotoBtn').hidden = true;
  }
}

function handlePhotoFile(file) {
  if (!file || !file.type || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = e => {
    const img = new Image();
    img.onload = () => {
      const maxSize = 640;
      let { width, height } = img;
      const scale = Math.min(1, maxSize / Math.max(width, height));
      width = Math.round(width * scale);
      height = Math.round(height * scale);
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      currentPhoto = canvas.toDataURL('image/jpeg', 0.85);
      updatePhotoUI();
      renderPage();
    };
    img.src = e.target.result;
  };
  reader.readAsDataURL(file);
}

/* ===== Constructor: open / close ===== */
function openConstructor(bookId) {
  activeBook = BOOKS.find(b => b.id === bookId);
  $('#fieldName').value = '';
  $('#fieldDedication').value = '';
  $('#fieldAge').selectedIndex = 2;
  $$('input[name=gender]')[0].checked = true;
  $('#fieldError').classList.remove('show');
  currentPhoto = null;
  currentPageIndex = 0;
  updatePhotoUI();
  $('#constructorBookDesc').textContent = activeBook.desc.replace('{name}', 'вашего ребёнка');
  $('#modalPrice').textContent = fmt(activeBook.price);
  renderPage();
  $('#constructorOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeConstructor() {
  $('#constructorOverlay').classList.remove('active');
  document.body.style.overflow = '';
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
    photo: currentPhoto,
    qty: 1
  });
  saveCart();
  closeConstructor();
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
      <div class="cart-item-cover" style="background:${item.gradient}">${item.photo ? `<img src="${item.photo}" alt="">` : item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.title}</h4>
        <div class="meta">${item.gender} · ${item.age}${item.dedication ? ' · «' + item.dedication + '»' : ''}</div>
        <div class="cart-item-row">
          <div class="qty-stepper">
            <button data-action="dec" type="button">−</button>
            <span>${item.qty}</span>
            <button data-action="inc" type="button">+</button>
          </div>
          <b>${fmt(item.price * item.qty)}</b>
        </div>
        <button class="remove-item" data-action="remove" type="button">Удалить</button>
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

  $('#fieldName').addEventListener('input', renderPage);
  $('#fieldDedication').addEventListener('input', renderPage);

  $('#photoInput').addEventListener('change', e => handlePhotoFile(e.target.files[0]));
  $('#removePhotoBtn').addEventListener('click', () => { currentPhoto = null; updatePhotoUI(); renderPage(); });

  const dropzone = $('#photoDropzone');
  ['dragover', 'dragenter'].forEach(evt => dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.add('dragover'); }));
  ['dragleave', 'drop'].forEach(evt => dropzone.addEventListener(evt, e => { e.preventDefault(); dropzone.classList.remove('dragover'); }));
  dropzone.addEventListener('drop', e => handlePhotoFile(e.dataTransfer.files[0]));

  $('#flipPrev').addEventListener('click', () => flip(-1));
  $('#flipNext').addEventListener('click', () => flip(1));

  $('#addToCartBtn').addEventListener('click', addToCart);
  $$('[data-close-constructor]').forEach(el => el.addEventListener('click', closeConstructor));
  $('#constructorOverlay').addEventListener('click', e => { if (e.target.id === 'constructorOverlay') closeConstructor(); });

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
    if (e.key === 'Escape') { closeConstructor(); closeCart(); closeCheckout(); }
    if ($('#constructorOverlay').classList.contains('active')) {
      if (e.key === 'ArrowLeft') flip(-1);
      if (e.key === 'ArrowRight') flip(1);
    }
  });
});
