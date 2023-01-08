# JavaScript Semaine 1
> Samedi 7 Janvier

Durant cette session, nous avons découvert à quoi ressemblait JavaScript et à quoi il servait. JS est un langage de programmation 
qui rend une page web intéractive : Ce langage permet de créer des événements, de les conditionner et grâce à cela, modifier la page web.


1) Comment cibler un élément ?

Imaginons que nous voulons agir sur le titre de notre page, le titre est dans la balise h1 :
```html 
<h1>Mon super titre</h1>
```

Pour aller le chercher en JavaScript, on se sert de la méthode `querySelector` qui prend en argument la même syntaxe de recherche que CSS :
```js
let monTitre = document.querySelector("h1");
```

Ici, la variable `monTitre` fera référence à mon h1.

2) Comment modifier un élément ?

Reprenons `monTitre` et imaginons que nous souhaitons lui ajouter la classe "titre" et le colorier en rouge :

```js
//pour modifier ses classes
monTitre.classList.add("titre");

//pour ajouter du style en 'inline'
monTitre.style.color = "red";
```

Au niveau du code de la page on se retrouve avec :
```html 
<h1 class="titre" style="color: red;">Mon super titre</h1>
```

> À noter qu'il n'est pas recommandé d'insérer des styles en inline car ceux-ci seront absolument prioritaires sur tous les styles CSS.
> Il faut privilégier de mettre des styles dans une classe CSS et d'ajouter cette classe à notre titre.

3) Comment créer un événement ?

L'événement en JS se crée grâce à la méthode `addEventListener` des éléments.

Imaginons que nous ayons un paragraphe et un bouton, et que nous souhaitons qu'au clic sur le bouton, le paragraphe disparaisse :
```html
<p>Attention je vais disparaître</p>
<button>Cliquez-moi</button>
```
En JS nous pourrons écrire ça :

```js
//on commence par aller chercher tous nos éléments
let monParagraphe = document.querySelector("p");
let monBouton = document.querySelector("button");

//on ajoute l'événement sur le bouton, il faut lui renseigner le type d'évenement, et lui donner la fonction qui doit être exécutée à cet événement.
monBouton.addEventListener("click", () => {

  //tout ce qui est noté entre les {} s'exécutera à chaque clic sur le bouton
  monParagraphe.style.display = "none";
  
})

La semaine suivante portera sur les bases de l'algorithmie et de la syntaxe JavaScript
