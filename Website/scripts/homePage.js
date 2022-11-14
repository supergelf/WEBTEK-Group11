const whatWeOffer = [
    {
        title : 'A terrific bowling experience', 
        text : 'At Bowl-O-Rama, your satisfaction is our highest priority. We constantly strive towards making your visit to Bowl-O-Rama the best bowling experience you can imagine.', 
        background : "../images/bowling.jpg"
    },

    {
        title : 'Birthdays', 
        text : 'If you want to throw a friend or family member an amazing birthday party, then there is no better place than Bowl-O-Rama. Let us know how we may set up the party by writing it under "Special Requirements" in the reservation form, or give us a call!', 
        background : "../images/birthday.jpg"
    },

    {
        title : 'Pool', 
        text : 'Besides from bowling, Bowl-O-Rama also houses some excellent pool tables, equipped with all the gear needed. It is quite popular, so you might want to make a reservation through our "Reservation" page', 
        background : "../images/pool.jpg"
    },

    {
        title : 'Food', 
        text : 'If you are planning to visit Bowl-O-Rama and wonder if we offer food, well worry no more! At Bowl-O-Rama we serve a variety of tasty meals and beverages. Check out our "Menu" page to see some of the delicious food we offer.', 
        background : "../images/menu_img/burgerImage.jpg"
    },

    {
        title : 'Events', 
        text : 'Bowl-O-Rama are proud to host events for all ages with exciting awards. All events are free to sign up for, just give us a call or let us know by sending an email. For more information, check out the "Events" page.', 
        background : "../images/event_img/bowlingTournament.jpg"
    },

    {
        title : 'Merch', 
        text : 'After noticing an increase in people asking for Bowl-O-Rama exclusive clothing, we made a bunch of merchandise available. All purchases must be made at our establishment, but feel free to browse our selection in the "Merch" page.', 
        background : "../images/merch_img/shoes.png"
    },
]

let offers = document.getElementById('offerContainer'); 

// Make and append the offers to the offer container
for (const offer of whatWeOffer){

    //creates the container for the title, text
    let offerBox = document.createElement('div');
    offerBox.setAttribute('class', 'offerBox');
    offerBox.style.backgroundImage = 'url(' + offer.background + ')'; 

    //creates the title element with the title inside
    let title = document.createElement('p');
    title.setAttribute('class', 'boxTitle');
    title.textContent = offer.title;

    //creates the text element with the text inside
    let desc = document.createElement('p');
    desc.setAttribute('class', 'offerDesc');
    desc.textContent = offer.text;

    offerBox.appendChild(title);
    offerBox.appendChild(desc);

    offers.appendChild(offerBox);
}