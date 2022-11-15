//array of objects so we can easily create more events if that is desireable
const events = [
    {
      title:   "Bowling tournament",
      type : 'bowling',
      date : 'Dec 14, 2022 18:00:00',
      imgLink: "../images/event_img/bowlingTournament.jpg",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae, repudiandae recusandae optio saepe, pariatur cum qui voluptatibus tempora ab accusamus inventore explicabo consectetur dolore. Reiciendis ea ad officiis amet?"
    },

    {
      title:   "Pool tournament",
      type : 'pool',
      date : 'Dec 18, 2022 18:30:00',
      imgLink: "../images/event_img/poolTournament.jpg",
      content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit vitae, repudiandae recusandae optio saepe, pariatur cum qui voluptatibus tempora ab accusamus inventore explicabo consectetur dolore. Reiciendis ea ad officiis amet?"
    },
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
    let timeContainer = document.createElement('div');

    let timeP = document.createElement('p'); //to store the time in numbers
    timeP.setAttribute('id', events[x].type + time); //each paragraph gets an unique id, to store the time

    let timeDesc = document.createElement('p'); //to store each of the time descriptions in the times array, like Days
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
  let eventList = document.getElementById('eventList');
  eventList.append(newDiv);
}



//Function to create a countdown timer for each event
function eventCountdown(){
  for (const event of events){
      let nextEvent = new Date(event.date).getTime(); //the next event 
      let now = new Date().getTime();

      let timeToEvent = nextEvent - now; //get number of milliseconds between now and the event

      let days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24)); //Calculate days
      let hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //Calculate hours
      let minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60)); //Calculate minutes
      let seconds = Math.floor((timeToEvent % (1000 * 60)) / (1000)); //Calculate seconds


      //Places the values inside each of their respective divs
      document.getElementById(event.type + "Days").innerHTML = days;
      document.getElementById(event.type + "Hours").innerHTML = hours;
      document.getElementById(event.type + "Minutes").innerHTML = minutes;
      document.getElementById(event.type + "Seconds").innerHTML = seconds;
  };
}

eventCountdown() //run once before 1 second has passed

setInterval(eventCountdown, 1000) //Update every 1000ms (1s)