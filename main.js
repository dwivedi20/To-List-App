let input = document.querySelector("input");
let form = document.querySelector("form");
let ul = document.querySelector("ul");
let body= document.querySelector("body")
console.dir(body)
document.body.style.backgroundImage = "url('5172658.jpg ')";
document.body.style.backgroundSize = "cover";


const saveTodo = (e) => {
    e.preventDefault ();
    let li = document.createElement("li");
    li.className = "list-group-item "
    li.innerText = input.value; 
    let delBtn = document.createElement("button");
     delBtn.innerText = "Delete";
    delBtn.className = "btn btn-danger btn-sm rounded-0 float-end";

    li.appendChild(delBtn);
    ul.appendChild(li);

     form.reset();
};

form.addEventListener("submit", saveTodo);
const deleteTodo=(e)=>{
    if (e.target.className.includes("btn-danger")) {
        if (window.confirm("Are Your Sure?")) {
          ul.removeChild(e.target.parentElement);
        }
      }
    }
    ul.addEventListener("click" ,deleteTodo);
 let clearBtn=document.querySelector("#clearBtn");
 clearBtn.addEventListener( "click",()=>{
  let allListitem = document.querySelectorAll("li");
  allListitem.forEach((item)=>{
    ul.removeChild(item);
  })
    
 })
    


