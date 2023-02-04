# Semaine 4 - Données et boucles

En plus des types de base, `bool`, `number`, `string`, il en existe certains qui sont très intéressants

Durant cette séance, nous avons appris une nouvelle façon de stocker des données : la liste (<i>Array</i>)

## Définition

Une liste se définit avec des crochets [ ] et n'est pas typée, c'est à dire qu'elle peut contenir plusieurs types de données différentes.

```js
//une liste vide
let maListe = []

// une liste de nombres
let uneAutre = [1,2,3,6,10] 

//une liste avec plusieurs types à l'intérieur
let listeDeTout = [
    true,
    "Bonjour à tous",
    1.02,
    4
]
```

## Intéraction

Pour accéder à un élément d'une liste, on fournit l'indice auquel se trouve l'élément. Reprenons notre liste de tout :

```js
let listeDeTout = [
    true,               //element n°0
    "Bonjour à tous",   //element n°1
    1.02,               //element n°2
    4                   //element n°3
]

console.log( listeDeTout[1] )
//la console renverra "Bonjour à tous"
```

> NB: En informatique, les indices commencent à 0 et non à 1

Il existe différentes méthodes et constantes applicables au tableau, en voici quelques unes :

```js
let maListe = [1,4,5,7,9]

maListe.toString()
//transforme la liste en chaine de caractère, renvoie "1,4,5,7,9"

maListe.length
//renvoie la longueur du tableau, ici 5

maListe.forEach( uneFonction(elt) )
```
Cette dernière méthode est très utilisée, voici son fonctionnement : On va lire chaque élément de la liste un par un (représenté par une variable qu'on a appelé ici `elt`) et à chaque fois, on exécutera une fonction.

La fonction `maFonction` est appelée une fonction de "callback", puisqu'elle sera exécutée à chaque élément.

Nous avons 2 choix lors de la définition d'une fonction de callback. Soit nous définissons de manière "nommée" :

```js
let maListe = [1,2,4,"Bonjour"]

function ecrisConsole(i){
    console.log(i)
}

maListe.forEach(ecrisConsole(elt))
````

Soit on peut aussi ne pas nommer la fonction (généralement quand elle est courte ou pas utilisée ailleurs), dans ce cas on fait une fonction dite "fléchée" :

```js
let maListe = [1,2,4,"Bonjour"]

maListe.forEach( (elt) => {
    console.log(elt)
} )
```

Nous avons vu en fin de séance qu'il était possible de stocker des listes dans des listes, ce point sera plus abordé à la séance suivante
