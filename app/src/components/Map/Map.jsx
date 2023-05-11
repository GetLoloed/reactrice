import Button from "../Button/Button";
import styles from './Map.module.scss';
export default function Map({handleClick}) {
    const buttons = [
        "1", "2", "3", "4",
        "5", "6", "7", "8",
        "9", "0", "/", "-",
        "*", ".", "=", "+"
    ];

    return (
        <div className={styles.grid}>
            {buttons.map((btn, index) => (
                <Button key={index} value={btn} onClick={() => handleClick(btn)}/>
            ))}
        </div>
    );
};