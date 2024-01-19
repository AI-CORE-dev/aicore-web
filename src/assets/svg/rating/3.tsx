import type { IEmotion } from './interface';

export function EmotionValue3({ active }: IEmotion) {
    return (
        <>
            {active ? (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6865)'}>
                        <circle cx={'18'} cy={'18'} fill={'#F8D969'} r={'18'} />
                    </g>
                    <path
                        d={'M10.7266 12.8574V15.686'}
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'4'}
                    />
                    <path
                        d={'M26.1562 12.8574V15.686'}
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'4'}
                    />
                    <path
                        d={'M13.2891 25.7129L23.8319 25.7129'}
                        stroke={'#F05136'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <defs>
                        <filter
                            colorInterpolationFilters={'sRGB'}
                            filterUnits={'userSpaceOnUse'}
                            height={'41'}
                            id={'filter0_i_8484_6865'}
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
                                result={'effect1_innerShadow_8484_6865'}
                            />
                        </filter>
                    </defs>
                </svg>
            ) : (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6825)'}>
                        <circle cx={'18.4375'} cy={'18'} fill={'#EBE9F2'} r={'18'} />
                    </g>
                    <path
                        d={'M10.7266 12.8574V15.686'}
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'4'}
                    />
                    <path
                        d={'M26.1562 12.8574V15.686'}
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'4'}
                    />
                    <path
                        d={'M13.2891 25.7129L23.8319 25.7129'}
                        stroke={'#9896A5'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <defs>
                        <filter
                            colorInterpolationFilters={'sRGB'}
                            filterUnits={'userSpaceOnUse'}
                            height={'41'}
                            id={'filter0_i_8484_6825'}
                            width={'41'}
                            x={'0.4375'}
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
                                result={'effect1_innerShadow_8484_6825'}
                            />
                        </filter>
                    </defs>
                </svg>
            )}
        </>
    );
}
