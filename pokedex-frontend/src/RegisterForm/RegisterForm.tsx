import {useState} from "react";
import {Form,Button} from "react-bootstrap";
import useDataPOSTToUserAPI from "../CustomHook/useDataPOSTToUserAPI";

export interface UserFormInterface{
    name: string
    surname: string
    email: string
    password: string
}
export default function RegisterForm (){
    const [formValue,setFormValue]=useState <UserFormInterface> ({
        name: '',
        surname: '',
        email:'',
        password: ''

    })
    const {postHandler}=useDataPOSTToUserAPI()
    const onSubmit = (e:any)=>{e.preventDefault();

        return postHandler(formValue)
    }
    return (
        <div>
            <Form onSubmit={onSubmit} >
                <Form.Group  >
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={formValue.name} onChange={(e)=>setFormValue({...formValue,name:e.target.value})}  placeholder="name" />
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Surname</Form.Label>
                    <Form.Control value={formValue.surname} onChange={(e)=>setFormValue({...formValue,surname:e.target.value})}  placeholder="surname" />
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Email</Form.Label>
                    <Form.Control value={formValue.email} onChange={(e)=>setFormValue({...formValue,email:e.target.value})}  placeholder="email" />
                </Form.Group>
                <Form.Group  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={formValue.password} type="password" onChange={(e)=>setFormValue({...formValue,password:e.target.value})}  placeholder="password" />
                </Form.Group>
                <Button onClick={()=>console.log(formValue)}>Console Log</Button>
                <Button type="submit" >Register</Button>
            </Form>
        </div>
    )
}