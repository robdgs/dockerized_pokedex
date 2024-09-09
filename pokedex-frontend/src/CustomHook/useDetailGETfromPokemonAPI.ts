
import axios from "axios";
import {useState} from "react";
import {Pokemon} from "../classes/Pokemon";
import {PokemonBuilder} from "../classes/PokemonBuilder";
export default function useDetailGETFromPokemonAPI(){

    const [pokemon,setPokemon]=useState<Pokemon>()

    const getDetailsHandler = (id:string) => {

        return  axios({
            method: 'get',
            url: `${process.env.REACT_APP_BACKEND}/api/pokemon/${id}`,
        })
            .then ((response)=>{
               setPokemon ( PokemonBuilder.crea(response.data))
            })


    }

    return {pokemon,getDetailsHandler}
}
