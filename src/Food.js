import { useEffect } from 'react';

import './Food.scss';
import { useI18N } from './i18n';

export function Food() {
    const { food } = useI18N();
    const { rec, smol, menu, cake, midnight, titles, vega } = food;

    useEffect(() => {
        const onScroll = () => {
            const items = document.querySelectorAll('.timeline-item');
            for (let i = 0; i < items.length - 1; i++) {
                const offsetPx = 88;
                const diff = items[i].offsetTop - window.scrollY + offsetPx;
                const maxZero = Math.max(0, diff);

                if (diff <= offsetPx) {
                    items[i].style.opacity = maxZero / 100;
                    items[i].style.opacity = maxZero / 100;
                } else {
                    items[i].style.opacity = 1;
                    items[i].style.opacity = 1;
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return <div className="container food">
        <div className="bg" />
        <div className="details">
            <div className="content">
                <div className="handle" />
                <div className="title">
                    <strong>{titles.rec}</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {rec.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>{titles.smol}</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {smol.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>{titles.menu}</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {menu.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>{titles.cake}</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {cake.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>{titles.midnight}</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {midnight.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>{titles.vega}</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {vega.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                    <div className="timeline-item" />
                </div>
            </div>
        </div>
    </div>
}
