
import axios from "axios";


export default function useDataDELETEFromPokemonAPI () {


    const deleteHandler = (id:string) => {


        return axios({

            headers: {'Content-Type': 'application/merge-patch+json'},
            method: 'delete',
            url: process.env.REACT_APP_BACKEND+"/api/pokemon/"+ id,

        })
            .then((response) => {
                    console.log(response.data);
                    console.log(response.statusText);
                },
            );



    }
    return {deleteHandler}
}