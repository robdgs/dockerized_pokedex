import {Table} from "react-bootstrap";
import useDataGETFromPokemonAPI from "../CustomHook/useDataGETFromPokemonAPI";
import Button from "react-bootstrap/Button";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import useDataPOSTToMixedUserPokemonAPI from "../CustomHook/useDataPOSTToMixedUserPokemonAPI";
import jwt_decode from "jwt-decode";
import {DecodedTokeninterface} from "../App";
import useDataGETToMixedUserPokemonAPI from "../CustomHook/useDataGETFromMixedUserPokemonAPI";
import useDataDELETEFromMixedUserPokemonAPI from "../CustomHook/useDataDELETEFromMixedUserPokemonAPI";

export default function UserPage() {
    const {pokemons, fetchHandler} = useDataGETFromPokemonAPI();
    const {postHandler} = useDataPOSTToMixedUserPokemonAPI()
    const {deleteHandler}=useDataDELETEFromMixedUserPokemonAPI()
    const {data, getHandler} = useDataGETToMixedUserPokemonAPI()
    const token = localStorage.getItem("token")
    console.log("token", token)
    const decodedToken: DecodedTokeninterface | null = token ? jwt_decode(token) : null
    console.log(decodedToken, "token aperto")
    useEffect(() => {
        fetchHandler()
    }, [])
    useEffect(() => {
        getHandler(decodedToken?.id)
    }, [])
    console.log([...pokemons])
    return (
        <div>
            <div>
                <Table striped bordered hover variant="dark">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>

                    {pokemons.map((el, i) => {
                        return (
                            <tr key={i}>
                                <td><p style={{display: "inline", margin: "1rem"}}>{el.name}</p></td>
                                <td><NavLink to={`/details/${el.id}`}>
                                    <Button size="sm">Dettagli</Button>
                                </NavLink></td>
                                {(data.map(userPokemon => userPokemon.id).includes(el.id)) ? <td>
                                        <Button onClick={() => {
                                            deleteHandler(decodedToken?.id, el.id.toString())
                                                .then(()=>getHandler(decodedToken?.id))
                                        }} size={"sm"}>REMOVE</Button>
                                    </td> :
                                    <td><Button onClick={() => {
                                        postHandler(decodedToken?.id, el.id.toString())
                                            .then(()=>getHandler(decodedToken?.id))
                                    }} size={"sm"}>ADD</Button></td>}
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </div>
    );
}