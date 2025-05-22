import './Navbar.css';

// Components
import { NavLink, Link } from 'react-router-dom';
import {
    BsSearch,
    BsHouseDoorFill,
    BsFillCameraFill,
    BsFillPersonFill,
} from 'react-icons/bs';

// Hooks
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// Redux
import { logout, reset } from '../slice/AuthSlice';

const Navbar = () => {
    const { auth } = useAuth();  // Corrigido: use 'auth' aqui
    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();  // Corrigido a digitação de 'navidagate'
    const dispatch = useDispatch();  // Corrigido a digitação de 'dispacth'

    const handleLogout = () => {
        dispatch(logout());
        dispatch(reset());

        navigate("/login");
    };

    return (
        <nav id="nav">
            {auth ? ( <Link to="/home">Big Tech</Link>) : <h2>Big Tech</h2>}  {/* Corrigido: use 'auth' */}
            <form id="search-form">
                <BsSearch />
                <input type="text" placeholder="Pesquisar..." />
            </form>
            <ul id="nav-links">
                {auth ? (
                    <>
                        <li>
                            <NavLink to="/" exact>
                                <BsHouseDoorFill />
                            </NavLink>
                        </li>
                        <li>
                            <span onClick={handleLogout}>Sair</span>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <NavLink to="/login">Entrar</NavLink>
                        </li>
                        <li>
                            <NavLink to="/register">Cadastrar</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
