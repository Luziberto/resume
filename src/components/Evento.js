import Button from "./Button"

export default function Evento({numero}) {
    function meuEvento () {
        console.log(`Ativado ${numero}`)
    }

    function segundoEvento () {
        console.log('Ativando segundo evento');
    }

    return (
        <>
            <p>Cliique para disparar Evento.</p>
            <Button text="Primeiro Evento" event={meuEvento}/>
            <Button text="Segundo Evento" event={segundoEvento}/>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}