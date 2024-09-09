export default interface PokemonInterface {
    name: string,
    id: number,
    type:string,
    url:string,

}


export class Pokemon {
    name: string
    type: string
    id: number
    url:string

    constructor({name, type,id,url}: PokemonInterface ) {
        this.name = name;
        this.type = type;
        this.id= id;
        this.url= url;
    }

    getMoves(){
        return ["Azione"]
    }

    getDebolezze(){
        return ["Debolezza"]
    }


}

