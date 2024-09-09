import PokemonErba from "./PokemonErba";
import PokemonFuoco from "./PokemonFuoco";
import PokemonAcqua from "./PokemonAcqua";
import PokemonTerra from "./PokemonTerra";
import PokemonElettro from "./PokemonElettro";
import PokemonInterface, {Pokemon} from "./Pokemon";

type PokemonBuilderResponse = PokemonErba | PokemonAcqua | PokemonElettro | PokemonFuoco | PokemonTerra | Pokemon

export class PokemonBuilder{
    static crea({name, type,id,url}: PokemonInterface):PokemonBuilderResponse{
        //dentro static non ho il this perchè l'oggetto non esiste
        //il metodo non può accedere alla classe stessa

        switch (type) {
            case "Erba":{
                return new PokemonErba ({name,id,url})
            }
            case "Fuoco":{
                return new PokemonFuoco ({name,id,url})
            }
            case"Acqua":{
                return new PokemonAcqua ({name,id,url})
            }
            case"Terra":{
                return new PokemonTerra ({name,id,url})
            }
            case"Elettro":{
                return new PokemonElettro ({name,id,url})
            }
            default:{
                return new Pokemon ({name,type,id,url})
            }

        }

    }
}
