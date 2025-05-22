import './Auth.css';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Message from '../../components/message';
import SubmitButton from '../../components/SubmitButton ';
import { login, reset } from '../../slice/AuthSlice';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("");

    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");
        setFormSuccess("");

        if (!email) {
            setFormError("O campo de e-mail é obrigatório.");
            return;
        }

        if (!email.includes("@") || !email.includes(".")) {
            setFormError("Por favor, insira um e-mail válido.");
            return;
        }

        if (!password) {
            setFormError("O campo de senha é obrigatório.");
            return;
        }

        if (password.length < 8) {
            setFormError("A senha deve ter pelo menos 8 caracteres.");
            return;
        }

        const user = {
            email,
            password,
        };

        dispatch(login(user));
    };

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setFormSuccess("Login realizado com sucesso! Seja bem-vindo");
            console.log("aqui")
            setTimeout(() => {
                setFormSuccess("");
                navigate("/"); 
            }, 2000); 
        }
    }, [user, navigate]); 

    return (
        <div id="login">
            <h2>Big Tech</h2>
            <p className="subtitle">Faça seu login e seja feliz!</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <SubmitButton loading={loading} value="Entrar" />
            </form>
            {formError && <Message msg={formError} type="error" />}
            {formSuccess && <Message msg={formSuccess} type="success" />}
            {error && <Message msg={error} type="error" />}
            <p>
                Não possui conta? <Link to={'/register'}>Clique aqui</Link>
            </p>
        </div>
    );
};

export default Login;
