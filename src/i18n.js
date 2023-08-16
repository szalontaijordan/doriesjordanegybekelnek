import { createContext, useContext } from 'react';

export const I18NContext = createContext({ lang: 'hu', setLang: () => {} });

export const i18n = {
    'hu': {
        today: 'Ma!',
        menu: {
            countdown: 'Visszaszámláló',
            agenda: 'Program',
            invitation: 'Meghívó',
            guests: 'Vendégkönyv'
        },
        aug: 'Augusztus',
        fullDate: '2023. augusztus 26.',
        dowShort: ['H', 'K', 'SZ', 'CS', 'P', 'SZ', 'V'],
        events: [
            'Szobák elfoglalása',
            'Vendégek érkezése, fogadás',
            'Kikérés',
            'Polgári ceremónia',
            'Templom',
            'Vacsora és Hajnalig tartó mulatság',
            'Menyasszonytánc',
            'Záróra',
            'Hazautazás',
        ],
        countDownLabels: {
            years: 'év',
            months: 'hónap',
            weeks: 'hét',
            days: 'nap',
            hours: 'óra',
            minutes: 'perc',
            seconds: 'másodperc'
        },
        invitation: {
            top1: [
                'Aki már hallotta, de nem hitte el',
                'aki már tudja, de nem jegyezte fel',
                'és aki még nem is hallotta',
                'írja fel a naptárjába!'
            ],
            img1: [
                'Dóri',
                '&',
                'Jordán'
            ],
            bottom1: [
                '2023. augusztus 26-án 15 órakor a',
                'VERBA TANYÁN',
                '(4482 Kótaj, Verba tanya 1)',
                'majd a nyíregyházi református',
                'templomban a násznép előtt, örök hűséget',
                'fogadunk egymásnak.',
                '',
                'Vacsora és hajnalig tartó vigasság',
                'ugyanott, melyre szeretettel várunk',
                'Benneteket!'
            ],
            top2: [
                'Vendégek érkezése: 15:00',
                'Polgári ceremónia: 16:30',
                'Templomi ceremónia: 18:00',
            ],
            img2: [
                'Ajándékon ne gondolkozz,',
                'Magaddal csak jó kedvet hozz!',
                'Inkább add a menyecske táncnál,',
                'Amit a kis családunknak szántál!'
            ],
            agendaLink: 'Program'
        },
        guests: {
            card1: 'Készíts egy fotót a\nvendégkönyvhöz',
            card2: 'és küldd el\nnekünk!',
            help: {
                gb: 'Vendégkönyv',
                back: 'vissza',
                withYours: 'saját telefonnal:',
                withOurs: 'a mi telefonunkkal:',
                p11: 'Készíts egy képet,',
                p12: 'majd küldd el nekünk az elérhetőségeinkre.',
                p21: 'Nyisd meg a ',
                p2em: 'kamera alkalmazást',
                p22: 'és készíts egy képet!',
                p23: 'Az esküvő után rendszerezzük a mi telefonunkkal készült képeket, tehát nincs további tennivalód.'
            },
            dontForget: 'Ne feledkezz meg a szemüvegekről sem!'
        },
        plural: (noun, count) => noun
    },
    'en': {
        today: 'Today!',
        menu: {
            countdown: 'Countdown',
            agenda: 'Agenda',
            invitation: 'Invitation',
            guests: 'Guest Book'
        },
        aug: 'August',
        fullDate: '26th August 2023',
        dowShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        events: [
            'Check in to the rooms',
            'Arrival & reception',
            'The groom meets the bride',
            'Wedding ceremony (civil)',
            'Wedding ceremony (church)',
            'Diner & party until dawn',
            'Dance with the bride',
            'Closing time',
            'Travelling home'
        ],
        countDownLabels: {
            years: 'year',
            months: 'month',
            weeks: 'week',
            days: 'day',
            hours: 'hour',
            minutes: 'minute',
            seconds: 'second'
        },
        invitation: {
            top1: [
                'Those who heard but didn\'t believe',
                'those who knew but didn\'t receive',
                'and those who haven\'t heard before',
                'please mark the date and do not ignore!'
            ],
            img1: [
                'Dóri',
                '&',
                'Jordán'
            ],
            bottom1: [
                'On the 26th of August, 2023. 15 o\'clock at',
                'VERBA TANYA',
                '(Hungary, 4482 Kótaj, Verba tanya 1)',
                'then at the reformed church of Nyíregyháza',
                'in front of the wedding guests, gathered to see',
                'we pledge eternal faith and loyalty.',
                '',
                'Join us for dinner and merrymaking all night -',
                'at the same place - with delight, We lovingly invite',
                'You to our joyous sight!'
            ],
            top2: [
                'Reception: 15:00',
                'Wedding ceremony (civil): 16:30',
                'Wedding ceremony (church): 18:00',
            ],
            img2: [
                'Don\'t worry about the gift you bring',
                'Just join the bride\'s dance',
                'and let your heart sing',
                'Instead of a wrapped surprise',
                'Contribute to our new life with',
                'the tradition we prize!'
            ],
            agendaLink: 'Agenda',
        },
        guests: {
            card1: 'Take a photo\nfor the guest book',
            card2: 'and send it\nto us',
            help: {
                gb: 'Guest book using',
                back: 'back',
                withYours: 'your phone:',
                withOurs: 'our phone:',
                p11: 'Take a photo,',
                p12: 'then send it to us based on the given options',
                p21: 'Open the ',
                p2em: 'camera app',
                p22: 'and take a photo!',
                p23: 'These photos will be sorted by us after the wedding, so you are done.'
            },
            dontForget: 'Don\'t forget about the party glasses!'
        },
        plural: (noun, count) => count === 1 ? noun : `${noun}s`
    }
};

export function useI18N() {
    const context = useContext(I18NContext);
    return context.lang === 'hu'
        ? i18n.hu
        : i18n.en;
}
