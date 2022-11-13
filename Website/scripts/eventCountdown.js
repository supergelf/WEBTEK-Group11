let eventList = [
    {
        type : 'bowling', 
        date : 'Dec 14, 2022 18:00:00'
    }, 
 

    {
        type : 'pool', 
        date : 'Dec 18, 2022 18:30:00'
    }
]


function eventCountdown(){

    for (const event of eventList){
        let nextEvent = new Date(event.date).getTime(); //the next event 
        let now = new Date().getTime();
        let timeToEvent = nextEvent - now; //get how many milliseconds it is between now and the event

        let days = Math.floor(timeToEvent / (1000 * 60 * 60 * 24)); //Calculate days
        let hours = Math.floor((timeToEvent % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //Calculate hours
        let minutes = Math.floor((timeToEvent % (1000 * 60 * 60)) / (1000 * 60)); //Calculate minutes
        let seconds = Math.floor((timeToEvent % (1000 * 60)) / (1000)); //Calculate seconds


        //Places the values inside each of their respective div
        document.getElementById(event.type + "Days").innerHTML = days
        document.getElementById(event.type + "Hours").innerHTML = hours
        document.getElementById(event.type + "Minutes").innerHTML = minutes
        document.getElementById(event.type + "Seconds").innerHTML = seconds
    }

}

eventCountdown() //run once before 1 second has passed

setInterval(eventCountdown, 1000)//Updates every 1000ms (1s)
