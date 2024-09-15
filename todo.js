const ul = document.getElementById("ul");
const add = document.getElementById("Add");
const text= document.getElementById("textfield");
function run(){
    if(add.addEventListener("click",()=>{
        if(text.value===""){
           alert("you should write something");
           savedata();

        }
        else{
            var x = document.createElement('li');
            x.innerText=text.value;
            var y = document.createElement('span');
            y.innerHTML="\u00d7";
            y.setAttribute("class","del");
            y.setAttribute("id","del");
            x.appendChild(y);
            ul.appendChild(x);
            text.value="";
            savedata();
        }
       
       
        
        
    }));

ul.addEventListener('click',function(e){
    const a = e.target.getAttribute("id");
    const b = e.target.parentElement;
    if(e.target.tagName==="LI"){
       e.target.classList.toggle("checked");
       saveData();
    }
       
    else if(a==="del"){
        e.target.parentElement.remove();
        saveData();
   }
   
});

}

run();

document.addEventListener("keypress",event=>{
    const a= event.key;
    if(a==="Enter"){
        if(text.value===""){
            alert("you should write something");
            saveData();
 
         }
         else{
             var x = document.createElement('li');
             x.innerText=text.value;
             var y = document.createElement('span');
             y.innerHTML="\u00d7";
             y.setAttribute("class","del");
             y.setAttribute("id","del");
             x.appendChild(y);
             ul.appendChild(x);
             text.value="";
             saveData();
         }
        
    }
});


function saveData(){
    localStorage.setItem("data",ul.innerHTML);
}

function showData(){
    ul.innerHTML=localStorage.getItem("data");
}

showData();










    