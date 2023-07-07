import dj1 from './img/dj1.png';
import dj2 from './img/dj2.png';
import insta from './img/insta-logo.png';
import mailLogo from './img/mail.png';
import gpa from './img/gpa.png';
import sc from './img/samsungcamera.png';

import './Guest.scss';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export function Guests() {
    const ref = useRef(null);
    const tiemoutRef = useRef();

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
                <p>Készíts egy fotót a<br />vendégkönyhöz</p>
                <A70 />
            </ImageCard>
            <ImageCard src={dj1} cn="second">
                <p>És küldd el<br />nekünk!</p>
            </ImageCard>
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
    return <>
        <div className="container guests">
            <div className="help-glass" >
                <div className="help-text">
                    Vendégköny <strong>saját telefonnal:</strong>
                    <p>Készíts egy képet,</p>
                    <p>majd küldd el nekünk az elérhetőségeinkre</p>
                </div>
                <div className="help-glass" style={{ padding: '8px', width: '100px', marginLeft: 'auto' }} >
                    <div className="help-text" style={{ textAlign: 'center' }}>
                        <Link to="/vendegkonyv">vissza</Link>
                    </div>
                </div>
            </div>
            <div className="help-glass" >
                <div className="help-text">
                    Vendégköny <strong>a mi telefonunkkal:</strong>
                    <p>Nyisd meg a <em>kamera alkalamzást</em></p>
                    <p>és készíts egy képet!</p>
                    <p>Az esküvő után rendszerezzük a mi telefonunkkal készült képeket</p>
                </div>
                <div className="help-glass" style={{ padding: '8px', width: '100px', marginLeft: 'auto' }} >
                    <div className="help-text" style={{ textAlign: 'center' }}>
                        <Link to="/vendegkonyv">vissza</Link>
                    </div>
                </div>
            </div>

        </div >
    </>;
}

function ImageCard({ src, children, cn }) {
    return <div className={`image-card ${cn}`}>
        <img src={src} alt="Image" />
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

function Photos() {
    const album = 'https://drive.google.com/drive/folders/1V2oWqES0Pu2ukwSc1-fMHYm6dynLu23-?usp=sharing';
    return <div className="album">
        <img src={gpa} alt="Photos" />
        <span>
            <a
                href={album}
                target="_blank"
                rel="noopener noreferrer"
            >Google Drive</a>
        </span>
    </div>;
}

function A70() {
    return <div className="a70">
        <button>
            <Link to="/camera">
                <img src={sc} alt="Photos" />
            </Link>
        </button>

    </div>;
}