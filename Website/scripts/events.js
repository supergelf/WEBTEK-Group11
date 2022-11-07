
const events = [
{
  title:   "Bowling tournament",
  imgLink: "../images/Tournament.jpg",
  content: "content"
},
{
  title:   "Pool tournament",
  imgLink: "../images/Ptournament.jpg",
  content: "content"
}
];
// for every array item in events
for(let x = 0; x < events.length; x++){
  const newDiv  = document.createElement("div");
  const title   = events[x].title;
  const img     = events[x].imgLink;
  const content = events[x].content;

//text node with the contents of title and content
  const newTitle   = document.createTextNode(title);
  const newContent = document.createTextNode(content);

//create the elements
  const h2El   = document.createElement("h2");
  const imgEl  = document.createElement("img");
  const pEl    = document.createElement("p");

//assign values to the elements
  h2El.appendChild(newTitle);
  imgEl.src = img;
  pEl.appendChild(newContent);

//append the elements to the new div
  newDiv.appendChild(h2El);
  newDiv.appendChild(imgEl);
  newDiv.appendChild(pEl);
//add a class attribute to the div
  newDiv.classList.add("event");

//insert div after the intro

  let eventList = document.getElementById('eventList')
  eventList.append(newDiv)
}
