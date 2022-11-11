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
  }
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
  }
]

for(let x = 0; x < burger.length; x++){
  let newDiv  = document.createElement("div");
  let name   = burger[x].name;
  let img     = burger[x].imgLink;

  let newName   = document.createTextNode(name);

  let pEl    = document.createElement("p");

  let newImg = document.createElement("img");
  newImg.setAttribute("src",img);
  newImg.setAttribute("alt",name);

  pEl.appendChild(newName);

 newImg.setAttribute("class","menuImg");

  newDiv.appendChild(newImg);
  newDiv.appendChild(pEl);

  newDiv.setAttribute("class", "foodItem");

  let burgerList = document.getElementById("foodItemsBurger");

  burgerList.appendChild(newDiv);


}

for(let x = 0; x < pizza.length; x++){
  let newDiv  = document.createElement("div");
  let name   = pizza[x].name;
  let img     = pizza[x].imgLink;

  let newName  = document.createTextNode(name);

  let pEl    = document.createElement("p");

  let newImg = document.createElement("img");
  newImg.setAttribute("src",img);
  newImg.setAttribute("alt",name);

  pEl.appendChild(newName);

   newImg.setAttribute("class","menuImg");


  newDiv.appendChild(newImg);
  newDiv.appendChild(pEl);


  newDiv.setAttribute("class", "foodItem");

  let pizzaList = document.getElementById("foodItemsPizza");

  pizzaList.appendChild(newDiv);
}