import {LoginFormInterface} from "../LoginForm/LoginForm";
import axios from "axios";
export default function useDataPOSTToLoginCheckAPI(){



    const postHandler = (value:LoginFormInterface) => {

        return  axios({
            method: 'post',
            url: `${process.env.REACT_APP_BACKEND}/api/login_check`,
            data: {
                username: (value.username),
                password: (value.password),

            }
        })
            .then((response) => {
                    console.log(response.data);
                    console.log(response.statusText);
                    return response
                }
            )
            .then ((response)=>{
                 console.log(response.data.token)
                localStorage.setItem("token", response.data.token)
                window.location.href = "/home"
            })
        //salvare token in local storage


    }

    return {postHandler}
}
