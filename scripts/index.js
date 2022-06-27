import { Router } from './router.js';
import { menuBtn, closeMenuBtn, nav, links } from './elements.js';
import { HandleMenu } from './handleMobileMenu.js';
import Events from './events.js';

const router = new Router();

router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');
router.add(404, '/pages/404.html');

router.handle();


const handlemenu = HandleMenu({ menuBtn, closeMenuBtn, nav });

Events({links,menuBtn,closeMenuBtn,router,handlemenu})


window.onpopstate = () => router.handle();
