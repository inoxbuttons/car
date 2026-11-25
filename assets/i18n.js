// Локализация: RU / EN.
// Язык: ?locale=ru|en (для тестов), иначе по языку браузера — русский → RU, всё остальное → EN.
// Тексты в HTML написаны по-русски; для EN каждый текстовый узел и атрибут ищется в словаре ниже.
(function () {
  const q = new URLSearchParams(location.search).get('locale');
  const nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'en';
  const locale = q === 'ru' || q === 'en' ? q : (/^ru\b/i.test(nav) ? 'ru' : 'en');
  window.LOCALE = locale;
  document.documentElement.lang = locale;

  const EN = {
    // меню
    'Услуги': 'Services', 'Почему мы': 'Why us', 'Контакты': 'Contacts', 'Записаться': 'Book now',
    // первый экран (в EN — одной строкой: «DIRTY IN», «PROS ON IT», «SHINE OUT»)
    'Привези': 'Dirty', 'грязной': 'in',
    'Доверь': 'Pros', 'её профи': 'on it',
    'Забери': 'Shine', 'сияющей': 'out',
    'Ручная мойка, химчистка и керамика. 25 минут — и машина как из салона.': 'Hand wash, interior detailing and ceramic coating. 25 minutes — and it looks showroom-new.',
    'Чистота': 'Clean',
    'км/ч': 'km/h', 'Загружаем машину…': 'Loading the car…',
    // кнопки и подсказки
    'Управление 3D-сценой': '3D scene controls', 'Модель машины': 'Car model',
    'Вращать': 'Rotate', 'Мыть губкой': 'Sponge wash', 'Помыть целиком': 'Wash it all',
    'Приблизить': 'Zoom in', 'Отдалить': 'Zoom out', 'Вернуть ракурс': 'Reset view',
    'Испачкать снова': 'Get it dirty again', 'Включить музыку': 'Music on', 'Выключить музыку': 'Music off', 'Музыка': 'Music',
    // тексты из скриптов
    'Загружаем': 'Loading', 'Чисто!': 'Spotless!',
    'Не удалось загрузить модель. Откройте сайт через локальный сервер (см. README).': "Couldn't load the model. Open the site through a web server (see README).",
    // бегущая строка
    'Моем · Сушим · Полируем · Защищаем · Моем · Сушим · Полируем · Защищаем · Моем · Сушим · Полируем · Защищаем ·': 'Wash · Dry · Polish · Protect · Wash · Dry · Polish · Protect · Wash · Dry · Polish · Protect ·',
    // услуги
    '01 — Услуги': '01 — Services', 'Чисто.': 'Clean.', 'Без компромиссов.': 'No compromise.',
    'Экспресс': 'Express', 'Комплекс': 'Complete', 'Детейлинг-мойка': 'Detailing wash', 'Полировка + керамика': 'Polish + ceramic',
    '25 мин': '25 min', '60 мин': '60 min', '3 ч': '3 h', '1–2 дня': '1–2 days',
    'Бесконтактная пена, ручная мойка, сушка, чернение шин.': 'Touchless foam, hand wash, drying, tire shine.',
    'Кузов, салон, стёкла с двух сторон, коврики и пороги.': 'Exterior, interior, windows inside and out, mats and sills.',
    'Двухфазная мойка, очистка битума, глина, кварцевый воск.': 'Two-step wash, tar removal, clay bar, quartz wax.',
    'Убираем «паутинку» и царапины, защищаем покрытие до 2 лет.': 'We remove swirls and scratches and protect the paint for up to 2 years.',
    'от 900 ₽': 'from $15', 'от 2 400 ₽': 'from $40', 'от 5 900 ₽': 'from $95', 'от 18 000 ₽': 'from $290',
    // цифры
    'мин': 'min', 'мес': 'mo',
    'средняя мойка «Экспресс»': 'average Express wash', 'мягкая химия, безопасная для покрытий': 'gentle chemistry, safe for every finish',
    'гарантия на керамику': 'ceramic coating warranty', 'онлайн-запись без звонков': 'online booking, no calls needed',
    // запись и контакты (выдуманные, нейтральные)
    '02 — Запись': '02 — Booking', 'Ключи —': 'Keys —', 'нам.': 'to us.', 'Блеск — вам.': 'Shine — yours.',
    'Адрес': 'Address', 'Телефон': 'Phone', 'Режим': 'Hours',
    'г. Таганрог, ул. Чистая, 7': '1250 Gloss Ave, Austin, TX',
    '+7 (900) 000-00-00': '+1 (512) 555-0147', 'tel:+79000000000': 'tel:+15125550147',
    'Telegram': 'Instagram', '@blesk_wash': '@logo.carwash',
    'Ежедневно 8:00–23:00': 'Daily 8 am – 11 pm',
    'Имя': 'Name', 'Как к вам обращаться': 'What should we call you', '+7 (___) ___-__-__': '+1 (___) ___-____',
    'Услуга': 'Service', 'Когда удобно': 'Preferred time',
    'Экспресс — от 900 ₽': 'Express — from $15', 'Комплекс — от 2 400 ₽': 'Complete — from $40',
    'Детейлинг-мойка — от 5 900 ₽': 'Detailing wash — from $95', 'Полировка + керамика — от 18 000 ₽': 'Polish + ceramic — from $290',
    'Перезвоним за 10 минут и подтвердим время.': "We'll call you back within 10 minutes to confirm.",
    'Готово!': 'Done!', 'Мы скоро перезвоним.': "We'll call you shortly.",
    // подвал и мета
    '© 2026 БЛЕСК. Автомойка и детейлинг.': '© 2026 logo. Car wash & detailing.',
    'БЛЕСК — автомойка и детейлинг': 'logo — car wash & detailing',
    'Автомойка и детейлинг БЛЕСК: ручная мойка, химчистка, полировка и керамика. Привезите грязной — заберите сияющей.': 'Car wash & detailing: hand wash, interior cleaning, polishing and ceramic coating. Dirty in. Pros on it. Shine out.',
  };
  const CREDITS_RU = 'иконки:';
  // в EN другие модели — и другие авторы (все с Sketchfab)
  const CREDITS_EN = '3D (Sketchfab): Chevrolet Blazer Premier 2019 — Ddiaz Design (CC BY 4.0), Jeep Compass 2022 — Davidson (CC BY 4.0), Chevrolet Traverse RS 2023 — Ddiaz Design (CC BY-NC-SA 4.0), Tesla Model 3 — wintrez (CC BY 4.0), BMW G82 M4 ADRO — VTX (CC BY-NC-SA 4.0) · HDRI: Poly Haven (CC0) · icons: Adrien Coquet, Wahyu Adam, Symbolon — Noun Project (CC BY 3.0)';

  // перевод одной строки (для скриптов): window.__t('Чисто!')
  window.__t = (s) => (locale === 'en' && EN[s] !== undefined ? EN[s] : s);
  if (locale !== 'en') return;

  const tr = (s) => {
    const k = s.replace(/\s+/g, ' ').trim();
    return EN[k] !== undefined ? s.replace(s.trim(), EN[k]) : null;
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach((n) => {
    if (!n.nodeValue.trim()) return;
    const t = tr(n.nodeValue.replace(/ /g, ' '));
    if (t !== null) n.nodeValue = t;
    else if (n.nodeValue.includes(CREDITS_RU)) n.nodeValue = n.nodeValue.replace(CREDITS_RU, 'icons:');
  });
  ['placeholder', 'data-tip', 'aria-label', 'href'].forEach((a) => {
    document.querySelectorAll(`[${a}]`).forEach((el) => { const t = EN[el.getAttribute(a)]; if (t !== undefined) el.setAttribute(a, t); });
  });
  const cr = document.querySelector('.credits'); if (cr) cr.textContent = CREDITS_EN;
  document.title = EN[document.title] || document.title;
  const md = document.querySelector('meta[name=description]');
  if (md && EN[md.content]) md.content = EN[md.content];
})();
