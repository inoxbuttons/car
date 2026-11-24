// Красивый выпадающий список вместо системного <select>.
// Настоящий <select> остаётся в форме (скрытый) и хранит значение; доступно с клавиатуры.
(function () {
  const CHEVRON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  const split = (t) => { const i = t.indexOf(' — '); return i < 0 ? [t, ''] : [t.slice(0, i), t.slice(i + 3)]; };

  document.querySelectorAll('select.pretty').forEach((sel, n) => {
    const wrap = document.createElement('div');
    wrap.className = 'psel';
    const id = 'psel-' + n;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'psel-btn';
    btn.setAttribute('role', 'combobox');
    btn.setAttribute('aria-haspopup', 'listbox');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', id);
    if (sel.getAttribute('aria-labelledby')) btn.setAttribute('aria-labelledby', sel.getAttribute('aria-labelledby') + ' ' + id + '-v');
    btn.innerHTML = `<span class="psel-val" id="${id}-v"></span><span class="psel-price"></span><span class="psel-chev">${CHEVRON}</span>`;
    const list = document.createElement('ul');
    list.className = 'psel-list'; list.id = id; list.setAttribute('role', 'listbox');

    [...sel.options].forEach((o, i) => {
      const [name, price] = split(o.text);
      const li = document.createElement('li');
      li.setAttribute('role', 'option'); li.id = `${id}-o${i}`; li.dataset.i = i;
      li.innerHTML = `<span>${name}</span><b>${price}</b>`;
      li.addEventListener('click', () => { choose(i); close(); btn.focus(); });
      li.addEventListener('pointerdown', (e) => e.preventDefault());  // не забирать фокус с кнопки
      li.addEventListener('mousemove', () => hover(i));
      list.appendChild(li);
    });

    sel.classList.add('psel-native'); sel.tabIndex = -1; sel.setAttribute('aria-hidden', 'true');
    sel.parentNode.insertBefore(wrap, sel);
    wrap.append(sel, btn, list);

    let active = sel.selectedIndex;
    function render() {
      const [name, price] = split(sel.options[sel.selectedIndex].text);
      btn.querySelector('.psel-val').textContent = name;
      btn.querySelector('.psel-price').textContent = price;
      [...list.children].forEach((li, i) => li.setAttribute('aria-selected', String(i === sel.selectedIndex)));
    }
    function hover(i) {
      active = i;
      [...list.children].forEach((li, k) => li.classList.toggle('is-active', k === i));
      btn.setAttribute('aria-activedescendant', `${id}-o${i}`);
      list.children[i].scrollIntoView({ block: 'nearest' });
    }
    function choose(i) { sel.selectedIndex = i; sel.dispatchEvent(new Event('change', { bubbles: true })); render(); }
    function open() {
      if (wrap.classList.contains('open')) return;
      wrap.classList.add('open'); btn.setAttribute('aria-expanded', 'true');
      hover(sel.selectedIndex);
    }
    function close() { wrap.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }

    btn.addEventListener('click', () => (wrap.classList.contains('open') ? close() : open()));
    // фокус остаётся на кнопке (паттерн combobox), стрелки двигают подсветку в списке
    btn.addEventListener('keydown', (e) => {
      const isOpen = wrap.classList.contains('open'), last = sel.options.length - 1;
      if (!isOpen) {
        if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) { e.preventDefault(); open(); }
        return;
      }
      if (e.key === 'ArrowDown') { e.preventDefault(); hover(Math.min(last, active + 1)); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); hover(Math.max(0, active - 1)); }
      else if (e.key === 'Home') { e.preventDefault(); hover(0); }
      else if (e.key === 'End') { e.preventDefault(); hover(last); }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(active); close(); }
      else if (e.key === 'Escape' || e.key === 'Tab') close();
    });
    document.addEventListener('pointerdown', (e) => { if (!wrap.contains(e.target)) close(); });
    render();
  });
})();
