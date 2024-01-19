import type { IEmotion } from './interface';

export function EmotionValue1({ active }: IEmotion) {
    return (
        <>
            {active ? (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6859)'}>
                        <circle cx={'18'} cy={'18'} fill={'#F8D969'} r={'18'} />
                    </g>
                    <path
                        d={'M6.4375 14.6561L14.6661 12.3418'}
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={'M29.3203 14.6561L21.0917 12.3418'}
                        stroke={'#313036'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M24.171 27.771C24.171 24.3627 21.4079 21.5996 17.9996 21.5996C14.5912 21.5996 11.8281 24.3627 11.8281 27.771'
                        }
                        stroke={'#F05136'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <defs>
                        <filter
                            colorInterpolationFilters={'sRGB'}
                            filterUnits={'userSpaceOnUse'}
                            height={'41'}
                            id={'filter0_i_8484_6859'}
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
                                result={'effect1_innerShadow_8484_6859'}
                            />
                        </filter>
                    </defs>
                </svg>
            ) : (
                <svg fill={'none'} height={'36'} viewBox={'0 0 37 36'} width={'37'}>
                    <g filter={'url(#filter0_i_8484_6830)'}>
                        <circle cx={'18'} cy={'18'} fill={'#EBE9F2'} r={'18'} />
                    </g>
                    <path
                        d={'M6.4375 14.6561L14.6661 12.3418'}
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={'M29.3203 14.6561L21.0917 12.3418'}
                        stroke={'#595861'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <path
                        d={
                            'M24.171 27.771C24.171 24.3627 21.4079 21.5996 17.9996 21.5996C14.5912 21.5996 11.8281 24.3627 11.8281 27.771'
                        }
                        stroke={'#9896A5'}
                        strokeLinecap={'round'}
                        strokeWidth={'2'}
                    />
                    <defs>
                        <filter
                            colorInterpolationFilters={'sRGB'}
                            filterUnits={'userSpaceOnUse'}
                            height={'41'}
                            id={'filter0_i_8484_6830'}
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
                                values={'0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0'}
                            />
                            <feBlend
                                in2={'shape'}
                                mode={'normal'}
                                result={'effect1_innerShadow_8484_6830'}
                            />
                        </filter>
                    </defs>
                </svg>
            )}
        </>
    );
}
