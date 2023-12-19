import 'server-only';

const dictionaries = {
    en: () => import('./en.json').then((module) => module.default),
    es: () => import('./es.json').then((module) => module.default),
};

export type SupportedLangs = keyof typeof dictionaries;

export const getDictionary = (lang: SupportedLangs) => {
    return dictionaries[lang]();
};
