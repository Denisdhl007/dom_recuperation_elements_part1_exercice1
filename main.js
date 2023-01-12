// // # Instructions :
// // >*En utilisant la methode getElementsByTagName*
// // ### 1. Stock tous les titres h1 dans une variable et affiche le contenu de cette variable dans un console.log 


let h1 = document.getElementsByTagName("h1");
console.log(h1);

// // ### 2. Après avoir récupéré tous les paragraphes, stock chaque sous titre h3 dans des variables différentes et affiche leur contenu dans un console.log différent/

let p = document.getElementsByTagName("p");
console.log(p);

let h3_1 = p[0].getElementsByTagName("h3");
console.log(h3_1);

let h3_2 = p[1].getElementsByTagName("h3");
console.log(h3_2);

let h3_3 = p[2].getElementsByTagName("h3");
console.log(h3_3);

// // ### 3. En utilisant la methode getElementsByTagName, Après avoir récupéré tous les paragraphe, stock le second paragraphe et affiche dans un console.log

let p = document.getElementsByTagName("p");
console.log(p);
let p_1 = p[1].getElementsByTagName("p");
console.log(p_1);

// // ### 4. En utilisant la methode getElementsByTagName, Après avoir récupéré tous les li, stock le 3eme li et affiche le dans un console.log

let li = document.getElementsByTagName("li");
console.log(li[2]);


Thanks
