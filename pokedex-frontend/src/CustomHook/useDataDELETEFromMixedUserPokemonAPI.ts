import axios from "axios";
export default function useDataDELETEFromMixedUserPokemonAPI(){

    const deleteHandler = (userId: string | undefined, pokemonId: string) => {

        return  axios({
            method: 'delete',
            url: `${process.env.REACT_APP_BACKEND}/api/users/${userId}/pokemons/${pokemonId}`,

        })
            .then((response) => {
                    console.log(response.statusText);
                    return response
                },
            );



    }

    return {deleteHandler}
}