import type { NextRequest } from 'next/server';
import type { SupportedLangs } from '@/lang/getDictionary';

import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';

const supportedLangs: SupportedLangs[] = ['es', 'en'];

export function getLang(preferredLang: string): string {
    const requestedLang = new Negotiator({
        headers: { 'accept-language': preferredLang },
    }).languages();

    const defaultLang = 'es';

    return match(requestedLang, supportedLangs, defaultLang);
}

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    const pathnameHasLang = supportedLangs.some(
        (lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`,
    );
    const isAsset = ['.png', '.jpg', '.svg', '.ico', '.mp4', '.webp'].some((ext) =>
        pathname.endsWith(ext),
    );

    if (pathnameHasLang || isAsset) return;

    const preferredLang = request.headers.get('accept-language')!;

    const lang = getLang(preferredLang);

    request.nextUrl.pathname = `/${lang}${pathname}`;

    return Response.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
