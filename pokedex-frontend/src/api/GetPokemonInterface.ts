import PokemonInterface from "../classes/Pokemon";

export default interface GetPokemonInterface{
    "hydra:member": PokemonInterface[],
    "hydra:totalItems": number,
}
