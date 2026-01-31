const menutogglle= document.getElementById("menutoggle");
const navMenu= document.getElementById("navmenu");


if(menutogglle){
    menutogglle.addEventListener("click", ()=>{
        navMenu.classList.toggle("navmenuvisible");
    })
}