import { useState, useEffect } from 'react';
import { ImageCard } from './Guests';

import wedding from './img/wedding.png';
import dj1 from './img/dj1.png';
import gph from './img/gph.png';

import './Galery.css';
import { useI18N } from './i18n';

const textStyle = {
    display: 'inline-block',
    position: 'absolute',
    right: 0,
    bottom: '18px',
    padding: '2px 28px 2px 100px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)'
};

export function Galery() {
    const { menu } = useI18N();
    const [url, setURL] = useState({
        guestsURL: '',
        weddingURL: '',
    });

    useEffect(() => {
        async function getData() {
            const [result1, result2] = await Promise.all([fetch('/api/album'), fetch('/api/wedding')]);
            const { albumURL: guestsURL } = await result1.json();
            const { albumURL: weddingURL } = await result2.json();
            setURL({ guestsURL, weddingURL });
        }
        getData();
    }, []);

    return <>
        <div className="bg" />
        <div className="ggalery">
            <div className="top-text">
                Dóri &amp; Jordán
            </div>
            <div className="galery">
                <a href={url.guestsURL} target="_blank" rel="noopener noreferrer">
                    <ImageCard src={wedding} cn="wedding">
                        <Tag text={menu.galery} style={textStyle} />
                        <Photos />
                    </ImageCard>
                </a>
                <a href={url.weddingURL} target="_blank" rel="noopener noreferrer">
                    <ImageCard src={dj1} cn="guests">
                        <Tag text={menu.guests} style={{ ...textStyle, padding: '2px 28px 2px 42px' }} />
                        <Photos />
                    </ImageCard>
                </a>
            </div>
        </div>
    </>;
}

function Tag({ text, style }) {
    return <div style={style} className="tag">{text}</div>;
}

function Photos() {
    return <img src={gph} alt="Photos" className="galery-photo-logo" />
}
