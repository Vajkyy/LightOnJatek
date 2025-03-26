export default class Info {
  #szoveg;
  constructor(szoveg, szuloelem) {
    this.#szoveg = szoveg;
    this.szuloElem = szuloelem;
    this.megjelenit();
    
  }
  megjelenit() {
    let html = `<div class = "informacio">
        <p> dhf jhdfkj fjkdshf kjdsfha</p>
        <h3>${this.#szoveg}</h3>
    </div>
`;
    this.szuloElem.innerHTML += html;
  }
}
