import { Link } from 'react-router-dom';
import circle from './circle.png';
import { useI18N } from './i18n';

function lines(text, key) {
    const className = [
        text === '' && 'mt',
        text.startsWith('(') && text.endsWith(')') && 'brackets'
    ].filter(Boolean).join(' ');
    return <div className={className} key={key}>{text}</div>;
}

function Invitation() {
    const { invitation } = useI18N();
    
    return <div className="invitation">
        <div className="top">
            {invitation.top1.map(lines)}
        </div>
        <div className="img">
            <img src={circle} alt="circle" />
            <div className="text-container">
                {invitation.img1.map(lines)}
            </div>
        </div>
        <div className="bottom">
            {invitation.bottom1.map(lines)}
        </div>
        <div className="top top2">
            {invitation.top2.map(lines)}
        </div>
        <div className="img img2">
            <img src={circle} alt="circle" />
            <div className="text-container">
                {invitation.img2.map(lines)}
            </div>
        </div>
        <div>
            <Link to="/program">{invitation.agendaLink} →</Link>
        </div>
    </div>;
}

export default Invitation;
