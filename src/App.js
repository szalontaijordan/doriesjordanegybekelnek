import { addDays, addHours, addMinutes, addMonths, addSeconds, addWeeks, addYears, differenceInDays, differenceInHours, differenceInMinutes, differenceInMonths, differenceInSeconds, differenceInWeeks, differenceInYears } from 'date-fns';
import { useState, useEffect, useContext } from 'react';

import { Link, Route, Routes, useLocation } from 'react-router-dom';

import './App.css';
import './Menu.scss';

import { I18NContext, useI18N } from './i18n';
import { Galery } from './Galery';

const router = [
    {
        path: "/",
        element: <Galery />,
    },
    {
        path: "/visszaszamlalo",
        element: <CountDown />,
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
                        <Link to="/" onClick={close}>{menu.galery}</Link>
                    </li>
                    <li className={pathname === '/visszaszamlalo' ? 'active' : ''}>
                        <Link to="/visszaszamlalo" onClick={close}>{menu.countdown}</Link>
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

function CountDown() {
    const { today, countDownLabels, menu, plural } = useI18N();
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        setInterval(() => setNow(new Date()), 1000);
    }, []);

    const getData = () => {
        let wedding = new Date('2023-08-26 07:00');

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
        { [plural(countDownLabels.years, years)]: Math.abs(years) },
        { [plural(countDownLabels.months, months)]: Math.abs(months) },
        { [plural(countDownLabels.weeks, weeks)]: Math.abs(weeks) },
        { [plural(countDownLabels.days, days)]: Math.abs(days) },
        { [plural(countDownLabels.hours, hours)]: Math.abs(hours) },
        { [plural(countDownLabels.minutes, minutes)]: Math.abs(minutes) },
        { [plural(countDownLabels.seconds, seconds)]: Math.abs(seconds) }
    ];

    const weddingDayStart = new Date('2023-08-26 7:00').getTime();
    const weddingDayEnd = new Date('2023-08-27 10:00').getTime();

    const isToday = now.getTime() > weddingDayStart && now.getTime() < weddingDayEnd;

    return (
        <>
            <div className="container">
                <div className="cntdwn">
                    {
                        isToday
                            ? <>
                                <span className="today">{today}</span>
                                <nav>
                                    <ul>
                                        <li>
                                            <Link to="/program">{menu.agenda}</Link>
                                        </li>
                                        <li>
                                            <Link to="/vendegkonyv">{menu.guests}</Link>
                                        </li>                            
                                    </ul>
                                </nav>
                            </>
                            : <>

                                {labels.map((label, key) => <span className="entry" key={key}>
                                    <span className="number">{Object.entries(label)[0][1]}</span>
                                    <span className="text">{Object.entries(label)[0][0]}</span>
                                </span>)}
                            </>
                    }
                </div>
            </div>
        </>
    );
}

export default App;
