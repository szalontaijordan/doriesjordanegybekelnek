import { useI18N } from "./i18n"

export function FAQ() {
    const { faq } = useI18N();

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
