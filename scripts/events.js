const Events = ({links,menuBtn,closeMenuBtn,router,handlemenu}) => {

    links.forEach((link) => {
        link.addEventListener('click', () => {
          router.route();
        handlemenu.closeMenu();
      
        });
      });
      
    menuBtn.addEventListener('click', () => {
        handlemenu.openMenu();
      });
      
      closeMenuBtn.addEventListener('click', () => {
        handlemenu.closeMenu();
      });
}

export default Events