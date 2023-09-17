import dj1 from './img/dj1.png';
import dj2 from './img/dj2.png';
import insta from './img/insta-logo.png';
import mailLogo from './img/mail.png';
import gpa from './img/gph.png';
import sc from './img/samsungcamera.png';

import './Guest.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useI18N } from './i18n';

export function Guests() {
    const ref = useRef(null);
    const tiemoutRef = useRef();
    const { guests } = useI18N();

    useEffect(() => {
        const onScroll = () => {
            if (!ref.current) {
                return;
            }

            if (tiemoutRef.current) {
                window.clearTimeout(tiemoutRef.current);
            }

            const cards = ref.current.querySelectorAll('.image-card');

            if (window.scrollY <= 16 && window.innerHeight < 900) {
                tiemoutRef.current = setTimeout(() => {
                    cards[1].classList.add('wiggle');
                }, 4000);
            } else {
                cards[1].classList.remove('wiggle');
            }
        };
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return <>
        <div ref={ref} className="container guests">
            <ImageCard src={dj2} cn="first">
                <p>{guests.card1}</p>
                <A70 />
            </ImageCard>
            <ImageCard src={dj1} cn="second">
                <p>{guests.card2}</p>
            </ImageCard>
            <DontForget />
            <div className="how">
                <p style={{ textAlign: 'center' }}></p>
                <div className="insta">
                    <InstaProfile name="@kissdoraa" />
                    <InstaProfile name="@jordanszalontai" />
                    <Mail name="Dóri" mail="jordanlt1111@gmail.com" />
                    <Mail name="Jordán" mail="jordanlt1111@gmail.com" />
                    <Photos />
                </div>
            </div>
        </div>
    </>
}

export function Camera() {
    const { guests } = useI18N();
    const { help } = guests;
    return <>
        <div className="container guests">
            <div className="help-glass" >
                <div className="help-text">
                    {help.gb} <strong>{help.withYours}</strong>
                    <p>{help.p11}<br />{help.p12}</p>
                </div>
                <div className="help-glass" style={{ padding: '8px', width: '100px', marginLeft: 'auto' }} >
                    <div className="help-text" style={{ textAlign: 'center' }}>
                        <Link to="/vendegkonyv">{help.back}</Link>
                    </div>
                </div>
            </div>
            <div className="help-glass" >
                <div className="help-text">
                    {help.gb} <strong>{help.withOurs}</strong>
                    <p>{help.p21}<em>{help.p2em}</em><br />{help.p22}</p>
                    <p>{help.p23}</p>
                </div>
                <div className="help-glass" style={{ padding: '8px', width: '100px', marginLeft: 'auto' }} >
                    <div className="help-text" style={{ textAlign: 'center' }}>
                        <Link to="/vendegkonyv">{help.back}</Link>
                    </div>
                </div>
            </div>

        </div >
    </>;
}

export function ImageCard({ src, children, cn }) {
    return <div className={`image-card ${cn}`}>
        <img src={src} alt="Bride and Groom" />
        <div className="children">{children}</div>
    </div>;
}

function InstaProfile({ name }) {
    return <div className="instagram-profile">
        <img src={insta} alt="Instagram:" />
        <span>
            <a
                href={`https://www.instagram.com/${name.slice(1)}`}
                target="_blank"
                rel="noopener noreferrer"
            >{name}</a>
        </span>
    </div>;

}

function Mail({ name, mail }) {
    return <div className="e-mail">
        <img src={mailLogo} alt="Email:" />
        <span>
            <a
                href={`mailto:${mail}`}
                target="_blank"
                rel="noopener noreferrer"
            >{name}</a>
        </span>
    </div>;

}

function DontForget() {
    const { guests } = useI18N();
    return <div className="dont-forget">
        <span>{guests.dontForget}</span>
    </div>;
}

function Photos() {
    const [url, setURL] = useState('');

    useEffect(() => {
        async function getData() {
            const result = await fetch('/api/album');
            const json = await result.json();
            setURL(json.albumURL);
        }
        getData();
    }, []);

    return url && <div className="album">
        <img src={gpa} alt="Photos" />
        <span>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
            >Photos</a>
        </span>
    </div>;
}

function A70() {
    return <div className="a70">
        <button>
            <Link to="/camera">
                <img src={sc} alt="Camera" />
            </Link>
        </button>

    </div>;
}