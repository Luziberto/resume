import SayMyName from '@components/SayMyName';
import Pessoa from '@components/Pessoa';
import Frase from '@components/Frase';
import List from '@components/List';
import Evento from '@components/Evento';
import Form from '@components/Form';
import Condicional from '@components/Condicional';
import Map from '@components/Map';

export default function Testes () {
    const pessoa = {
        idade: 28,
        name: "Luciano",
        profissao: "Programador",
        photo: "https://via.placeholder.com/180"
    }

    return (
        <>
            {/* <SayMyName nome={nome}/> */}
            <SayMyName nome="Andreza"/>
            <Frase/>
            <Pessoa {...pessoa} />
            <List/>
            <Evento numero={1}/>
            <Evento numero={2}/>
            <Form/>
            <hr />
            <Condicional/>
            <Map/>
        </>
    )
}