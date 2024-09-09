import Navbar from "../Navbar/Navbar";

interface DashboardIntrface{
    children: JSX.Element
}
export default function Dashboard({children}:DashboardIntrface){
    return (
        <div>
            <Navbar/>
            {children}
        </div>
    );
}

//children è una keyword react con i superpoteri: io posso passargli elementi HTML e componenti e posso scriverlo ANCHE
//dentro il div tipo:
// return (
//         <div children={<PokemonList/>}></div>
//         tra div aperto e chiuso però non deve esserci nemmeno uno spazio
//     );
//scrivere quello su o scrivere
//  return (
//         <div>
//             <PokemonList/>
//         </div>
//     );
//è LA STESSA COSA
//se voglio passare più di un componente basta che nell'interfaccia io dichiari
//children: JSX.Element | JSX.Element[]