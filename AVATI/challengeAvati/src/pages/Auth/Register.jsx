import { Link } from 'react-router-dom'
import Message from '../../components/Message'
import SubmitButton from '../../components/SubmitButton '

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { register, reset } from '../../slice/AuthSlice'

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPasssword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const dispacth = useDispatch()
    const { loading, error } = useSelector((state) => state.auth)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email || !password || !confirmPassword) {
            setErrorMessage("Todos os campos são obrigatórios!");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("As senhas não coincidem!");
            return;
        }
        setErrorMessage("")

        const user = {
            email,
            password,
            confirmPassword
        }

        dispacth(register(user))
    }
    useEffect(() => {
        dispacth(reset())
    }, [dispacth])

    return (
        <div id='register'>
            <h2>Big teh</h2>
            <p className='subtitle'>Cadastre-se para poder acessar a plataforma e ter acesso as melhores ofertas da area de tecnologia</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder='E-mail'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email} />

                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder='Senha'
                    onChange={(e) => setPasssword(e.target.value)}
                    value={password} />

                <input
                    type="password"
                    name="confirmarSenha"
                    id="confirmarSenha"
                    placeholder='Confirme a sua senha'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword} />
                {error && <Message msg={error} type="error" />}
                <SubmitButton loading={loading} value="Cadastrar" />
            </form>
            <p>Já Possui conta? <Link to="/login">Faça seu login!</Link></p>
        </div>
    )
}

export default Register