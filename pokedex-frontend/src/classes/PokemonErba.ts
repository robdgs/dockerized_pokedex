
import {Pokemon} from "./Pokemon";

interface PokemonErbaInterface {
    name: string,
    id: number, //opzionale
url:string
}

export default class PokemonErba extends Pokemon {
    constructor({name,id,url}: PokemonErbaInterface) {
        super({name, type:"Erba",id,url});
    };
    getMoves(): string[] {
        const erbaMoves = ["Foglielama","Sonnifero"];
       const allMoves =  super.getMoves().concat(erbaMoves)
        //[...super.getMoves(), ...erbaMoves]
        //[...super.getMoves(),"Foglielama","Sonnifero"]
        return allMoves;

    }
    getDebolezze(): string[] {
        return  [...super.getDebolezze(),"Fuoco","Erba"]
    }

}