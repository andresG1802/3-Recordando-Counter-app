import { useState } from 'react'
import PropTypes from 'prop-types'

export const CounterApp = ({value}) => {

    const [ counter , setCounter] = useState( 0 );

    const handleAdd = () => {
        // Si pongo counter++ daria error por que es un const
        setCounter(counter + 1);
        // setCounter((c)=> c + 1)
    }
    const handleSubtract = ( )=>{
        setCounter(counter -1 );
    }
    const handleReset = () =>{
        setCounter(0);
    }
    return (
        <>
            <h1>Counter App</h1>
            <h2>{counter}</h2>
            
            <button onClick={ handleAdd }>
                +1
            </button>
            <button onClick={ handleSubtract }>
                -1
            </button>
            <button onClick={ handleReset }>
                
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value:PropTypes.number
}

// CounterApp.defaultProps = {
//     value:10
// }