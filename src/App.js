import { addDays, addHours, addMinutes, addMonths, addSeconds, addWeeks, addYears, differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks, differenceInYears } from 'date-fns';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => setNow(new Date()), 1000);
    }, []);

    const getData = () => {
        let wedding = new Date('2023-08-26');

        const years = differenceInYears(wedding, now);
        wedding = addYears(wedding, -years);

        const months = differenceInMonths(wedding, now);
        wedding = addMonths(wedding, -months);

        const weeks = differenceInWeeks(wedding, now);
        wedding = addWeeks(wedding, -weeks);

        const days = differenceInDays(wedding, now);
        wedding = addDays(wedding, -days);

        const hours = differenceInHours(wedding, now);
        wedding = addHours(wedding, -hours);

        const minutes = differenceInMinutes(wedding, now);
        wedding = addMinutes(wedding, -minutes);

        const seconds = differenceInSeconds(wedding, now);
        wedding = addSeconds(wedding, -seconds);

        return {
            seconds,
            minutes,
            hours,
            days,
            weeks,
            months,
            years
        };
    }

    const { years, months, weeks, days, hours, minutes, seconds } = getData();
    const labels = [
        { 'év': years },
        { 'hónap': months },
        { 'hét': weeks },
        { 'nap': days },
        { 'óra': hours },
        { 'perc': minutes },
        { 'másodperc': seconds }
    ];

    return (
        <>
            <div style={{ textAlign: 'center', color: '#5F8575' }}>
                <h1>Dóri és Jordán</h1>
            </div>
            <div className="container">
                {labels.map((label, key) => <span className="entry">
                    <span className="number">{Object.entries(label)[0][1]}</span>
                    <span className="text">{Object.entries(label)[0][0]}</span>
                </span>)}
            </div>
        </>
    );
}

export default App;
