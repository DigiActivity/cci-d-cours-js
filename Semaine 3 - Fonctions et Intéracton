```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <input type="text" placeholder="Entrer un age">
    <button>Vérifier l'âge</button>
    <p class="a-completer"></p>
    <script src="scripts/script.js"></script>
</body>
</html>
```

```js
let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");


button.addEventListener("click", verifieAge)


function verifieAge() {
    let monAge = input.value;
    if (monAge >= 18) {
        //dans le cas où je suis majeur
        if (monAge == 18) {
            p.innerHTML = "Je suis pile majeur"
        } else {
            p.innerHTML = "Je suis majeur";
        }

    } else {
        //dans le cas où je suis mineur
        if (monAge < 3) {
            p.innerHTML = "Je suis un bébé";
        } else {
            p.innerHTML = "Je suis mineur";
        }
    }
}


/*
let monAge = 10;

if (monAge >= 18) {
    console.log("je suis majeur")
} else {
    console.log("je suis mineur")
}

*/
```
