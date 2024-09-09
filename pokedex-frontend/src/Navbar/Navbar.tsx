import {NavLink} from "react-router-dom";
import Button from "react-bootstrap/Button";

export default function Navbar(){
    return(
    <div>
        <NavLink to={"/addPokemon"}>
          <Button>ADD POKEMON</Button>
        </NavLink>
        <NavLink to={"/login"}>
            <Button onClick={()=>localStorage.removeItem("token")}>LOGOUT</Button>
        </NavLink>
    </div>
    )
}