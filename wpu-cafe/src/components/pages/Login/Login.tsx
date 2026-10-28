import styles from "./Login.module.css"
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { FormEvent } from "react";


const Login = () => {
    const handleLogin = (event: FormEvent) => {
        event.preventDefault();
        const form = event.target.HTMLFormElelement;
        const payload = {
            email: form.email.value,
            password: form.password.value,
        };
        const result = await login(payload);
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