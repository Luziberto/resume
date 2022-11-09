import Frase from "./Frase"

export default function HelloWorld () {

    return (
        <div>
            <Frase/>
            <h1 className="font-bold bg-neutral-200">Meu Componente</h1>
            <Frase/>
            <Frase/>
        </div>
    )
}