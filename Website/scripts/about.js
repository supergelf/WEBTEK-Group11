slides = document.querySelectorAll(".slides"); //get all the images for the slideshow

let i = 0

function slideshow(){
    lastIndex = slides.length -1; //get the last element in slides

    if(i === 0){ //instance if i === 0, must remove active form last index and not i -1
        slides[i].classList.add("active"); 
        slides[lastIndex].classList.remove("active");
    }      
    else{ //adds class to image that is supposed to be active, and removes it from the one that was active
        slides[i].classList.add("active");
        slides[i-1].classList.remove("active");
    }
    
    i++
    if( i === slides.length ){ //repeat infinitely 
        i = 0
    }
}

slideshow(); //run once, then after every 3.5 seconds
setInterval(slideshow, 3500);

