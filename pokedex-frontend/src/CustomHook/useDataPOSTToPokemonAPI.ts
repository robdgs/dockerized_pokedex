
import axios from "axios";
export default function useDataPOSTToPokemonAPI(){

    function capitalizedName(name:string) {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    const postHandler = (value:any) => {

          return  axios({
                method: 'post',
                url: `${process.env.REACT_APP_BACKEND}/api/pokemon`,
                data: {
                    ...value,
                    name: capitalizedName(value.name),
                    type: (value.type),
                }
            })
                .then((response) => {
                        console.log(response.data);
                        console.log(response.statusText);
                    },
                );


    }

    return {postHandler,capitalizedName}
}
