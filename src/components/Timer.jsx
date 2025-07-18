import { useSelector } from 'react-redux'

function Timer() {
    const { timerLabel, timeLeft } = useSelector(state => state.timer)

    const formatTime = (time) => {
        const minutes = String(Math.floor(time / 60)).padStart(2, '0');
        const seconds = String(time % 60).padStart(2, '0');
        return `${minutes}:${seconds}`;
    };

    return (
        <div className='text-center my-4'>
            <h4 id='timer-label' className="fw-bold text-secondary">{timerLabel}</h4>
            <div
                id='time-left'
                className="display-4 py-2 px-4 bg-white rounded-3 shadow text-dark fw-bold"
            >{formatTime(timeLeft)}</div>
        </div>
    );
}

export default Timer;