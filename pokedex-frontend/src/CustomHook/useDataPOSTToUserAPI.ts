import axios from "axios";
import {UserFormInterface} from "../RegisterForm/RegisterForm";

export default function useDataPOSTToUserAPI(){



    const postHandler = (value:UserFormInterface) => {

        return  axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND}/api/register`,
            data: {
                ...value,
                name: (value.name),
                surname: (value.surname),
                email: (value.email),
                password: (value.password),

            }
        })
            .then((response) => {
                    console.log(response.data);
                    console.log(response.statusText);
                },
            );


    }

    return {postHandler}
}
