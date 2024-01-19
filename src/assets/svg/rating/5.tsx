import type { IEmotion } from './interface';

export function EmotionValue5({ active }: IEmotion) {
    return (
        <>
            {active ? (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6881)'}>
                        <circle cx={'18'} cy={'18'} fill={'#F8D969'} r={'18'} />
                    </g>
                    <path
                        d={
                            'M17.877 28.8008C21.7385 28.8008 24.9788 26.1409 25.8655 22.5533C26.1306 21.481 25.2101 20.5723 24.1056 20.5723H11.6484C10.5439 20.5723 9.62344 21.481 9.88848 22.5533C10.7752 26.1409 14.0155 28.8008 17.877 28.8008Z'
                        }
                        fill={'#F05136'}
                    />
                    <path
                        d={
                            'M21.481 14.4004C21.481 12.1281 23.2079 10.2861 25.3382 10.2861C27.4684 10.2861 29.1953 12.1281 29.1953 14.4004'
                        }
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M6.04353 14.4004C6.04353 12.1281 7.77043 10.2861 9.90067 10.2861C12.0309 10.2861 13.7578 12.1281 13.7578 14.4004'
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
                            id={'filter0_i_8484_6881'}
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
                                result={'effect1_innerShadow_8484_6881'}
                            />
                        </filter>
                    </defs>
                </svg>
            ) : (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6849)'}>
                        <circle cx={'18.875'} cy={'18'} fill={'#EBE9F2'} r={'18'} />
                    </g>
                    <path
                        d={
                            'M18.877 28.8008C22.7385 28.8008 25.9788 26.1409 26.8655 22.5533C27.1306 21.481 26.2101 20.5723 25.1056 20.5723H12.6484C11.5439 20.5723 10.6234 21.481 10.8885 22.5533C11.7752 26.1409 15.0155 28.8008 18.877 28.8008Z'
                        }
                        fill={'#9896A5'}
                    />
                    <path
                        d={
                            'M22.481 14.4004C22.481 12.1281 24.2079 10.2861 26.3382 10.2861C28.4684 10.2861 30.1953 12.1281 30.1953 14.4004'
                        }
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M7.04353 14.4004C7.04353 12.1281 8.77043 10.2861 10.9007 10.2861C13.0309 10.2861 14.7578 12.1281 14.7578 14.4004'
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
                            id={'filter0_i_8484_6849'}
                            width={'41'}
                            x={'0.875'}
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
                                result={'effect1_innerShadow_8484_6849'}
                            />
                        </filter>
                    </defs>
                </svg>
            )}
        </>
    );
}
