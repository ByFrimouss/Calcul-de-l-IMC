let poids = document.getElementById("poids");
let taille = document.getElementById("taille");
let bouton = document.getElementById("bouton");

bouton.addEventListener("click", () => {
  let valPoids = poids.value;
  let valTaille = taille.value;
  let imc = valPoids / valTaille ** 2;

  let result = Math.round(imc);
  alert(result)
});