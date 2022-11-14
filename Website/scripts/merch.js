const merchList = [
    {
        title: 'Stylish Pants', 
        img : '../images/merch_img/bukser.webp',
        alt : 'stylish pants'
    },

    {
        title: 'Bowling Glasses', 
        img : '../images/merch_img/briller2.webp',
        alt : 'bowling glasses'
    },

    {
        title: 'Simply the best Bowling Shoes', 
        img : '../images/merch_img/sko.png',
        alt : 'fancy bowling shoes'
    },

    {
        title: 'Awesome Bowling Hat', 
        img : '../images/merch_img/hatt.jpg',
        alt : 'hat shaped like a bowling cone'
    },

    {
        title: 'Cool Stickers', 
        img : '../images/merch_img/klistremerke2.png',
        alt : 'bowling sticker'
    },

    {
        title: 'Cool Bowling Shorts', 
        img : '../images/merch_img/cool_bowling_shorts.png',
        alt : 'cool bowling shorts'
    },

    {
        title: 'Fancy Pants', 
        img : '../images/merch_img/bowling_pants.png',
        alt : 'fancy pants'
    },
]

let merchContainer = document.getElementById('merchContainer');

for (const item of merchList){
    let merchItem = document.createElement('div');
    merchItem.setAttribute('class', 'merchOption');

    let image = document.createElement('img');
    image.setAttribute('alt', item.alt);
    image.setAttribute('src', item.img)

    let fullImage = document.createElement('a');
    fullImage.setAttribute('href', item.img);
    fullImage.setAttribute('target', '_blank');
    fullImage.appendChild(image);

    let title = document.createElement('p');
    title.setAttribute('class', 'merchTitle');
    title.textContent = item.title;

    merchItem.appendChild(fullImage);
    merchItem.appendChild(title);

    merchContainer.appendChild(merchItem);
}