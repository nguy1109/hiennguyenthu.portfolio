const animals = [
    { char: "🐉", code: "128009", name: "Dragon" },
    { char: "🐊", code: "128010", name: "Crocodile" },
    { char: "🐋", code: "128011", name: "Whale" },
    { char: "🐌", code: "128012", name: "Snail" },
    { char: "🐍", code: "128013", name: "Snake" },
    { char: "🐎", code: "128014", name: "Horse" },
    { char: "🐏", code: "128015", name: "Ram" },
    { char: "🐐", code: "128016", name: "Goat" },
    { char: "🐑", code: "128017", name: "Sheep" },
    { char: "🐒", code: "128018", name: "Monkey" },
    { char: "🐓", code: "128019", name: "Rooster" }
];

const gallery = document.getElementById("emoji-gallery");

animals.forEach(animal => {
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji-item");

    emojiDiv.innerHTML = `
        <div class="emoji">${animal.char}</div>
        <div class="unicode">Code: &#${animal.code};</div>
        <div class="name">${animal.name}</div>
    `;

    gallery.appendChild(emojiDiv);
});




const images = [
    { thumbnail: 'images/1.jpg', hd: 'images/hd1.jpg', caption: 'Lake' },
    { thumbnail: 'images/2.jpg', hd: 'images/hd2.jpg', caption: 'Cafe shop' },
    { thumbnail: 'images/3.jpg', hd: 'images/hd3.jpg', caption: 'Cake' },
    { thumbnail: 'images/4.jpg', hd: 'images/hd4.jpg', caption: 'Window' },
    { thumbnail: 'images/5.jpg', hd: 'images/hd5.jpg', caption: 'Wedding' },
    { thumbnail: 'images/6.jpg', hd: 'images/hd6.jpg', caption: 'Garden' },
    { thumbnail: 'images/7.jpg', hd: 'images/hd7.jpg', caption: 'Hip hop' },
    { thumbnail: 'images/8.jpg', hd: 'images/hd8.jpg', caption: 'Texting' },
    { thumbnail: 'images/9.jpg', hd: 'images/hd9.jpg', caption: 'On car' },
    { thumbnail: 'images/10.jpg', hd: 'images/hd10.jpg', caption: 'Friend' },
    { thumbnail: 'images/11.jpg', hd: 'images/hd11.jpg', caption: 'Me' },
    { thumbnail: 'images/12.jpg', hd: 'images/hd12.jpg', caption: 'Rooftop' },
];
  
const galleryContainer = document.querySelector('.gallery-container');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('.modal-img');
const captionText = document.querySelector('.caption');
const closeBtn = document.querySelector('.close-btn');


images.forEach((img, index) => {
  const imageElement = document.createElement('img');
  imageElement.src = img.thumbnail;
  imageElement.alt = img.caption;
  imageElement.dataset.index = index; // For event delegation reference
  imageElement.dataset.hd = img.hd;
  imageElement.dataset.caption = img.caption;
  galleryContainer.appendChild(imageElement);
});


galleryContainer.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    const hdSrc = e.target.dataset.hd;
    const caption = e.target.dataset.caption;
    modalImg.src = hdSrc;
    captionText.textContent = caption;
    modal.classList.remove('hidden');
  }
});


modal.addEventListener('click', () => {
  modal.classList.add('hidden');
  modalImg.src = '';
  captionText.textContent = '';
});


modalImg.addEventListener('click', (e) => {
  e.stopPropagation();
});

