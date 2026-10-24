import styles from './Button.module.css';

interface PropTypes {
    type?: 'button' | 'submit' | 'reset';
    children: string;
    onClick?: () => void;
    className?: string;
    color?: 'primary' | 'secondary';
    'aria-label'?: string; // Tambahkan ini jika ingin mendukung aria-label
}

const Button = (props: PropTypes) => {
    // Keluarkan semua properti yang ingin diberi nilai default atau ditangani khusus
    const { 
        type = 'button', 
        children, 
        color = 'primary', 
        className = '', 
        ...restProps // Sisa props lainnya (seperti onClick, aria-label, dll) ditampung di sini
    } = props;

    return (
        <button
            className={`${styles.button} ${styles[`button-${color}`]} ${className}`.trim()}
            type={type}
            {...restProps} // Sebarkan sisa props dengan aman di sini
        >
            {children}
        </button>
    );
};

export default Button;