import { Link } from 'react-router'
import styles from './Home.module.css'

const Home = () => {
    return (
        <main className={styles.home}>
            <h1>Welcome To WPU Cafe</h1>
            <Link to= "./login">
            <Button>Login</Button>
            </Link>
        </main>
    )
}