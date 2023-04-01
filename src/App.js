import { addDays, addHours, addMinutes, addMonths, addSeconds, addWeeks, addYears, differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks, differenceInYears } from 'date-fns';
import { useState, useEffect } from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

const router = createBrowserRouter([
    {
      path: "/",
      element: <CountDown />,
    },
    {
        path: '/program',
        element: <Agenda />,
    }
]);

function App() {
    return <RouterProvider router={router} />;
}

const minItemSize = 42;

function Agenda() {
    const days = Array.from({ length: 31 }).map((_, i) => i + 1);
    days.unshift(31);
    days.push(1, 2, 3);
    days.unshift(...['H', 'K', 'SZ', 'CS', 'P', 'SZ', 'V']);

    const items = [
        { time: '15:30', text: 'Vendégvárás', duration: 2 },
        { time: '16:30', text: 'Polgári ceremónia', duration: 3 },
        { time: '18:00', text: 'Templom', duration: 3 },
        { time: '19:30', text: 'Vacsora és Hajnalig tartó mulatság', duration: 5 },
        { time: '00:00', text: 'Menyasszonytánc', duration: 8 },
        { time: '04:00', text: '', duration: 10 },
        { time: '09:00', text: 'Hazautazás', duration: 2 },
    ];

    return <div className="agenda">
        <div className="calendar">
            <div><span>Augusztus</span>2023</div>
            <div className="grid">
                {days.map(day => <div>{day}</div>)}
            </div>
        </div>
        <div className='details'>
            <div className="space calendar" style={{ position: 'static', visibility: 'hidden' }}>
                <div><span>Augusztus</span>2023</div>
                <div className="grid">
                    {days.map(day => <div>{day}</div>)}
                </div>
            </div>
            <div className="content">
                <div className="handle" />
                <div className="title">
                    <strong>2023. augusztus 26.</strong>
                </div>
                <div className="timeline">
                    {items.map((item, key) => (<div className="timeline-item" key={key} style={{ height: `${(item.duration + 1) * minItemSize}px` }}>
                        <div className="time">
                            {item.time}
                        </div>
                        <div className="dot" />
                        <div className="item-title">
                            <div className="card">
                                {item.text}
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    </div>;
}

function CountDown() {
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
