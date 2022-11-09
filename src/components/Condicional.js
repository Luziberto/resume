import { useState } from 'react'

export default function Condicional () {
    const [email, setEmail] = useState('')
    const [userEmail, setUserEmail] = useState('')

    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail () {
        setUserEmail(null)
    }

    return (
        <div>
            <h2>Cadastre seu e-Mail</h2>
            <form>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder='Digite seu e-Mail'/>
                <button onClick={enviarEmail}>Enviar e-Mail</button>
                <button onClick={limparEmail}>Limpar</button>
            </form>
            
            {userEmail && (
                <div>O email do usuário é <b>{userEmail}</b></div>
            )}
        </div>
    )
}