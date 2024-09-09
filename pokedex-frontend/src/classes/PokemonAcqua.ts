import {Pokemon} from "./Pokemon";

interface PokemonAcquaInterface {
    name: string,
    id: number,
    url: string,

}

export default class PokemonAcqua extends Pokemon {
    constructor({name,id,url}: PokemonAcquaInterface) {
        super({name, type:"Acqua", id,url});
    };
    getMoves(): string[] {
        return [...super.getMoves(),"Idropompa"]
    }
    getDebolezze(): string[] {
        return  [...super.getDebolezze(),"Erba","Elettro",]
    }
}
