import {Pokemon} from "./Pokemon";

interface PokemonElettroInterface {
    name: string,
    id: number,
    url:string

}

export default class PokemonElettro extends Pokemon {
    constructor({name,id,url}: PokemonElettroInterface) {
        super({name, type:"Elettro",id,url });
    };
    getMoves(): string[] {
        return   [...super.getMoves(),"Tuono","Elettroshock"]
    }
    getDebolezze(): string[] {
        return  [...super.getDebolezze(),"Elettro","Erba"]
    }

}