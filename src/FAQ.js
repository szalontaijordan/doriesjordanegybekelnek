export function FAQ() {
    const faq = [
        {
            q: 'Mi a helyszín címe?',
            a: '4482 Kótaj, Verba tanya 1',
        },
        {
            q: 'Hányra érkezzünk és hova?',
            a: 'Az állófogadás 15.00-kor keződidk a Verba tanyán. Ennek megfelelően érdemes érkezni a helyszínre.',
        },
        {
            q: 'Hogyan lehet eljutni a templomba?',
            a: 'A legjobb, ha összebeszél több ember, és autóval jutnak el a templomba. Ezen felül két darab nyolcszemélyes kisbusz áll a rendelkezésünkre, ezek két körben, összesen 32 embert tudnak szállítani a templomig és vissza.',
        },
    ]

    return <div className="container food">
        <div className="bg" />
        <div className="details">
            <div className="content">
                <div className="handle" />
                {faq.map((item, i) => {
                    return <div key={i}>
                        <div className="title">
                            <strong>{item.q}</strong>
                        </div>
                        <div className="menuu">
                            <div className="timeline-item" />
                            <div className="timeline-item">{item.a}</div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    </div>
}
