export default function Pessoa ({name, idade, profissao, photo}) {
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}