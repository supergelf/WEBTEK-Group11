const burger = [
  {
    name: "Bowlo-Burger",
    imgLink:"../images/menu_img/burgerImage.jpg"

  },
  {
    name: "Bowlo-Bacon'n Cheese",
    imgLink:"../images/menu_img/burgerImage.jpg"
  },
  {
    name:"Bowlorama-Supreme",
    imgLink:"../images/menu_img/burgerImage.jpg"
  },
  {
    name: "Blue-Cheese Bonanza",
    imgLink:"../images/menu_img/burgerImage.jpg"
  },
  {
    name:"Veggie-Dream",
    imgLink:"../images/menu_img/burgerImage.jpg"
  },
]


const pizza = [
  {
    name: "Bolwora-Margarita",
    imgLink:"../images/menu_img/pizzaImage.jpg"
  },
  {
    name: "Pepporama pizza",
    imgLink:"../images/menu_img/pizzaImage.jpg"
  },
  {
    name:"Bowlopizza Special",
    imgLink:"../images/menu_img/pizzaImage.jpg"
  },
  {
    name: "Bowling-Champ pizza",
    imgLink:"../images/menu_img/pizzaImage.jpg"
  },
  {
    name:"King Special",
    imgLink:"../images/menu_img/pizzaImage.jpg"
  },
]

for(let x = 0; x < pizza.length; x++){  //for every object in pizza array
  let newDiv = document.createElement("div");
  let name = pizza[x].name;
  let img = pizza[x].imgLink;

  let newName = document.createTextNode(name); //name of pizza
  let pEl = document.createElement("p");
  pEl.appendChild(newName);

  //create image 
  let newImg = document.createElement("img");
  newImg.setAttribute("src",img);
  newImg.setAttribute("alt",name);
  newImg.setAttribute("class","menuImg");

  //append image and text to div
  newDiv.appendChild(newImg);
  newDiv.appendChild(pEl);

  newDiv.setAttribute("class", "foodItem");

  let pizzaList = document.getElementById("foodItemsPizza");

  pizzaList.appendChild(newDiv); //append item to the pizza row
}


//Creating the burger elements the same way as the pizza
for(let x = 0; x < burger.length; x++){
  let newDiv = document.createElement("div");
  let name = burger[x].name;
  let img = burger[x].imgLink;

  let newName = document.createTextNode(name);

  let pEl = document.createElement("p");
  pEl.appendChild(newName);

  let newImg = document.createElement("img");
  newImg.setAttribute("src",img);
  newImg.setAttribute("alt",name);

 newImg.setAttribute("class","menuImg");

  newDiv.appendChild(newImg);
  newDiv.appendChild(pEl);

  newDiv.setAttribute("class", "foodItem");

  let burgerList = document.getElementById("foodItemsBurger");

  burgerList.appendChild(newDiv);


}
