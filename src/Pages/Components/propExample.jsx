import React, { useState, useEffect, useRef } from 'react';

function PassDown({ x }) {
    const [count, setCount] = useState(0);
    useRef(() => {
        console.log('This is a prop');
    }, [x]);
    useEffect(() => {
        setCount(prevCount => prevCount + 5);
    }, [x]);

    return (
        <>
            <h1>This is a Prop</h1>
            <p>Prop: {count}</p>
        </>
    );
}

export default PassDown;

use