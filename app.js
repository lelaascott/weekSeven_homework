const wrapper = document.querySelector('#wrapper');

const list = [

    {

        name: "Charmander",

        type: "Fire",

        species: "Lizard",

        maxHP: 100,

        moves: ["Scratch", "Ember", "Flamethrower"]

    },

    {

        name: "Squirtle",

        type: "Water",

        species: "Tiny Turtle",

        maxHP: 110,

        moves: ["Tackle",  "Water Gun" , "Bite"]

    },

    {

        name: "Pikachu",

        type: "Electric",

        species: "Electric Mouse",

        maxHP: 95,

        moves: ["Quick Attack",  "Thunder Shock" , "Thunderbolt"]

    },
    {
        name: "Typlosion",

        type: "Fire",

        species: "Volcano",

        maxHP: 95,

        moves: ["Ember", "Leer", "SmokeScreen"]
    }

];


function renderItems() {
    wrapper.innerHTML = '';
    list.forEach((item, idx) => {
        const ele = document.createElement("div");
        const header = document.createElement("h1");
        const type = document.createElement("h2");
        const species = document.createElement("h3");
        const maxHP = document.createElement("p");
        const moves = document.createElement("p");
        const deleteEle = document.createElement("submit");

        header.innerText = item.name;
        type.innerText = item.type;
        species.innerText = item.species;
        maxHP.innerText = item.maxHP;
        moves.innerText = item.moves;

        deleteEle.innerText = "X";

        deleteEle.addEventListener("click", () => {
            list.splice(idx, 1);
            renderItems();
        });


        if (item.type === "Fire") {
            ele.style.color = "orange";
        } else if (item.type === "Water") {
            ele.style.color = "lightblue";
        } else if (item.type === "Electric") {
            ele.style.color = "gold";
        }


        ele.appendChild(header);
        ele.appendChild(type);
        ele.appendChild(species);
        ele.appendChild(maxHP);
        ele.appendChild(moves);
        ele.appendChild(deleteEle);

        wrapper.appendChild(ele);
    });
}

    document.getElementById("submit").addEventListener("click", () => {
        const obj = {
            name: document.getElementById("name").value,
            type: document.getElementById("type").value,
            species: document.getElementById("species").value,
            maxHP: document.getElementById("maxHP").value,
            moves: document.getElementById("moves").value
        };
        list.push(obj)
        renderItems();
    });

renderItems();
