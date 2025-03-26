import Info from "./Info.js";
import Lampa from "./Lampa.js";

export default class JatekTer {
  #lista = [
    "green",
    "orange",
    "orange",
    "green",
    "green",
    "orange",
    "green",
    "orange",
    "orange",
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
      const ELEM = new Lampa(this.#lista[index], index, this.#szuloElem);
    }
    const INFO = new Info(this.#szamlalo, document.querySelector(".info"));
  }

  esemenyKivalaszt() {
    window.addEventListener("kivalaszt", (event) => {
      this.index = event.detail;
      console.log(event.detail);
      if (this.#lista[this.index] !== "orange") {
        this.#lista[this.index] = "orange";
        this.#szamlalo++;
      }
      this.#szuloElem.innerHTML = "";
      this.megjelenit();
      
    });
  }
}
