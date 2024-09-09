import {Pokemon} from "./Pokemon";

interface PokemonTerraInterface {
    name: string,
    id: number,
    url:string

}

export default class PokemonTerra extends Pokemon {
    constructor({name,id,url}: PokemonTerraInterface) {
        super({name, type:"Terra",id,url});
    };
    getMoves(): string[] {
       return [...super.getMoves(),"Terremoto"]
    }
    getDebolezze(): string[] {
        return  [...super.getDebolezze(),"Erba"]
    }

}