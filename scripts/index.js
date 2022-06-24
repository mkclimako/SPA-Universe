import { Router } from './router.js';
import { menuBtn, closeMenuBtn, nav,button,links } from './elements.js';

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

button.addEventListener('click',()=>{
  router.route()
})

window.onpopstate = () => router.handle();
