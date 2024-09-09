
import axios from "axios";
import useDataPOSTToPokemonAPI from "./useDataPOSTToPokemonAPI";

export default function useDataPATCHToPokemonAPI () {
    const {capitalizedName} = useDataPOSTToPokemonAPI()

    const patchHandler = (value:any) => {
        console.log(value.id)

            return axios({

                headers: {'Content-Type': 'application/merge-patch+json'},
                method: 'patch',
                url: process.env.REACT_APP_BACKEND+"/api/pokemon/"+ value.id,
                data: {
                    ...value,
                    name: capitalizedName(value.name),
                    type: value.type,
                }
            })
                .then((response) => {
                        console.log(response.data);
                        console.log(response.statusText);
                    },
                );



    }
    return {patchHandler}
}

