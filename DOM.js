
// Accessing and modifying DOM elements
const heading = document.getElementById('h1');
heading.innerHTML = 'SOFTWARE ENGINEERING';

const list = document.getElementById('myList');
const listItem = document.createElement('li');
listItem.textContent = 'Student 4';
list.appendChild(listItem);

function say(){
    alert('hello osama');
}
function course(){
    var list=[
        "FUNDAMENTAL OF SOFTWARE ENGINEERING",
        "FUNDAMENTAL OF DATABASE",
        "FUNDAMENTAL OF NETWORKING",
        "SOFTWARE SECURITY",
        "REQUIREMENT ENGINEERING",
        "FUNDAMENTAL OF CLOUD COMPUTING"];
       
     for(i=0; i<=list.length; i++){
        alert(list[i]);
     }
         return list;
    
}