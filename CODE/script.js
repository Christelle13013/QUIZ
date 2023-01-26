// lier le fichier j.son
let quiz = {};
getData();

async function getData() {
  const reponse = await fetch('fichier.json');
  quiz = await reponse.json();
  console.log(quiz);
}

//appel des éléments
const questions = document.getElementById("questions");
console.log(questions);
const titreQuestion = document.getElementById("titre_question");
console.log(titreQuestion);
const choix = document.getElementById("choix");
console.log(choix);
const block = document.getElementById("block");
console.log(block);
const button2 = document.getElementById("button2");
console.log(button2);
let choix1 = document.getElementsByClassName(".choix1")
let choix2 = document.getElementsByClassName(".choix2")
let choix3 = document.getElementsByClassName(".choix3")
let choix4 = document.getElementsByClassName(".choix4")
const rep1 = document.getElementById("rep1");
const rep2 = document.getElementById("rep2");
const rep3 = document.getElementById("rep3");
const rep4 = document.getElementById("rep4");



const pseudo = document.getElementById("champ");
const button1 = document.getElementById("button1");
button1.addEventListener("click",() =>{
  console.log("button1")
})




















