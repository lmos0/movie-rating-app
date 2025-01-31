import React, {useState} from "react";
import { registerUser } from "../services/api";

const Register:React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const data = await registerUser(name, email, password)
            console.log('Registro completado com sucesso', data);
            alert('Registro completo com sucesso')
            
        } catch (error) {
            console.error('Erro ao completar o registro', error);
            alert('Falha ao registrar')
            
            
        }
    }

    return(
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
            />
          </div>
          <button type="submit" style={{ width: '100%' }}>Register</button>
        </form>
      </div>


    )
}

export default Register