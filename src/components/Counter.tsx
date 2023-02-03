import React from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = React.useState<number>(0)

    const handleCounter = () => setCounter(prev => prev +1)

    return (
        <div className={styles.wrapper}>
            <h3>{counter}</h3>
            <button onClick={handleCounter}>increment</button>
        </div>
    );
};

export default Counter;