'use strict';
// PERSONALIZE AQUI. Telefone: país + DDD + número, somente dígitos.
// Deixe vazio até ter o número real. Exemplo de formato: 55 + DDD + número.
const CONFIG = {
  nome: 'Barbearia 2C',
  whatsapp: '',
  mensagem: 'Olá! Vim pelo site e gostaria de agendar um horário.',
  endereco: '',
  horarios: '',
  mapsUrl: '' // Cole um link HTTPS real do Google Maps.
};

const validPhone = /^\d{10,15}$/.test(CONFIG.whatsapp);
const dialog = document.querySelector('#contact-dialog');
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
menuButton.hidden = false;
document.body.classList.add('js');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menu.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
const desktop = window.matchMedia('(min-width: 961px)');
desktop.addEventListener('change', closeMenu);

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  if (validPhone) {
    const message = link.dataset.service
      ? `Olá! Vim pelo site e gostaria de saber sobre ${link.dataset.service}.` : CONFIG.mensagem;
    link.href = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
    link.target = '_blank'; link.rel = 'noopener noreferrer';
  } else {
    link.setAttribute('aria-haspopup', 'dialog');
    link.addEventListener('click', event => {
      event.preventDefault();
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else document.querySelector('#contato').scrollIntoView();
    });
  }
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-name]').forEach(el => { el.textContent = CONFIG.nome; });
document.title = `${CONFIG.nome} | Seu estilo. Sua identidade.`;
if (CONFIG.endereco.trim()) document.querySelector('#address').textContent = CONFIG.endereco;
if (CONFIG.horarios.trim()) document.querySelector('#hours').textContent = CONFIG.horarios;
try {
  const url = new URL(CONFIG.mapsUrl);
  const allowed = ['www.google.com', 'google.com', 'maps.google.com', 'maps.app.goo.gl', 'goo.gl'];
  if (url.protocol === 'https:' && allowed.includes(url.hostname)) {
    const link = document.querySelector('#maps-link'); link.href = url.href; link.hidden = false;
  }
} catch { /* Sem localização configurada: não exibir link inválido. */ }
