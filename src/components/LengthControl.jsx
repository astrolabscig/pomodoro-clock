import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function LengthControl({ labelType }) {
    const dispatch = useDispatch();
    const { breakLength, sessionLength } = useSelector( state => state.timer );
    
    const isBreak = labelType === 'Break';

    const value = isBreak ? breakLength : sessionLength;

    
    const increment = () => {
        if (isBreak) {
            dispatch({ type: 'timer/incrementBreak'})
        } else {
            dispatch({ type: 'timer/incrementSession'})
        }
    };
    
    const decrement = () => {
        if (isBreak) {
            dispatch({ type: 'timer/decrementBreak'})
        } else {
            dispatch({ type: 'timer/decrementSession'})
        }
    };

    return (
        <div className='text-center my-3'>
            <h5 id={isBreak ? 'break-label' : 'session-label'}  className="text-secondary fw-semibold">
                {labelType} Length
            </h5>
            <div className='d-flex justify-content-center align-items-center'>
                <button
                    id={isBreak ? 'break-decrement' : 'session-decrement'}
                    className='btn btn-outline-danger btn-sm mx-2'
                    onClick={decrement}
                >-</button>
                <span 
                    id={isBreak ? 'break-length' : 'session-length'}
                >{value}
                </span>
                <button
                    id={isBreak ? 'break-increment' : 'session-increment'}
                    className="btn btn-outline-success btn-sm mx-2"
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div>
    )
}


export default LengthControl;