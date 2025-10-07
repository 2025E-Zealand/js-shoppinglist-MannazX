//Write your Javascript code here
console.log("Shoppinglist")


function createTextNode(id, attr, nodeText) {
    let element = document.createElement("li");
    element.setAttribute("id", "0");
    element.setAttribute("class", "healthy");

    let node = findNode(id, attr, nodeText);
    return node;

}

function findNode(id, type, nodeText) {
    let node = document.getElementById(id);
    node.style.color = "red";
    node.style.backgroundColor = "black";
    node.style.fontSize = "30px";
    node.style.fontWeight = "bold";
    
    let newNode = document.createElement(type);
    newNode.innerText = nodeText;
    newNode.style.color = "blue";
    node.appendChild(newNode);
    
    return node;

}

//let newNode = findNode("list", "li");
//console.log(newNode);

/*
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const nodeText = "";
    let node = findNode("list", "li", nodeText)
})
*/
