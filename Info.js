export default class Info {
  #szoveg;
  constructor(szoveg, szuloelem) {
    this.#szoveg = szoveg;
    this.szuloElem = szuloelem;
    this.megjelenit();
  }
  megjelenit() {
    let html = `<div class = "informacio">
        <p>Kapcsold le a lehető legtöbb lámpát!(Legyen az összes zöld!) a lekapcsolt lámpák száma:</p>
        <h3>${this.#szoveg}</h3>
    </div>
`;
    this.szuloElem.innerHTML = html;
  }
}
