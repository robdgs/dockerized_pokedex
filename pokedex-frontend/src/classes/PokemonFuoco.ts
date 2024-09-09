import {Pokemon} from "./Pokemon";

interface PokemonFuocoInterface {
    name: string,
    id: number,
    url:string

}

export default class PokemonFuoco extends Pokemon {
    constructor({name,id,url}: PokemonFuocoInterface) {
        super({name, type:"Fuoco",id,url});
    };
    getMoves(): string[] {
       return [...super.getMoves(),"Lanciafiamme","Braciere"]
    }
    getDebolezze(): string[] {
        return [...super.getDebolezze(), "Fuoco", "Acqua", "Terra"]
    }

}