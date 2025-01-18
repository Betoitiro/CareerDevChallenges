import { Link, useNavigate } from 'react-router-dom';
import Message from '../../components/Message';
import SubmitButton from '../../components/SubmitButton ';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { register, reset } from '../../slice/AuthSlice';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch();
    const { loading, error, success } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setErrorMessage('Todos os campos são obrigatórios!');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem!');
            return;
        }

        setErrorMessage('');

        const user = {
            email,
            password,
        };

        dispatch(register(user));
    };

    useEffect(() => {
        if (success) {
            navigate('/'); // Redireciona após sucesso
        }
        dispatch(reset());
    }, [dispatch, success, navigate]);

    return (
        <div id="register">
            <h2>Big Tech</h2>
            <p className="subtitle">
                Cadastre-se para acessar a plataforma e ter acesso às melhores ofertas na área de tecnologia.
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
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

                <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirme a sua senha"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                />

                {errorMessage && <Message msg={errorMessage} type="error" />}
                {error && <Message msg={error} type="error" />}
                <SubmitButton loading={loading} value="Cadastrar" />
            </form>
            <p>
                Já possui conta? <Link to="/login">Faça seu login!</Link>
            </p>
        </div>
    );
};

export default Register;
