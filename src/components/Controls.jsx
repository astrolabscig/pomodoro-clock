import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeLeft, toggleRunning, reset, switchLabel } from '../redux/timerSlice';
import $ from'jquery';



function Controls() {
    const dispatch = useDispatch();
    const { isRunning, timeLeft, timerLabel, breakLength, sessionLength } = useSelector(state => state.timer);

    const intervalRef = useRef(null);
    const beepRef = useRef(null);

    const timeLeftRef = useRef(timeLeft);

    useEffect(() => {
        timeLeftRef.current = timeLeft;}, [timeLeft]);

    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                    if (timeLeftRef.current <= 0) {
                        $(beepRef.current).trigger('play');
                        
                        if (timerLabel === 'Session'){
                            dispatch(switchLabel('Break'));
                            dispatch(setTimeLeft(breakLength * 60));
                            timeLeftRef.current = breakLength * 60;
                        } else {
                            dispatch(switchLabel('Session'));
                            dispatch(setTimeLeft(sessionLength * 60));
                            timeLeftRef.current = sessionLength * 60;
                        }
                    } else {
                        timeLeftRef.current -= 1;
                        dispatch(setTimeLeft(timeLeftRef.current));
                    }
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }

        return () => clearInterval(intervalRef.current);
    }, [isRunning, timeLeft, timerLabel, breakLength, sessionLength, dispatch]);

    const handleStartStop = () => {
        dispatch(toggleRunning());
    };

    const handleReset = () => {
        clearInterval(intervalRef.current);
        dispatch(reset());
        $(beepRef.current).trigger('pause').prop('currentTime', 0);
    };

    return (
        <div className='text-center my-3'>
            <button
                id='start_stop'
                onClick={handleStartStop}
                className='btn btn-primary mx-2'
            >{isRunning ? 'Pause' : 'Start'}</button>
            <button 
                id='reset'
                onClick={handleReset}
                className='btn btn-warning mx-2'
            >Reset</button>

            <audio 
                id='beep'
                ref={beepRef}
                preload='auto'
                src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"></audio>
        </div>
    )
}

export default Controls;