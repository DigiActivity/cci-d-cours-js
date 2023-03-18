# Correction du TD

```js

/*
    Première Partie : Se présenter
*/

const h1 = document.querySelector("h1")

const moi = {
    nom: "Félix Laviéville",
    age: 19,
    description: "je fais du code"
}

let nomHTML = document.querySelector('#nom');
let ageHTML = document.querySelector('#age');
let descriptionHTML = document.querySelector('#description');

nomHTML.innerHTML = moi.nom;
ageHTML.innerHTML = moi.age;
descriptionHTML.innerHTML = moi.description;

/*
    Deuxième Partie : Les jeux préférés
*/


const mesJeux = [
    ["Minecraft", "green"],
    ["Subnautica", "blue"],
    ["Assassin's Creed", "#ff0000"],
    ["Subnautica encore", "blue"],
]

let myUL = document.querySelector("div.games ul")

mesJeux.forEach(sousTableau => {
    let li = document.createElement('li') // li correspond à "<li> </li>"
    li.innerHTML = sousTableau[0]
    li.style.color = sousTableau[1]
    myUL.appendChild(li)
})

/*
    Troisième Partie : Les Tabs
*/

// Un tabs est un système qui permet d'afficher un contenu différent en fonction de l'onglet sélectionné

// créer une structure qui liste des trucs qu'on aime ou aime pas

let trucs = {
    aime:       [ "test aime 1" ,"test aime 2" ],
    aimePas:    [ "test aime pas 1" , "test aime pas 2"  ]
}

// concevoir une fonction qui renvoie un élément HTML <ul> en fonction de si on veut les trucs qu'on aime ou pas

function createList(tableau){
    let ul = document.createElement('ul');
    tableau.forEach(e => {
        let li = document.createElement('li');
        li.innerHTML = e
        ul.appendChild(li)
    });

    return ul
}

// aller chercher dans le DOM les éléments qui vont nous servir (les deux boutons et la div qui va contenir les listes)

const buttonLike = document.querySelector("#button-like");
const buttonHate = document.querySelector("#button-hate");
const tabContent = document.querySelector(".tab-content");


// pour chaque bouton, ajouter un écouteur d'événement "click" qui va :
//  - vider la div qui va contenir les listes
//  - créer une liste avec la fonction createList en fonction du bouton cliqué
//  - ajouter cette liste à la div qui va contenir les listes

buttonLike.addEventListener("click", () => {
    tabContent.innerHTML = ""
    let listLike = createList(trucs.aime)
    tabContent.appendChild(listLike)
})

buttonHate.addEventListener("click", () => {
    tabContent.innerHTML = ""
    let listHate = createList(trucs.aimePas)
    tabContent.appendChild(listHate)
})

```
