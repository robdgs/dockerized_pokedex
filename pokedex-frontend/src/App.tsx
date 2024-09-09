import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import jwt_decode from "jwt-decode";
import './App.css';
import PokemonList from "./PokemonList/PokemonList";
import DetailsPage from "./DetailsPage/DetailsPage";
import RegisterForm from "./RegisterForm/RegisterForm";
import LoginForm from "./LoginForm/LoginForm";
import Dashboard from "./Dashboard/Dashboard";
import UserPage from "./UserPage/UserPage";

export interface DecodedTokeninterface{
    exp: number
    username:string
    roles: string[]
    id:string

}

function App() {

   const token = localStorage.getItem("token")
    console.log("token",token)
    const decodedToken : DecodedTokeninterface|null = token ? jwt_decode(token) : null
    console.log (decodedToken, "token aperto")
    //reminder, per accedere all'oggetto devo tipizzarlo (creo l'interfaccia a monte )
    console.log(decodedToken?.roles[0])



    const adminAuthenticatedRoutes = <>
        <Route path="/addPokemon" element={<Dashboard><PokemonList/></Dashboard>}/>
        <Route path="/details/:id" element={<Dashboard><DetailsPage/></Dashboard>}/>
        <Route  path="/home" element={<Navigate to={"/addPokemon"}></Navigate>}/>
    </>
  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                {decodedToken?.roles.includes("ROLE_ADMIN") && adminAuthenticatedRoutes}
                <Route path="/register" element={<Dashboard><RegisterForm/></Dashboard>} />
                <Route  path="/login" element={<Dashboard><LoginForm/></Dashboard>}/>
                <Route  path="/user_pokemons" element={<Dashboard><UserPage/></Dashboard>}/>
                <Route path="/details/:id" element={<Dashboard><DetailsPage/></Dashboard>}/>
                <Route  path="*" element={<Navigate to={"/login"}></Navigate>}/>
                <Route  path="/home" element={<Navigate to={"/user_pokemons"}></Navigate>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
