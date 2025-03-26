export default class Lampa {
  #szin;
  #index;
  constructor(szin, index, szuloElem) {
    this.#szin = szin;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.esemeny();
  }

  megjelenit() {
    let html = `<div class="elem" style="background-color: ${this.#szin}">
                      ${this.#szin}
                  </div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", html);
  }

  esemeny() {
    this.elem = document.querySelector(".elem:last-child");
    this.elem.addEventListener("click", () => {
      const e = new CustomEvent("kivalaszt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
