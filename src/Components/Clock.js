import React, { useState, useEffect } from 'react';
import moment from 'moment';
function ClockContainer() {
    let timer = null;
    const [time, setTime] = useState(moment());
    useEffect(() => {
        timer = setInterval(() => {
            setTime(moment());
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <div className="time" >
                {time.format('YYYY-MM-DD')} {time.format('HH시mm분ss초')}

            </div>
        </div>
    );
}

export default ClockContainer;