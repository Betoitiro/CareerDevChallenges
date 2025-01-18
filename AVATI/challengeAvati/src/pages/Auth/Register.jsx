import './Auth.css';

// Components
import { Link } from 'react-router-dom';
import Message from '../../components/message';
import SubmitButton from '../../components/SubmitButton ';
// Hooks
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux
import { register, reset } from '../../slice/AuthSlice';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState(null);

    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const validateForm = () => {
        // Reset previous errors
        setFormError(null);

        if (!email || !password || !confirmPassword) {
            setFormError('Por favor, preencha todos os campos.');
            return false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
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

        const user = {
            email,
            password,
            confirmPassword,
        };

        dispatch(register(user));
    };

    // Clean all authState on component mount
    useEffect(() => {
        dispatch(reset());
    }, [dispatch]);

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
                {error && <Message msg={error} type="error" />}

            </form>
            <p>
                Já tem conta? <Link to="/login">Clique Aqui</Link>
            </p>
        </div>
    );
};

export default Register;
