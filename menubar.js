// メニューバーメイン
window.addEventListener("load", () => {
    for (const bar of document.getElementsByClassName("menubar_main")) {
      for (const a of bar.getElementsByTagName("a")) {
        if (a.href == window.location.href) {
          a.className = "active";
        }
      }
    }
});

window.addEventListener("load", () => {
    for (const bar of document.getElementsByClassName("menubar")) {
      for (const a of bar.getElementsByTagName("a")) {
        if (a.href == window.location.href) {
          a.className = "active";
        }
      }
    }
});
  

window.addEventListener("click", (event) =>{
    for (const bar of document.getElementsByClassName("menubar")){
        for(const icon of bar.getElementsByClassName("menuicon")){
            if(event.target == icon && bar.className == "menubar"){
                bar.className = "menubar open"
            }else{
                bar.className ="menubar"
            }
        }
    }
});