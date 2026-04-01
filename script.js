
let ulist = document.getElementById("ulist");

function addTask(){
let inputType = document.getElementById("input-type").value;
    if(inputType === ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputType;
        ulist.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="x";
        li.appendChild(span)
    }
    document.getElementById("input-type").value = "";
    saveData()
}
ulist.addEventListener("click",function (e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("list")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",ulist.innerHTML);
};
function showTask(){
    ulist.innerHTML = localStorage.getItem("data");
}
// to do list 2
let olist = document.getElementById("olist");

function newTask(){
    let input = document.getElementById("input").value;
    if(input === ""){
        alert ("you must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML =input;
        olist.appendChild(li)
        let span = document.createElement("span");
        span.innerHTML="Remove";
        li.appendChild(span);
    }
    document.getElementById("input").value = "";
    saveData();
}
olist.addEventListener("click",function(h){
    if(h.target.tagName === (LI)){
        h.target.classList.toggle ("list");
    }
    else if (h.target.tagName === (SPAN)){
        h.target.parentElement.remove();
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",olist.innerHTML);
}
function showTask(){
    olist.innerHTML = localStorage.getItem("data");
}