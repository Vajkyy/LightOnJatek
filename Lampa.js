export default class Lampa {
  #szin;
  #index;
  constructor(szin, index, szuloElem) {
    this.#szin = szin;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
  }

  megjelenit() {
    let html = `<div class="elem" data-index="${
      this.#index
    }" style="background-color: ${this.#szin}">
                </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
    this.esemeny();
  }

  esemeny() {
    this.elem = this.szuloElem.querySelector(".elem:last-child");
    this.elem.addEventListener("click", () => {
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
