const events = [

{
  title:   "Bowling tournament",
  type : 'bowling',
  imgLink: "../images/event_img/bowlingTournament.jpg",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae, repudiandae recusandae optio saepe, pariatur cum qui voluptatibus tempora ab accusamus inventore explicabo consectetur dolore. Reiciendis ea ad officiis amet?"
},

{
  title:   "Pool tournament",
  type : 'pool',
  imgLink: "../images/event_img/poolTournament.jpg",
  content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae, repudiandae recusandae optio saepe, pariatur cum qui voluptatibus tempora ab accusamus inventore explicabo consectetur dolore. Reiciendis ea ad officiis amet?"
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
  const pEl    = document.createElement("p");

//create elements for the countdown timers
  const timerDiv = document.createElement('div');
  timerDiv.setAttribute('class', 'timerDiv');

  let times = ['Days', 'Hours', 'Minutes', 'Seconds']

  for(const time of times){
    let timeContainer = document.createElement('div')

    let timeP = document.createElement('p');
    timeP.setAttribute('id', events[x].type + time);

    let timeDesc = document.createElement('p');
    timeDesc.textContent = time;
    
    timeContainer.appendChild(timeP);
    timeContainer.appendChild(timeDesc);
    timeContainer.setAttribute('class', 'timeContainer');

    timerDiv.appendChild(timeContainer);
    
  };


//assign values to the elements
  h2El.appendChild(newTitle);
  pEl.appendChild(newContent);

//append the elements to the new div
  newDiv.appendChild(h2El);
  newDiv.appendChild(timerDiv);
  newDiv.appendChild(pEl);

//add a class attribute to the div
  newDiv.setAttribute("class", "event");
  newDiv.style.backgroundImage = "url(" + img + ')'; //give it a background image relating to the event

//insert into events div

  let eventList = document.getElementById('eventList')
  eventList.append(newDiv)
}
