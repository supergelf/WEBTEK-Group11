// Get elements
let date = document.querySelector("#date");
let inputs = document.querySelectorAll(".validateInp");
let firstname = document.querySelector("#firstname")
let lastname = document.querySelector("#firstname")
let email = document.querySelector("#email")
let time = document.querySelector("#time")
let rounds = document.querySelector("#rounds")
let alleys = document.querySelector("#alleys")
let form = document.querySelector("#form")
let successMsg = document.querySelector("#successMsg")


// Form validation for date and time input
let today = new Date();
let day = today.getDate();
let month = today.getMonth() +1;
let year = today.getFullYear();
let min = today.getMinutes();
let hour = today.getHours();
let maxDay = today.getDate() + 7;

if(day < 10){
    day = "0" + day; 
}
if(month < 10){
    month = "0" + month;
}
if(min < 10){
    min = "0" + min;
}
if(hour < 10){
    hour = "0" + hour;
}


today = `${year}-${month}-${day}`;
maxDate = `${year}-${month}-${maxDay}`
timeNow = hour + ":" + min;
date.setAttribute("min", today);
date.setAttribute("max", maxDate)


// form validation 

for(let input of inputs){ //checks validation of each input whenever input is updated
    input.addEventListener("input", (e) =>{
        validateInputs(e);
    });
}

function validateInputs(e){
    let input = e.target

    //report error for each input
    if(input.value === ""){
        setError(input)
        }
    else{
        setValid(input)
        input.setCustomValidity("");
    }
    if(input == email){
        if(!emailCheck(email.value)) { //checks validity of email with the function further down
        setError(email)
        email.setCustomValidity("Please type a valid email-address");
        email.reportValidity();
        }
    } 
    if(input == date){ //limit how far into the future the user can make a reservation for
        if(date.value < today || date.value > maxDate){
            setError(date)
            date.setCustomValidity("Please choose a date within a week from now");
            date.reportValidity();
        }
    } 
    if(input == rounds){ //limit the amount of rounds the user can choose
        if(rounds.value < 1 || rounds.value > 2){
            setError(rounds)
            rounds.setCustomValidity("You can only make a reservation for 1 or 2 rounds");
            rounds.reportValidity();
        }
    } 
    if(input == time){ //limit the time range the user can choose
        if(time.value < "11:00" || time.value > "21:00" ){
            setError(time)
            time.setCustomValidity(`Please choose a time between 11:00 and 21:00`);
            time.reportValidity();
        }
        else if(date.value == today && time.value < timeNow){ //to not make it possible for user to choose time before present time on the same day
            setError(time)
            time.setCustomValidity(`Please choose a time between ${timeNow} and 21:00`);
            time.reportValidity();
        } 
    } 
    if(input == alleys){ //limit how many alleys/tables the user can choose
        if(alleys.value < 1 || alleys.value > 2){
            setError(alleys)
            alleys.setCustomValidity("You can only reserve 1 or 2 alleys/tables");
            alleys.reportValidity();
        }
    } 
    
}

//to add error if invalid input, and remove valid  class
function setError(input){
    input.classList.add("error");
    input.classList.remove("valid");
}

//to add valid class if valid input and remove error class
function setValid(input){
    input.classList.add("valid");
    input.classList.remove("error");
}

function emailCheck(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

//counts up all the errors when button is pressed
form.addEventListener("submit", (event)=>{
    let errors = 0
    event.preventDefault();
    window.scrollTo(0, 0);

    for(let input of inputs){ 
        if(input.classList.contains("error")){
            errors++;
        }
    }
    if(errors < 1){ //success message if no errors
        form.classList.add("success")
        successMsg.innerHTML = `Reservasjon vellykket! vi sees ${time.value}, ${date.value}`;
    }
})


