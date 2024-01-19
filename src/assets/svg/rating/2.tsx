import type { IEmotion } from './interface';

export function EmotionValue2({ active }: IEmotion) {
    return (
        <>
            {active ? (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6854)'}>
                        <circle cx={'18'} cy={'18'} fill={'#F8D969'} r={'18'} />
                    </g>
                    <path
                        d={
                            'M12.1641 25.9692C13.6263 24.2392 15.8123 23.1406 18.2548 23.1406C20.6974 23.1406 22.8834 24.2392 24.3456 25.9692'
                        }
                        stroke={'#F05136'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M7.19531 13.3735C8.18305 12.1154 9.65966 11.3164 11.3096 11.3164C12.9595 11.3164 14.4361 12.1154 15.4239 13.3735'
                        }
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M21.0859 13.3735C22.0737 12.1154 23.5503 11.3164 25.2002 11.3164C26.8502 11.3164 28.3268 12.1154 29.3145 13.3735'
                        }
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <defs>
                        <filter
                            colorInterpolationFilters={'sRGB'}
                            filterUnits={'userSpaceOnUse'}
                            height={'41'}
                            id={'filter0_i_8484_6854'}
                            width={'41'}
                            x={'0'}
                            y={'-5'}
                        >
                            <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
                            <feBlend
                                in={'SourceGraphic'}
                                in2={'BackgroundImageFix'}
                                mode={'normal'}
                                result={'shape'}
                            />
                            <feColorMatrix
                                in={'SourceAlpha'}
                                result={'hardAlpha'}
                                type={'matrix'}
                                values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
                            />
                            <feOffset dx={'5'} dy={'-5'} />
                            <feGaussianBlur stdDeviation={'8'} />
                            <feComposite
                                in2={'hardAlpha'}
                                k2={'-1'}
                                k3={'1'}
                                operator={'arithmetic'}
                            />
                            <feColorMatrix
                                type={'matrix'}
                                values={'0 0 0 0 0.784314 0 0 0 0 0.490196 0 0 0 0 0 0 0 0 0.45 0'}
                            />
                            <feBlend
                                in2={'shape'}
                                mode={'normal'}
                                result={'effect1_innerShadow_8484_6854'}
                            />
                        </filter>
                    </defs>
                </svg>
            ) : (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6844)'}>
                        <circle cx={'18.2188'} cy={'18'} fill={'#EBE9F2'} r={'18'} />
                    </g>
                    <path
                        d={
                            'M12.3828 25.9692C13.8451 24.2392 16.031 23.1406 18.4736 23.1406C20.9161 23.1406 23.1021 24.2392 24.5643 25.9692'
                        }
                        stroke={'#9896A5'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M7.41406 13.3735C8.4018 12.1154 9.87841 11.3164 11.5283 11.3164C13.1783 11.3164 14.6549 12.1154 15.6426 13.3735'
                        }
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M21.3047 13.3735C22.2924 12.1154 23.769 11.3164 25.419 11.3164C27.0689 11.3164 28.5455 12.1154 29.5333 13.3735'
                        }
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <defs>
                        <filter
                            colorInterpolationFilters={'sRGB'}
                            filterUnits={'userSpaceOnUse'}
                            height={'41'}
                            id={'filter0_i_8484_6844'}
                            width={'41'}
                            x={'0.21875'}
                            y={'-5'}
                        >
                            <feFlood floodOpacity={'0'} result={'BackgroundImageFix'} />
                            <feBlend
                                in={'SourceGraphic'}
                                in2={'BackgroundImageFix'}
                                mode={'normal'}
                                result={'shape'}
                            />
                            <feColorMatrix
                                in={'SourceAlpha'}
                                result={'hardAlpha'}
                                type={'matrix'}
                                values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'}
                            />
                            <feOffset dx={'5'} dy={'-5'} />
                            <feGaussianBlur stdDeviation={'8'} />
                            <feComposite
                                in2={'hardAlpha'}
                                k2={'-1'}
                                k3={'1'}
                                operator={'arithmetic'}
                            />
                            <feColorMatrix
                                type={'matrix'}
                                values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'}
                            />
                            <feBlend
                                in2={'shape'}
                                mode={'normal'}
                                result={'effect1_innerShadow_8484_6844'}
                            />
                        </filter>
                    </defs>
                </svg>
            )}
        </>
    );
}
