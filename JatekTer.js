export default class JatekTer{
    #lista
    #szuloElem
    #szamlalo
    constructor(szuloElem, szamlalo){
        this.#szuloElem = szuloElem;
        this.#szamlalo = szamlalo;
        this.megjelenit();
        this.esemenyKivalaszt();
    }
    megjelenit(){
        for (let index = 0; index < this.#lista.length; index++) {
            const ELEM = new Elem (this.#lista[index],index,this.#szamlalo,this.#szuloElem);
            
        }
    }
    esemenyKivalaszt(){
        windows.addEventListener("kivalaszt",(event) =>{
            this.index = event.detail;
            this.#lista[this.index] = "";
            this.#szuloElem.innerHTML = "";
            this.megjelenit();
        })
    }
}