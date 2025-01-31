import React, {useState} from "react";
import { loginUser } from "../services/api";
import { useNavigate } from "react-router-dom";




const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const data = await loginUser(email, password)

            localStorage.setItem('token', data.token)

            navigate('/profile')
        } catch (error) {
            setError('Login Failed. Please check your email and password')
        }
    }

    return (
        <div className="login-container">
          <h2>Login</h2>
          {error && <p className="error-message">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      );

}

export default Login