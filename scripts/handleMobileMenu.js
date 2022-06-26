export const HandleMenu = ({ menuBtn, closeMenuBtn, nav }) => {
  const openMenu = () => {
    menuBtn.classList.remove('activeBtn');
    nav.classList.remove('close');
    closeMenuBtn.classList.add('activeBtn');
  };

  const closeMenu = () => {
    menuBtn.classList.add('activeBtn');
    closeMenuBtn.classList.remove('activeBtn');
    nav.classList.add('close');
  };

  return {
    openMenu,
    closeMenu,
  };
};
