import { addDays, addHours, addMinutes, addMonths, addSeconds, addWeeks, addYears, differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks, differenceInYears } from 'date-fns';
import { useState, useEffect, useContext } from 'react';

import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Invitation from './Invitation';

import './App.css';
import './Menu.scss';

import { I18NContext, useI18N } from './i18n';

const router = [
    {
      path: "/",
      element: <CountDown />,
    },
    {
        path: "/countdown",
        element: <CountDown />,
    },
    {
        path: '/program',
        element: <Agenda />,
    },
    {
        path: '/agenda',
        element: <Agenda />,
    },
    {
        path: '/meghivo',
        element: <Invitation />,
    },
    {
        path: '/invitation',
        element: <Invitation />,
    }
];

function App() {
    const [lang, setLang] = useState('hu');

    return <I18NContext.Provider value={{ lang, setLang }}>
        <Menu />
        <LangSelector />
        <Routes>
            {router.map(route => <Route key={route.path} path={route.path} element={route.element} />)}
        </Routes>
    </I18NContext.Provider>;
}

function Menu() {
    //
    // https://codepen.io/fromwireframes/pen/arMrYp
    //
    const [isOpen, setIsOpen] = useState(false);
    const { pathname } = useLocation();
    const { menu } = useI18N();
    const onChange = () => setIsOpen(prev => !prev);

    const close = () => setIsOpen(false);

    return <div className="menu">
        <div className="menu-icon">
            <input className="menu-icon__cheeckbox" type="checkbox" checked={isOpen} onChange={onChange} />
            <div><span /><span /></div>
        </div>
        <div className={`menu-overlay ${isOpen ? 'open' : 'closed'}`}>
            <nav>
                <ul>
                    <li className={pathname === '/' ? 'active' : ''}>
                        <Link to="/" onClick={close}>{menu.countdown}</Link>
                    </li>
                    <li className={pathname === '/program' ? 'active' : ''}>
                        <Link to="/program" onClick={close}>{menu.agenda}</Link>
                    </li>
                    <li className={pathname === '/meghivo' ? 'active' : ''}>
                        <Link to="/meghivo" onClick={close}>{menu.invitation}</Link>
                    </li>
                </ul>
            </nav>
            <div className="menu-icon close">
                <input className="menu-icon__cheeckbox" type="checkbox" checked={isOpen} onChange={onChange} />
                <div><span /><span /></div>
            </div>
        </div>
    </div>
}

function LangSelector() {
    const { lang, setLang } = useContext(I18NContext);

    return <div className="lang-selector">
        <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>🇬🇧</button>
        <button className={lang === 'hu' ? 'active' : ''} onClick={() => setLang('hu')}>🇭🇺</button>
    </div>;
}

const minItemSize = 42;

function Agenda() {
    const { dowShort, events, aug, fullDate } = useI18N();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const onScroll = () => {
            const items = document.querySelectorAll('.timeline-item');
            for (let i = 0; i < items.length - 1; i++) {
                const offsetPx = 50;
                const diff = items[i + 1].offsetTop - items[i].offsetTop;
                const maxZero = Math.max(0, diff);

                if (diff <= offsetPx) {
                    items[i].querySelector('.item-title').style.opacity = maxZero / 100;
                    items[i].querySelector('.time').style.opacity = maxZero / 100;
                } else {
                    items[i].querySelector('.item-title').style.opacity = 1;
                    items[i].querySelector('.time').style.opacity = 1;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    const days = Array.from({ length: 31 }).map((_, i) => i + 1);
    days.unshift(31);
    days.push(1, 2, 3);
    days.unshift(...dowShort);

    const items = [
        { time: '15:30', text: '', duration: 2 },
        { time: '16:30', text: '', duration: 3 },
        { time: '18:00', text: '', duration: 3 },
        { time: '19:30', text: '', duration: 5 },
        { time: '00:00', text: '', duration: 8 },
        { time: '04:00', text: '', duration: 10 },
        { time: '09:00', text: '', duration: 2 },
    ];
    items.forEach((item, index) => item.text = events[index]);

    return <div className="agenda">
        <div className="calendar">
            <div className="calendar-title"><div className="month">{aug}</div><div className="year">2023</div></div>
            <div className="grid">
                {days.map((day, key) => <div key={key}>{day}</div>)}
            </div>
        </div>
        <div className='details'>
            <div className="space calendar" style={{ position: 'static', visibility: 'hidden' }}>
                <div className="calendar-title"><div className="month">{aug}</div><div className="year">2023</div></div>
                <div className="grid">
                    {days.map((day, key) => <div key={key}>{day}</div>)}
                </div>
            </div>
            <div className="content">
                <div className="handle" />
                <div className="title">
                    <strong>{fullDate}</strong>
                </div>
                <div className="timeline">
                    {items.map((item, key) => (<div className="timeline-item" key={key} style={{ height: `${(item.duration + 1) * minItemSize}px` }}>
                        <div className="time">
                            {item.time}
                        </div>
                        <div className="dot" />
                        <div className="item-title">    
                            {item.text}
                        </div>
                    </div>))}
                </div>
            </div>
        </div>
    </div>;
}

function CountDown() {
    const { countDownLabels, plural } = useI18N();
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
        { [plural(countDownLabels.years, years)]: years },
        { [plural(countDownLabels.months, months)]: months },
        { [plural(countDownLabels.weeks, weeks)]: weeks },
        { [plural(countDownLabels.days, days)]: days },
        { [plural(countDownLabels.hours, hours)]: hours },
        { [plural(countDownLabels.minutes, minutes)]: minutes },
        { [plural(countDownLabels.seconds, seconds)]: seconds }
    ];

    return (
        <>
            <div className="container">
                <div className="cntdwn">
                    {labels.map((label, key) => <span className="entry" key={key}>
                        <span className="number">{Object.entries(label)[0][1]}</span>
                        <span className="text">{Object.entries(label)[0][0]}</span>
                    </span>)}
                </div>
            </div>
        </>
    );
}

export default App;
