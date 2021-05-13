let myObject = {
    nom: 'nicolas',
    age: 18,
}

// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. En passant par la div dont l'id est object, récupère le h1 et le h2 dans un tableau du nom de myElements
let myElement = Array.from(document.querySelector("#object").children)
console.log(myElement);
// ### 2. Trouve une méthode pour créer un tableau des propriétés de ton objet
let arr = Object.entries(myObject)
console.log(arr);
// ### 3. Créer une boucle qui va parcourir toutes les propriétés contenu dans ton object et qui pour chacune d'elle fait un console.log de la propriété
arr.forEach((element) => {
    console.log(element[0]);
});
// ### 4. Efface ton console.log, trouve un moyen d'aller dans ton objet récupéré la valeur de chaque propriétés et fait un console log de ce que cela retourne
arr.forEach((element, index) => {
    console.log(index + ": " + " " + " " + element[1]);
});

// ### 5. Rajoute un count(compteur ou index comme tu l'entends) dans ta boucle
// ### 6. Sert toi de ce count/index pour parcourir ton tableau myElement dans ta boucle et d'y insirer ce qu'on te retourne a l'énoncé 4

// ! J'ai rien comprit mais j'ai fait ça

let x = Object.entries(myObject);
console.log(x);
x.forEach(e => {
    console.log(e[0]);
})