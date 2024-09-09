import {useState} from "react";
import {Form,Button} from "react-bootstrap";
import useDataPOSTToLoginCheckAPI from "../CustomHook/useDataPOSTToLoginCheckAPI";
import {NavLink} from "react-router-dom";


export interface LoginFormInterface{

   username: string
    password: string
}
export default function LoginForm (){

            const [formValue,setFormValue]=useState <LoginFormInterface> ({
            username:'',
            password: ''

        })
            const {postHandler}=useDataPOSTToLoginCheckAPI()
            const onSubmit = (e:any)=>{e.preventDefault();

            return postHandler(formValue)
        }
            return (
            <div>
            <Form onSubmit={onSubmit} >
            <Form.Group  >
            <Form.Label>Username</Form.Label>
            <Form.Control value={formValue.username} onChange={(e)=>setFormValue({...formValue,username:e.target.value})}  placeholder="username" />
            </Form.Group>
            <Form.Group  >
            <Form.Label>Password</Form.Label>
            <Form.Control value={formValue.password} type="password" onChange={(e)=>setFormValue({...formValue,password:e.target.value})}  placeholder="password" />
            </Form.Group>
            <Button onClick={()=>console.log(formValue)}>Console Log</Button>
            <Button type="submit" >Login</Button>
            </Form>


                <NavLink to={"/register"}>
                 <Button>Registrati</Button>
                </NavLink>

            </div>
            )


}