# JavaScript : Démarrage

## Variables

créer une variable :

```js
let maVariable;
```

Maintenant, maVariable existe, je peux l'appeler et lui assigner des valeurs.

```js
//pour donner une valeur, on utilise "="
let maVariable = "Bonjour";

console.log(maVariable);
//dans la console, on verra écrit "Bonjour"

maVariable = 2 + 2;

console.log(maVariable);
//dans la console, on verra écrit 4
```

## Les types de base

```js
1 //nombre entier (int)
-5 //nombre entier aussi (int)

2.7; //nombre à virgules (float)

("Bonjour"); //chaîne de caractère (string)
("a"); //chaîne de caractère (string)

true; //bouléen (bool)
false; //bouléen (bool)
```

## Les conditions et les vérifications

En algorithmie, il y a deux choses qu'on fait tout le temps : des calculs et des conditions. Les conditions sont essentielles.

Imaginons une fonction qui nous dit si un nombre est supérieur à 10 :

```
MaFonction(nombre) :
    si mon nombre est supérieur à 10 alors :
        renvoyer "Il est supérieur à 10"
    sinon :
        renvoyer "Il est inférieur ou égal à 10"
```

> Ici, on utilise une variable : `nombre`.

> Il y a une condition : `si [quelque chose] alors [faire] sinon [faire]`.

> Et bien sûr, pour que la condition fonctionne on vérifie quelque chose : `mon nombre est supérieur à 10`

Les conditions sont assez simples :
Si () alors {}, Sinon {}.

En JavaScript (et beaucoup d'autres langages) la syntaxe est la suivante :

```js
if (maCondition) {
	//faire quelque chose
} else {
	//faire autre chose
}
```

Une condition, ça ressemblera à une affirmation. Par exemple "maVariable vaut 6" ou bien "maVariable est supérieure à 10". Cette affirmation sera vérifiée par le programme et renverra donc 'vrai' ou 'faux';

```js
let maVariable = 0;

console.log(maVariable === 0);
//la console affichera "true"

console.log(maVariable === 9);
//la console affichera "false"

console.log(maVariable < 10);
//la console affichera "true"
```

## Les Fonctions

Une fonction, en algorithmie, c'est un morceau de code que l'on peut appeler autant de fois que l'on veut, en personnalisant les paramètres.

Par exemple : une fonction qui permet de dire bonjour

```js
function disBonjour(nom) {
	console.log("Bonjour " + nom + " !");
}
```

Une fois la fonction définie, on peut l'utiliser dans le code ou bien la taper directement dans la console.

En exécutant `disBonjour("Félix")`, <br>on verra écrit dans la console : `"Bonjour Félix !"`.

<hr>

Une fonction sert plus qu'à simplement écrire dans la console. Elle peut surtout renvoyer des valeurs avec `return`.

```js
//Voici une fonction qui renvoit une valeur au carré
function carre(n) {
	return n ** n;
}

let test = carre(4);
console.log(test);

//la console affichera bien 16, la fonction a renvoyé 16 dans la variable test.
```
