import axios from "axios";
import {useState} from "react";
import {PokemonBuilder} from "../classes/PokemonBuilder";
import PokemonInterface, {Pokemon} from "../classes/Pokemon";

export default function useDataGETToMixedUserPokemonAPI(){

    const [data,setData]=useState<Pokemon[]>([])
    const getHandler = (userId: string | undefined) => {



        return  axios({
            method: 'get',
            url: `${process.env.REACT_APP_BACKEND}/api/users/${userId}/pokemons`,

        })
            .then((response) => {
                console.log(response.statusText);
                console.log(response);
                return response.data

                },
            ).then((data: PokemonInterface[]) => {
            setData(data.map((el, i)=>{
                    return PokemonBuilder.crea(el)
                })
            )
        });


    }

    return {getHandler,data}
}