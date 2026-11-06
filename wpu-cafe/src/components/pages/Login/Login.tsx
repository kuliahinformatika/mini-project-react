import styles from "./Login.module.css"
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { FormEvent } from "react";
import { login } from "../../../services/auth.services";
import { setLocalStorage } from "../../../utils/storage";
import { Navigate } from "react-router";


const Login = () => {
    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElelement;
        const payload = {
            email: form.email.value,
            password: form.password.value,
        };
        const result = await login(payload);
        setLocalStorage('auth', result.token);

        return <Navigate to='/orders' replace
    };

    
    return (
        <main className={styles.login}>
            <div className={styles.card}>
                <h1 className={styles.title}>Login</h1>
                <form className={styles.form} onSubmit={handleLogin}>
                    <Input label="Password" id="Password" type="password" name="Password" placeholder="Insert Password" required/> 
                    
                    <Button type="submit">Login</Button> 
                <form/>
            </div>
        </main>
    )
};

export default Login