let menu = document.getElementById('menuList');

menu.style.maxHeight = "0px";

function togglemenu(){
    if(menu.style.maxHeight == "0px"){
        menu.style.maxHeight = "130px"
    } else {
        menu.style.maxHeight = "0px"
    }
}