import { useEffect, useState } from 'react';
import '../App.css'
const Seconds = ({ minutes, setMinutes }) => {

    const [seconds, setSeconds] = useState();

    useEffect(() => { if (seconds === 0) setMinutes(0); }, [seconds, setMinutes]);

    useEffect(() => { setSeconds(minutes * 60) }, [minutes]);


    useEffect(() => {
        const countdown = setInterval(() => {
            setSeconds((prevstate) => prevstate - 1);
        }, 1000);
        return () => clearInterval(countdown);
    }, []);

    let sen = 'Second';

    if (`${seconds}` > 1) sen += 's';

    return <h3> {seconds} {sen} </h3>

}


export default Seconds;