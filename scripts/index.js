import { Router } from './router.js';
import { menuBtn, closeMenuBtn, nav,links } from './elements.js';
import { HandleMenu } from './handleMobileMenu.js';

const router = new Router();

router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');
router.add(404, '/pages/404.html');

router.handle();


links.forEach((link) => {
  link.addEventListener('click', () => {
    router.route();
  });
});


const handlemenu = HandleMenu({ menuBtn, closeMenuBtn, nav });

menuBtn.addEventListener('click', () => {
  handlemenu.openMenu();
});

closeMenuBtn.addEventListener('click', () => {
  handlemenu.closeMenu();
});

window.onpopstate = () => router.handle();
