import './Auth.css';

import { Link, useNavigate } from 'react-router-dom';
import Message from '../../components/message';
import SubmitButton from '../../components/SubmitButton ';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { register, reset } from '../../slice/AuthSlice';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState("");
    const [formSuccess, setFormSuccess] = useState("")

    const dispatch = useDispatch();
    const { loading, error, user } = useSelector((state) => state.auth);

    const navigate = useNavigate()

    const validateForm = () => {
        setFormError("");

        if (!email || !password || !confirmPassword) {
            setFormError('Por favor, preencha todos os campos.');
            return false;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setFormError('Por favor, insira um e-mail válido.');
            return false;
        }

        if (password.length < 8) {
            setFormError('A senha deve ter pelo menos 8 caracteres.');
            return false;
        }

        if (password !== confirmPassword) {
            setFormError('As senhas não coincidem.');
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) return;
        setFormSuccess("")

        const user = { email, password };
        dispatch(register(user));
    };

    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

    useEffect(() => {
        if(user){
            setFormSuccess("Cadastro realizado com sucesso!")
            setTimeout(() => {
                setFormSuccess("")
                navigate("/")
            }, 2000)
        }
    },[user, navigate])
    return (
        <div id="register">
            <h2>React Gram</h2>
            <p className="subtitle">Cadastre-se para poder ver as fotos dos seus amigos</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="E-mail"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />
                <SubmitButton loading={loading} value="Cadastrar" />
                {formError && <Message msg={formError} type="error" />}
                {formSuccess && <Message msg={formSuccess} type="success" />}
                {error && <Message msg={error} type="error" />}
            </form>
            <p>
                Já tem conta? <Link to="/login">Clique Aqui</Link>
            </p>
        </div>
    );
};

export default Register;
