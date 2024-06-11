// 'use client';

// import type { TSupportedLangs, i18nKeysMap } from '@/lang/getDictionary';
// import type { PathInto } from '@/types/utility-types.type';

// import { useEffect, useState } from 'react';
// import { useParams } from 'next/navigation';

// import { getDictionary } from '@/lang/getDictionary';
// import { getNestedProperty } from '@/helpers/getNestedProperty';
// import { supportedLangs } from '../../lang/getDictionary';

// interface TProps {
//     i18nKey: PathInto<i18nKeysMap>;
// }

// export function Translator({ i18nKey }: TProps) {
//     const { lang }: { lang: supportedLangs } = useParams();

//     const [dictionary, setDictionary] = useState<i18nKeysMap | null>(null);

//     useEffect(() => {
//         getDictionary(lang).then((dict) => setDictionary(dict));
//     }, [lang]);

//     if (!dictionary) {
//         return '';
//     }

//     return getNestedProperty(dictionary, i18nKey);
// }
