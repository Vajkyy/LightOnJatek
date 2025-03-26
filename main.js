import JatekTer from "./JatekTer.js";

let szuloElem = document.getElementsByClassName("jatekter")[0];
let JATEKTER = new JatekTer(szuloElem);

document.querySelector("button").addEventListener("click", () => {
  szuloElem.innerHTML = "";
  JATEKTER = new JatekTer(szuloElem);
});
