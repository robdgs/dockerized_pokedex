interface WeaknessesDisplay {
    debolezze: string[]|undefined,
}


export default function WeaknessesDisplay ({debolezze}:WeaknessesDisplay){

    return (
        <div>
            {debolezze?.map((el,i)=><p key={i}>{el}</p>)}
        </div>
    )
}