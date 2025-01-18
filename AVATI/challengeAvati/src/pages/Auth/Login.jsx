import './Auth.css'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/message';
import { Link } from 'react-router-dom'

import SubmitButton from '../../components/SubmitButton '
import {login, reset } from '../../slice/AuthSlice'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")

    const dispacth = useDispatch()
    const {loading, error} = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email,
            password
        }

        dispacth(login(user))

    }

    useEffect(()=> {
        dispacth(reset())
    },[dispacth])

    return (
        <div id='login'>
            <h2>Big Tech</h2>
            <p className='subtitle'>Faça seu login e seja feliz!</p>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="email"
                 id="email" p
                 placeholder='E-mail'
                 onChange={(e)=> setEmail(e.target.value)} 
                 value={email}/>
                <input 
                type="password" 
                name="passoword" 
                id="passoword" 
                placeholder='Senha'
                onChange={(e)=> setPassword(e.target.value)} 
                value={password}/>
                <SubmitButton loading={loading} value="Cadastrar" />
            </form>
            {error && <Message msg={error} type="error" />}
            <p>Não possui conta? <Link to={'/register'}>Clique aqui</Link></p>
            </div>
    )
}

export default Login