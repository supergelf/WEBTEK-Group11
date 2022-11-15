slides = document.querySelectorAll(".slides");

let i = 0

function slideshow(){
    djsjif()
    i++
    if( i == slides.length ){
        i = 0
    }
    setTimeout("slideshow()", 3500);
}
slideshow()

function djsjif(){
    lastIndex = slides.length -1;
    if(i == 0){
        slides[i].classList.add("active");
        slides[lastIndex].classList.remove("active");
    }      
    else{
        slides[i].classList.add("active");
        slides[i-1].classList.remove("active");
    }
        
}



