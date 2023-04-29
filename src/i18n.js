import { createContext, useContext } from 'react';

export const I18NContext = createContext({ lang: 'hu', setLang: () => {} });

export const i18n = {
    'hu': {
        aug: 'Augusztus',
        fullDate: '2023. augusztus 26.',
        dowShort: ['H', 'K', 'SZ', 'CS', 'P', 'SZ', 'V'],
        events: [
            'Vendégvárás',
            'Polgári ceremónia',
            'Templom',
            'Vacsora és Hajnalig tartó mulatság',
            'Menyasszonytánc',
            '',
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
                '2023. augusztus 26-án 16 órakor a',
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
                'Vendégek érkezése: 15:30',
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
        plural: (noun, count) => noun
    },
    'en': {
        aug: 'August',
        fullDate: '26th August 2023',
        dowShort: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        events: [
            'Reception',
            'Wedding ceremony (civil)',
            'Wedding ceremony (church)',
            'Diner & party until dawn',
            'Dance with the bride',
            '',
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
                'On the 26th of August, 2023. 16 o\'clock at',
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
                'Reception: 15:30',
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
            agendaLink: 'Agenda'
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
