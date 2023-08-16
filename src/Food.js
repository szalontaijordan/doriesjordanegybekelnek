import { useEffect } from 'react';

import './Food.scss';

export function Food() {
    const rec = [
        'Aszalt szilvával töltött pulykamell',
        'Fasírozott',
        'Sült csirkecomb',
        'Sonkatekercs tormakrémmel töltve',
        'Debreceni karaj',
        'Baconba göngyölt csirkemáj',
        'Gyümölcstál'
    ];
    const smol = [
        'Citromtart',
        'Áfonya-fehércsoki tart',
        'Pisztácia-málna choux',
        'Linzer',
        'Sajtos pogácsa',
        'Fetás-aszalt paradicsomos pogácsa'
    ]
    const menu = [
        'Tyúkhúsleves, főtt hús, zöldségek',
        '',
        'Sültes tál',
        '- Szatmári tölött flekken -',
        '- Rántott sertéskaraj - ',
        '- Sonkával, sajttal töltött rántott pulykamell -',
        '- Sült csirkecomb -',
        '- Rántott karfiol -',
        '- Rántott sajt - ',
        '- Francia köret -',
    ];
    const cake = [
        '- mák-citrom-fehércsoki',
        '- sós karamell-mogyoró',
        '- étcsoki trüffel',
    ];
    const midnight = [
        'Flekken sütés',
        '- Csirkemell -',
        '- Fűszeres tarja -',
        '- Görög saláta -',
    ]

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
                    <strong>Állófogadás</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {rec.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>Sütemények</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {smol.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>Vacsora</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {menu.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>Torta</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {cake.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
                <div className="title">
                    <strong>Éjféli menü</strong>
                </div>
                <div className="menuu">
                    <div className="timeline-item" />
                    {midnight.map((item, i) => <div className="timeline-item" key={i}>{item}</div>)}
                </div>
            </div>
        </div>
    </div>
}
