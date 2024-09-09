import useDetailGETFromPokemonAPI from "../CustomHook/useDetailGETfromPokemonAPI";
import MovesDisplay from "../MovesDisplayer/MovesDisplay";
import WeaknessesDisplay from "../WeaknessesDisplayer/WeaknessesDisplayer";
import {useEffect} from "react";
import {useNavigate, useParams} from "react-router";
import {Table} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import useDataDELETEFromPokemonAPI from "../CustomHook/useDataDELETEFromPokemonApi";




export default function DetailsPage () {
   const navigate = useNavigate()
    let { id } = useParams();
    const {getDetailsHandler,pokemon} = useDetailGETFromPokemonAPI()
    //@ts-ignore
    useEffect(()=> {getDetailsHandler(id)},[])

    /*const handleDelete = () => {axios.delete(process.env.REACT_APP_BACKEND+"/api/pokemon/"+ id)
        .then(res => console.log(res.status))}*/
   const {deleteHandler}= useDataDELETEFromPokemonAPI()

    const onClickDelete = ()=>{
        //@ts-ignore
       return deleteHandler(id).then((res)=>{ navigate("/") })
    }


    return(
        <div>
            <div>


                        <div >
                            <Table striped bordered hover variant="dark">
                            <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Moves</th>
                                <th>Weaknesses</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><img src={pokemon?.url} alt={pokemon?.name} width="100" height="100"/></td>
                            <td>{pokemon?.name}</td>
                            <td>{pokemon?.type}</td>
                           <td><MovesDisplay moves={pokemon?.getMoves()}/></td>
                            <td><WeaknessesDisplay debolezze={pokemon?.getDebolezze()}/></td>
                            </tr>
                            </tbody>
                            </Table>

                        </div>



                 <Button onClick={onClickDelete} size="sm">Delete</Button>


            </div>
        </div>
    );
}