var e1= document.getElementById("h1");
e1.addEventListinere("click" , addColor);

var e2 = document.getElementById("submit");
e2.adddEventListener("onmouseover", removeBackground);

function addColor(){
   document.body.style.backgroundColor= "#f56a79";
}

function removeBackground(){
    document.body.style.backgroundColor= "";
}