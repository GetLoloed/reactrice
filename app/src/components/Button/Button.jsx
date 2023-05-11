import styles from './Button.module.scss';

export default function Button({value, onClick}) {
    return (
        <button onClick={onClick} className={styles.button}>
            {value}
        </button>
    );
}