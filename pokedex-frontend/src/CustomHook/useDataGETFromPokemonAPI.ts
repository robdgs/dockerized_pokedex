import { useState} from "react";
import GetPokemonInterface from "../api/GetPokemonInterface";
import axios from "axios";
import {Pokemon} from "../classes/Pokemon";
import {PokemonBuilder} from "../classes/PokemonBuilder";


export default function useDataGETFromPokemonAPI (){

    const [pokemons,setPokemons]=useState<Pokemon[]>([])
    const fetchHandler = () => {
        axios.get(`${process.env.REACT_APP_BACKEND}/api/pokemon`)
            .then(function(response){
                console.log(response.data);
                return response.data
            })
            .then( (data:GetPokemonInterface)=>{
            setPokemons(   data["hydra:member"].map((el, i)=>{
                  return PokemonBuilder.crea(el)
               })
            )
        })
            .catch(error => {console.log(error)});
    }

    return {pokemons,fetchHandler}
}
