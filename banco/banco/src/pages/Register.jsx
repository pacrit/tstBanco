import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './Register.module.css'

import { useState } from 'react'


const Register = () => {

    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        const userData = {
            user, 
            email,
            password,
            confirmPassword
        }

        console.log(userData)
    }

  return (
    <div>
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Usuario:</span>
                <input type="text" value={user} onChange={(e) => setUser(e.target.value)}placeholder="Insira o nome"/>
            </label>
            <label>
                <span>E-mail:</span>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="Insira o e-mail"/>
            </label>
            <label>
                <span>Usuario:</span>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}placeholder="Insira a senha"/>
            </label>
            <label>
                <span>Usuario:</span>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}placeholder="Insira a senha novamente"/>
            </label>
            <input type="submit" value="Cadastrar" />
        </form>
        <NavLink to="/">
        <button>Voltar</button>
        </NavLink>
    </div>
  )
}

export default Register