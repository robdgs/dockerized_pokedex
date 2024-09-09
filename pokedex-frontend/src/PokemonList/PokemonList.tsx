import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import useDataGETFromPokemonAPI from "../CustomHook/useDataGETFromPokemonAPI";
import useDataPOSTToPokemonAPI from "../CustomHook/useDataPOSTToPokemonAPI";
import useDataPATCHToPokemonAPI from "../CustomHook/useDataPATCHToPokemonAPI";
import {Table} from "react-bootstrap";
import {Pokemon} from "../classes/Pokemon";
import RowDisplayer from "../RowsDisplayer/RowsDisplayer";



 export interface PokemonFormInterface{
    name: string,
    id?: number,
    type:string,
     url:string,
}

export default function PokemonList () {

    const {pokemons,fetchHandler} = useDataGETFromPokemonAPI();
    const {postHandler}=useDataPOSTToPokemonAPI()
    const [oneClickedPokemon, setOneClickedpokemon] = useState <Pokemon> ()
    const [clickedPokemons,setClickedPokemons]=useState<Pokemon[]>([])
    const [formValue,setFormValue]=useState <PokemonFormInterface> ({
        name: '',
        type:'',
       url:'',

    })
    const {patchHandler}=useDataPATCHToPokemonAPI()

    useEffect(()=> {fetchHandler()},[])

    const onSubmit = (e:any)=>{e.preventDefault();

        return(
            formValue.id?patchHandler(formValue).then(()=>fetchHandler()):postHandler(formValue).then(()=>fetchHandler())
        )
    }

    const displayPokemon = (pokemon:Pokemon)=>{
        if(!clickedPokemons.some((clickedPokemon)=>clickedPokemon.id === pokemon.id)){
           setClickedPokemons([...clickedPokemons,pokemon])
        }
        else{
       const filteredPokemons =  clickedPokemons.filter((clickedPokemon)=> clickedPokemon.id !== pokemon.id)
            setClickedPokemons(filteredPokemons)
        }

    }

const finalDisplayFunction = (pokemon:Pokemon)=>{
        displayPokemon(pokemon);
        setOneClickedpokemon(pokemon)
}




    return (
          <div>

              <div>
                      <div >
                          <Table striped bordered hover variant="dark">
                              <thead>
                              <tr>
                                  <th></th>
                                  <th>Name</th>
                                  <th></th>
                                  <th></th>
                              </tr>
                              </thead>
                              <tbody>

                              {pokemons.map((el, i) => {
                                  return (
                              <tr key={i}>
                                  {/*<td> <Button disabled={clickedPokemons.some((clickedPokemon)=>clickedPokemon.id === el.id)} onClick={()=>addPokemon(el)} >Seleziona</Button></td>
                                  <td>  <p style={{display:"inline", margin: "1rem"}} >{el.name}</p></td>
                                  <td> <Button onClick={()=>setFormValue(el)} size="sm"> Modify </Button></td>
                                  <td> <NavLink to={`/details/${el.id}`}>
                                      <Button size="sm">Dettagli</Button>
                                  </NavLink></td>*/}
                                  <RowDisplayer  pokemon={el} onClickHandler={()=>finalDisplayFunction(el)} setFormValue={setFormValue}></RowDisplayer>
                              </tr>
                                      )})}

                              </tbody>
                          </Table>
                      </div>
              </div>
              <div>
                  {clickedPokemons.map((el, i) => {
                      return (
                        <p key={i} style={{ backgroundColor: el.name === oneClickedPokemon?.name ? 'red' : 'white'}}>{el.name}</p>
                      )})}

              </div>

              <div>
                      <Form onSubmit={onSubmit} >
                          <Form.Group  >
                              <Form.Label>Name</Form.Label>
                              <Form.Control value={formValue.name} onChange={(e)=>setFormValue({...formValue,name:e.target.value})}  placeholder="name" />
                          </Form.Group>
                          <Form.Group >
                              <Form.Label>Role</Form.Label>
                              <Form.Select value={formValue.type}  onChange={(e)=>setFormValue({...formValue,type:e.target.value})} placeholder="type">
                                  <option value={"Fuoco"}>Fuoco</option>
                                  <option value={"Acqua"}>Acqua</option>
                                  <option value={"Elettro"}>Elettro</option>
                                  <option value={"Erba"}>Erba</option>
                                  <option value={"Terra"}>Terra</option>
                              </Form.Select>
                          </Form.Group>
                          <Form.Group  >
                              <Form.Label>Image URL</Form.Label>
                              <Form.Control value={formValue.url} onChange={(e)=>setFormValue({...formValue,url:e.target.value})}  placeholder="image Url" />
                          </Form.Group>
                          <Button onClick={()=>console.log(formValue)}>Console Log</Button>
                          <Button type="submit" >Submit</Button>
                      </Form>
              </div>

          </div>
    );
}
