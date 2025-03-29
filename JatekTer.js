import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class JatekTer {
  #lista = [
    "green", "orange", "orange",
    "green", "green", "orange",
    "green", "orange", "orange",
  ];
  #szuloElem;
  #szamlalo = 5;

  constructor(szuloElem) {
    this.#szuloElem = szuloElem;
    this.megjelenit();
    this.esemenyKivalaszt();
  }

  megjelenit() {
    for (let index = 0; index < this.#lista.length; index++) {
      new Lampa(this.#lista[index], index, this.#szuloElem);
    }
    new Info(this.#szamlalo, document.querySelector(".info"));
  }

  esemenyKivalaszt() {
    window.addEventListener("kivalaszt", (event) => {
      let index = event.detail;
      let szomszedok = [];

      this.#lista[index] = this.#lista[index] === "green" ? "orange" : "green";
      this.#szamlalo += this.#lista[index] === "orange" ? 1 : -1;

      let sor = Math.floor(index / 3);
      let oszlop = index % 3;

      if (sor > 0) szomszedok.push(index - 3);
      if (sor < 2) szomszedok.push(index + 3);
      if (oszlop > 0) szomszedok.push(index - 1);
      if (oszlop < 2) szomszedok.push(index + 1);

      for (let i = 0; i < szomszedok.length; i++) {
        let j = szomszedok[i];
        this.#lista[j] = this.#lista[j] === "green" ? "orange" : "green";
        this.#szamlalo += this.#lista[j] === "orange" ? 1 : -1;
      }

      this.#szuloElem.innerHTML = "";
      this.megjelenit();

      let mindZold = true;
      for (let i = 0; i < this.#lista.length; i++) {
        if (this.#lista[i] !== "green") {
          mindZold = false;
        }
      }

      if (mindZold) {
        alert("Hurrá, meghosszabbítottad a Föld életét!");
      }
    });
  }
}
