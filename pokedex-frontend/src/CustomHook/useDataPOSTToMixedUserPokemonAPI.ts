import axios from "axios";
export default function useDataPOSTToMixedUserPokemonAPI(){

    const postHandler = (userId: string | undefined, pokemonId: string) => {

        return  axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND}/api/users/${userId}/pokemons/${pokemonId}`,

        })
            .then((response) => {
                    console.log(response.statusText);
                    return response
                },
            );



    }

    return {postHandler}
}
