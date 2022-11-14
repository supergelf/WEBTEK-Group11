function Navbar(){
    let topnav = document.getElementById('topNav');

    let top = document.createElement('div');
    top.setAttribute('id', 'navTop');

    let bottomnav = document.getElementById('bottomNav')

    let bottom = document.createElement('div');
    bottom.setAttribute('id', 'navBottom');

    let pages = ['prices', 'reservation', 'menu', 'events', 'merch', 'about', 'contact']

    for (const page of pages) {
        let a = document.createElement('a');
        a.textContent = page;
        a.setAttribute('class', 'navlink');
        a.setAttribute('href', '../pages/' + page + '.html');
        bottom.appendChild(a);
    }

    let home = document.createElement('a');
    let logo = document.createElement('img');

    logo.setAttribute('src', '../images/logo.png');
    logo.setAttribute('id', 'logo');
    logo.setAttribute('alt', 'Bowl-O-Rama logo');

    home.setAttribute('href', '../pages/homepage.html')

    home.setAttribute('id', 'home');

    home.appendChild(logo);
    top.appendChild(home);

    topnav.appendChild(top);
    bottomnav.appendChild(bottom)

    
};

Navbar()


function Footer(){
    let footer = document.getElementById('footer');

    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let div3 = document.createElement('div');
    let div4 = document.createElement('div');


    let logo = document.createElement('img');
    logo.setAttribute('src', '../images/logo.png');
    logo.setAttribute('id', 'footerLogo');
    logo.setAttribute('alt', 'Bowl-O-Rama logo');
    div1.appendChild(logo);


    let openingHours = document.createElement('h3');
    openingHours.setAttribute('class', 'footerHeading')
    openingHours.textContent = "OPENING HOURS";

    let hours = ["Monday-Thursday: 11:00 - 22:00", "Friday-Saturday: 11:00 - 01:00", "Sunday: 11:00 - 23:00"];

    div2.appendChild(openingHours);

    for(const time of hours){
        let p = document.createElement('p');
        p.textContent = time;
        div2.appendChild(p);
    };

    let name = document.createElement('h3');
    name.setAttribute('class', 'footerHeading')
    name.textContent = "BOWL-O-RAMA AS";

    let phoneNum = document.createElement('p');
    phoneNum.textContent = "+47 999 99 999";

    let phoneIcon = document.createElement('img');
    phoneIcon.setAttribute('src', '../images/icons/white-phone-icon.png');
    phoneIcon.setAttribute('alt', 'phone icon')

    let phoneContainer = document.createElement('div');
    phoneContainer.appendChild(phoneIcon);
    phoneContainer.appendChild(phoneNum);
    phoneContainer.setAttribute('class', 'footerInfoContainer');


    let email = document.createElement('p');
    email.textContent = "bowlorama@gmail.com";

    let emailIcon = document.createElement('img');
    emailIcon.setAttribute('src', '../images/icons/white-email-icon.png');
    emailIcon.setAttribute('alt', 'email icon');

    let emailContainer = document.createElement('div');
    emailContainer.appendChild(emailIcon);
    emailContainer.appendChild(email);
    emailContainer.setAttribute('class', 'footerInfoContainer');


    div3.appendChild(name);
    div3.appendChild(phoneContainer);
    div3.appendChild(emailContainer);


    let address = document.createElement('h3');
    address.textContent = "Bowlingveien 14, 7050 Trondheim";

    div4.appendChild(address);

    div1.setAttribute('id', 'footerDiv1');
    div2.setAttribute('class', 'footerDiv2-3');
    div3.setAttribute('class', 'footerDiv2-3');
    div4.setAttribute('id', 'footerDiv4');

    footer.appendChild(div1);
    footer.appendChild(div2);
    footer.appendChild(div3);
    footer.appendChild(div4);
};

Footer();