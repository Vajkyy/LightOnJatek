export default class Info {
  #szoveg;
  constructor(szoveg, szuloelem) {
    this.#szoveg = szoveg;
    this.szuloElem = szuloelem;
  }
  megjelenit() {
    let html = `<div class = "informacio">
        <p>${this.#szoveg}</p>
    </div>;
`;
    this.szuloElem.innerHTML += html;
  }
}
