import { api, requestConfig } from '../utils/config';

const register = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const response = await fetch(api + "/users/register", config);
        const res = await response.json();

        if (!response.ok) {
            throw new Error(res?.message || "Erro ao registrar usuário");
        }

        if (res) {
            localStorage.setItem("user", JSON.stringify(res));
        }

        return res;
    } catch (error) {
        console.error("Erro no registro:", error.message);
        return { errors: [error.message] };
    }
};

const logout = () => {
    localStorage.removeItem("user");
};

const login = async (data) => {
    const config = requestConfig("POST", data);

    try {
        const response = await fetch(api + "/users/login", config);
        const res = await response.json();
        if (!response.ok) {
            throw new Error(res?.message || "Erro ao realizar login");
        }
        if (res) {
            localStorage.setItem("user", JSON.stringify(res));
        }

        return res;
    } catch (error) {
        console.error("Erro no login:", error.message);
        return { errors: [error.message] }; 
    }
};

const authService = {
    register,
    logout,
    login,
};

export default authService;
