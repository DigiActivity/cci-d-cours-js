/*
    Première Partie : Se présenter
*/

//compléter avec les bonnes informations
const moi = {
    nom: "",
    age: 0,
    description: ""
}

// aller chercher les bons éléments dans le DOM grâce à des sélecteurs

let nomHTML = ;
let ageHTML = ;
let descriptionHTML = ;


// changer le contenu de ces éléments avec les bonnes informations

//TODO

/*
    Deuxième Partie : Les jeux préférés
*/

//  Créer une structure de données (liste ou objet) qui liste des jeux
// Cela peut être sous la forme : ["Nom", "#couleur"] ou {nom: "Nom", couleur: "#couleur"}
// Il faut lister au moins 4 jeux

const mesJeux = [

]

// aller chercher la liste <ul> dans la div.games avec un querySelector

//TODO

// Pour chaque élément du tableau mesJeux (à faire boucler avec un .forEach) :
//  - créer un élément <li> avec document.createElement
//  - remplacer le contenu de cet élément avec le nom du jeu
//  - remplacer la couleur du texte de cet élément avec la couleur du jeu

//TODO

//  - ajouter cet élément à la liste <ul> avec la méthode .appendChild

//TODO


/*
    Troisième Partie : Les Tabs
*/

// Un tabs est un système qui permet d'afficher un contenu différent en fonction de l'onglet sélectionné

// créer une structure qui liste des trucs qu'on aime ou aime pas

let trucs = {
    aime: [
        //TODO
    ],
    aimePas: [
        //TODO
    ]
}

// concevoir une fonction qui renvoie un élément HTML <ul> en fonction de si on veut les trucs qu'on aime ou pas

function createList(trucs){
    // créer un élément <ul>, le stocker dans une variable
    // pour chaque élément du tableau trucs (à faire boucler avec un .forEach) :
    //  - créer un élément <li> avec document.createElement
    //  - remplacer le contenu de cet élément avec le nom du truc
    //  - ajouter cet élément à la liste <ul> avec la méthode .appendChild
    // retourner la liste <ul>
}

// aller chercher dans le DOM les éléments qui vont nous servir (les deux boutons et la div qui va contenir les listes)

//TODO

// pour chaque bouton, ajouter un écouteur d'événement "click" qui va :
//  - vider la div qui va contenir les listes
//  - créer une liste avec la fonction createList en fonction du bouton cliqué
//  - ajouter cette liste à la div qui va contenir les listes