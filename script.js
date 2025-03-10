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

