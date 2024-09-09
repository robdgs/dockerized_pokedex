import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";
import {Pokemon} from "../classes/Pokemon";
import {PokemonFormInterface} from "../PokemonList/PokemonList";
import React, {SetStateAction} from "react";

interface PropsInterface {
    disabled?:boolean
    pokemon: Pokemon
    setFormValue: React.Dispatch<SetStateAction<PokemonFormInterface>>
    onClickHandler: React.MouseEventHandler<HTMLButtonElement|undefined>
}

export default function RowDisplayer ({disabled,pokemon,onClickHandler,setFormValue}:PropsInterface){
    return (
        <>
            <td> <Button disabled={disabled} onClick={onClickHandler} >Seleziona</Button></td>
            <td>  <p style={{display:"inline", margin: "1rem"}} >{pokemon.name}</p></td>
            <td> <Button onClick={()=>setFormValue(pokemon)} size="sm"> Modify </Button></td>
            <td> <NavLink to={`/details/${pokemon.id}`}>
                <Button size="sm">Dettagli</Button>
            </NavLink></td>
        </>
    );
}