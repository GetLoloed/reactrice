import styles from './Display.module.scss';
export default function Display({input, result}) {
    return (
        <div className={styles.display}>
            <input type="text" value={input} readOnly/>
            <div className="result">{result}</div>
        </div>
    );
}