const merchList = [
    {
        title: 'Stylish Pants', 
        img : '../images/merch_img/pants.webp',
        alt : 'stylish pants'
    },

    {
        title: 'Bowling Glasses', 
        img : '../images/merch_img/glasses.webp',
        alt : 'bowling glasses'
    },

    {
        title: 'Simply the best Bowling Shoes', 
        img : '../images/merch_img/shoes.png',
        alt : 'fancy bowling shoes'
    },

    {
        title: 'Awesome Bowling Hat', 
        img : '../images/merch_img/hat.jpg',
        alt : 'hat shaped like a bowling cone'
    },

    {
        title: 'Cool Stickers', 
        img : '../images/merch_img/sticker.png',
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

let merchContainer = document.getElementById('merchContainer'); //where the items are supposed to be put

for (const item of merchList){ 
    //create div for each object in array
    let merchItem = document.createElement('div');
    merchItem.setAttribute('class', 'merchOption');

    //create image
    let image = document.createElement('img');
    image.setAttribute('alt', item.alt);
    image.setAttribute('src', item.img)

    //create anchor tag and put the image inside it
    let fullImage = document.createElement('a');
    fullImage.setAttribute('href', item.img);
    fullImage.setAttribute('target', '_blank');
    fullImage.appendChild(image);

    //create the title of the item
    let title = document.createElement('p');
    title.setAttribute('class', 'merchTitle');
    title.textContent = item.title;

    //append image and title to item, and item to the page
    merchItem.appendChild(fullImage);
    merchItem.appendChild(title);
    merchContainer.appendChild(merchItem);
}