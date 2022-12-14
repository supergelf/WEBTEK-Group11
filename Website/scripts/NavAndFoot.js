function Navbar(){
    let topnav = document.getElementById('topNav');

    let top = document.createElement('div'); //container for the top part of the header
    top.setAttribute('id', 'navTop');

    let bottomnav = document.getElementById('bottomNav')

    let bottom = document.createElement('div'); //container for the navlinks
    bottom.setAttribute('id', 'navBottom');

    let pages = ['prices', 'reservation', 'menu', 'events', 'merch', 'about', 'contact'] //name of the links

    //creating the links
    for (const page of pages) {
        let a = document.createElement('a');
        a.textContent = page;
        a.setAttribute('class', 'navlink');
        a.setAttribute('href', '../pages/' + page + '.html');
        bottom.appendChild(a);
    }

    //creating the anchor element and putting the logo inside it
    let home = document.createElement('a');
    let logo = document.createElement('img');

    //create the logo
    logo.setAttribute('src', '../images/other/logo.png');
    logo.setAttribute('id', 'logo');
    logo.setAttribute('alt', 'Bowl-O-Rama logo');

    //link to homepage 
    home.setAttribute('href', '../pages/homepage.html')
    home.setAttribute('id', 'home');

    //put logo inside link and put both inside the top part of header
    home.appendChild(logo);
    top.appendChild(home);

    topnav.appendChild(top); //append top part of header to its container
    bottomnav.appendChild(bottom); //append bottom part of header to its container
    
};

Navbar()

//creating the footer
function Footer(){
    let footer = document.getElementById('footer');

    //each section of the footer
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');


    //first section: logo
    let logo = document.createElement('img');
    logo.setAttribute('src', '../images/other/logo.png');
    logo.setAttribute('id', 'footerLogo');
    logo.setAttribute('alt', 'Bowl-O-Rama logo');
    div1.appendChild(logo);

    //second section: opening hours
    let openingHours = document.createElement('h3'); //title
    openingHours.setAttribute('class', 'footerHeading')
    openingHours.textContent = "OPENING HOURS";

    let hours = ["Monday-Thursday: 11:00 - 22:00", "Friday-Saturday: 11:00 - 01:00", "Sunday: 11:00 - 23:00"];

    div2.appendChild(openingHours);

    for(const time of hours){ //create element for all the opening hours
        let p = document.createElement('p');
        p.textContent = time;
        div2.appendChild(p);
    };

    //third section: contact information
    let name = document.createElement('h3');
    name.setAttribute('class', 'footerHeading')
    name.textContent = "BOWL-O-RAMA AS";

    let phoneNum = document.createElement('p');
    phoneNum.textContent = "+47 999 99 999";

    let phoneIcon = document.createElement('img');
    phoneIcon.setAttribute('src', '../images/other/white-phone-icon.png');
    phoneIcon.setAttribute('alt', 'phone icon')

    let phoneContainer = document.createElement('div'); //container for the phone icon and number
    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phoneNum);
    phoneContainer.setAttribute('class', 'footerInfoContainer');


    let email = document.createElement('p');
    email.textContent = "bowlorama@gmail.com";

    let emailIcon = document.createElement('img');
    emailIcon.setAttribute('src', '../images/other/white-email-icon.png');
    emailIcon.setAttribute('alt', 'email icon');

    let emailContainer = document.createElement('div'); //container for email icon and email
    emailContainer.appendChild(emailIcon);
    emailContainer.appendChild(email);
    emailContainer.setAttribute('class', 'footerInfoContainer');

    //append name, phone-icon and number + email-icon and email to the third section
    div3.appendChild(name);
    div3.appendChild(phoneContainer);
    div3.appendChild(emailContainer);

    //fourth section: address
    let address = document.createElement('h3');
    address.textContent = "Bowlingveien 14, 7050 Trondheim";
    div4.appendChild(address);

    //id and class to style each section
    div1.setAttribute('id', 'footerDiv1');
    div2.setAttribute('class', 'footerDiv2-3');
    div3.setAttribute('class', 'footerDiv2-3');
    div4.setAttribute('id', 'footerDiv4');

    //append all to the footer container
    footer.appendChild(div1);
    footer.appendChild(div2);
    footer.appendChild(div3);
    footer.appendChild(div4);
};

Footer();