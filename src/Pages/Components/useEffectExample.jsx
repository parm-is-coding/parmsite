//State is a Variable
import { useCallback, useEffect, useState } from "react";
import PassDown from "./propy";
import { Link } from 'react-router-dom';

export function MyComponent(){
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    // count 0
    //count 1

    useEffect(() => {
        setCount2(prev => prev + 1)
        console.log("this is the console log:", {count2})
    }, [count])

    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/home">Go to home</Link>
            </li>
            <li>
              <Link to="/taco"> GO TACO TIME</Link>
            </li>
          </ul>
        </nav>
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <PassDown x={count}></PassDown>  
        </>
    )
}


// put states in the header of a component definition
//States are like hooks
//what is a hook?

// function myName(){
//     const [name, setName] = useState('Parm')
//     return (
//         <>
//             <button onClick={setName((name) =>  )}></button>
//             <form action=""></form>
//             <h1>My name is {name}</h1>
//         </>
//     )
// }


//React components are functions and names start with a capital letter

//const hello = <h1> Hello World</h1>