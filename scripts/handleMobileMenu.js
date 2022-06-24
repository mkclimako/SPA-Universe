export const HandleMenu = ({menuBtn,closeMenuBtn,nav}) => {

    const openMenu = () => {
     menuBtn.classList.remove('activeBtn')
     closeMenuBtn.classList.add('activeBtn')
     nav.classList.remove('close')
    }
 
    const closeMenu = () => {
     menuBtn.classList.add('activeBtn')
     closeMenuBtn.classList.remove('activeBtn')
     nav.classList.add('close')
    }
 
    return {
     openMenu,
     closeMenu
    }
    
 }