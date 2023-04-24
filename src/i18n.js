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
        plural: (noun, count) => count === 1 ? noun : `${noun}s`
    }
};

export function useI18N() {
    const context = useContext(I18NContext);
    return context.lang === 'hu'
        ? i18n.hu
        : i18n.en;
}
