import React, {useState} from "react";
import Display from "./components/Display/Display";
import Map from "./components/Map/Map";
import styles from './App.module.scss'

export default function App() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(0);

    const handleClick = (value) => {
        if (value === "=") {
            calculateResult();
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    const calculateResult = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            alert("Erreur de saisie");
        }
    };

    const resetInput = () => {
        setInput("");
    };

    return (
        <div className="App">
            <main className={styles.main}>
                <h1>Calculatrice</h1>
                <div className="calculator">
                    <Display input={input} result={result}/>
                    <Map handleClick={handleClick}/>
                    <button onClick={resetInput} className={styles.reini}>
                        Réinitialiser
                    </button>
                </div>
            </main>
        </div>
    );
}

