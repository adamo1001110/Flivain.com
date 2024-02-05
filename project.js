let icon = document.getElementById("icon");
let mode = document.getElementById("mood");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = 'sun.png';
    }else{
        icon.src='moon.png';
    }
    
    if(document.body.classList.contains("dark-theme")){
        mode.innerText = 'Light Mode';
    }else{
        mode.innerText='Dark Mode';
    }
}