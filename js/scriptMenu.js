let menuVisible = false;
function showHideMenu(){
    if(menuVisible == false){
        menuVisible = true;
        let x = document.getElementById("menuId");
        x.className = "menu-items menu-visible";
    }
    else{
        menuVisible = false;
        let x = document.getElementById("menuId");
        x.className = "menu-items menu-hidden";
    }
}