'use client';

import React, { useRef, useEffect } from 'react';

import styles from '../styles/wave-canvas.module.css';

export function WaveCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) {
            return;
        }

        const ctx = canvas.getContext('2d');

        if (!ctx) {
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

            ctx.strokeStyle = 'rgba(0, 128, 255, 0.5)'; // Color azul con opacidad
            ctx.fillStyle = 'rgba(0, 128, 255, 0.1)';
            ctx.fill();
            increment += wave.frequency;
            requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(animate as unknown as number);
    }, []);

    return <canvas ref={canvasRef} className={styles._canvas} />;
}
