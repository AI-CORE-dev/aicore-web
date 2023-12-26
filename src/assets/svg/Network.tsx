import React from 'react';

export function Network() {
    return (
        <div
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 0,
                height: '100%',
                width: '100%',
            }}
        >
            <svg height={'100%'} width={'100%'} xmlns={'http://www.w3.org/2000/svg'}>
                <g id={'lower-left-nodes'}>
                    <circle cx={'10%'} cy={'90%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'20%'} cy={'85%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'30%'} cy={'80%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'40%'} cy={'75%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'50%'} cy={'70%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'60%'} cy={'65%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'70%'} cy={'60%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'80%'} cy={'55%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'90%'} cy={'50%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'100%'} cy={'45%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'110%'} cy={'40%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'120%'} cy={'35%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'130%'} cy={'30%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'140%'} cy={'25%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'150%'} cy={'20%'} fill={'#d3d3d3'} r={'15'} />
                </g>

                <g id={'upper-right-nodes'}>
                    <circle cx={'80%'} cy={'20%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'85%'} cy={'15%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'90%'} cy={'10%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'95%'} cy={'5%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'100%'} cy={'1%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'105%'} cy={'3%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'110%'} cy={'7%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'115%'} cy={'12%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'120%'} cy={'17%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'125%'} cy={'22%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'130%'} cy={'27%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'135%'} cy={'32%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'140%'} cy={'37%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'145%'} cy={'42%'} fill={'#d3d3d3'} r={'15'} />
                    <circle cx={'150%'} cy={'47%'} fill={'#d3d3d3'} r={'15'} />
                </g>

                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'80%'}
                    x2={'85%'}
                    y1={'20%'}
                    y2={'15%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'85%'}
                    x2={'90%'}
                    y1={'15%'}
                    y2={'10%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'90%'}
                    x2={'95%'}
                    y1={'10%'}
                    y2={'5%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'95%'}
                    x2={'100%'}
                    y1={'5%'}
                    y2={'1%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'100%'}
                    x2={'105%'}
                    y1={'1%'}
                    y2={'3%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'105%'}
                    x2={'110%'}
                    y1={'3%'}
                    y2={'7%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'110%'}
                    x2={'115%'}
                    y1={'7%'}
                    y2={'12%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'115%'}
                    x2={'120%'}
                    y1={'12%'}
                    y2={'17%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'120%'}
                    x2={'125%'}
                    y1={'17%'}
                    y2={'22%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'125%'}
                    x2={'130%'}
                    y1={'22%'}
                    y2={'27%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'130%'}
                    x2={'135%'}
                    y1={'27%'}
                    y2={'32%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'135%'}
                    x2={'140%'}
                    y1={'32%'}
                    y2={'37%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'140%'}
                    x2={'145%'}
                    y1={'37%'}
                    y2={'42%'}
                />
                <line
                    stroke={'#808080'}
                    strokeWidth={'2'}
                    x1={'145%'}
                    x2={'150%'}
                    y1={'42%'}
                    y2={'47%'}
                />
            </svg>
        </div>
    );
}
