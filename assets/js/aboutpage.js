let theme = sessionStorage.getItem("theme");
if (theme == 0){
    mainheading2.style.color = "black";
    mainbackground.style.backgroundColor = "white";
    htmlmain.style.backgroundColor = "white";
}
else{
    mainheading2.style.color = "white";
    mainbackground.style.backgroundColor = "black";
    htmlmain.style.backgroundColor = "black";
}
function mainpage(){
    sessionStorage.clear();
    sessionStorage.setItem("theme", theme);
    window.location.href = "mainpage2.html";
}