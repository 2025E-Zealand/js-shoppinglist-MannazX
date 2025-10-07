//Write your Javascript code here
console.log("Shoppinglist")


function createNode(idAtt, classAtt, nodeText) {
    let element = document.createElement("li");
    element.setAttribute("id", idAtt);
    element.setAttribute("class", classAtt);
    let textNode = document.createTextNode(nodeText);
    element.appendChild(textNode);

    return element;

}

function addItemToList(id, element) {
    let node = document.getElementById(id);
    node.appendChild(element);

    return node;

}

function changeAttribute(element, value) {
    element.setAttribute("class", value);
    
    return element;
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

let textElem = createNode("list", "healthy", "Pears")
console.log(textElem);
let newNode = addItemToList("list", textElem);
console.log(newNode);
//let newClass = changeAttribute(textElem, "unhealthy");
//console.log(newClass);


//let newNode = findNode("list", "li");
//console.log(newNode);

/*
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    const nodeText = "";
    let node = findNode("list", "li", nodeText)
})
*/
