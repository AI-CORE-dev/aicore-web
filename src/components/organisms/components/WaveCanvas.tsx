'use client';

import React, { useRef, useEffect } from 'react';

import styles from '../styles/wave-canvas.module.css';

export function WaveCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            /*console.error('Canvas element not found');*/
            return;
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
            /*console.error('Unable to get 2D context from canvas');*/
            return;
        }

        const wave = {
            y: canvas.height / 2,
            length: 0.01,
            amplitude: 50,
            frequency: 0.01,
        };
        let increment = wave.frequency;

        function animate() {
            if (!canvas || !ctx) {
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(0, canvas.height / 2);

            for (let i = 0; i < canvas.width; i++) {
                ctx.lineTo(
                    i,
                    wave.y +
                        Math.sin(i * wave.length + increment) *
                            wave.amplitude *
                            Math.sin(increment),
                );
            }

            ctx.lineTo(canvas.width, canvas.height);
            ctx.lineTo(0, canvas.height);

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
            ctx.fill();
            increment += wave.frequency;
            requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(animate as unknown as number);
    }, []);

    return <canvas ref={canvasRef} className={styles._canvas} />;
}
