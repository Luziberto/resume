import { useState } from 'react'

export default function Form() {
    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}`)
    }

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div>
            <h1>cadastro</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="name">Usuário</label>
                    <input
                        name="name"
                        id="name"
                        className="border border-gray-500"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Seu nome" />
                </div>
                <div>
                    <label htmlFor="pass">Senha</label>
                    <input
                        name="pass"
                        id="pass"
                        className="border border-gray-500"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Digite sua Senha" />
                </div>
                <input className="border border-gray-500" type="submit" value="Enviar" />
            </form>
        </div>
    )
}