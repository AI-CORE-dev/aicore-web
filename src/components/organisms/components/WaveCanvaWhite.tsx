import React, { useRef, useEffect } from 'react';

import styles from '../styles/wave-canvas.module.css';

export function WaveCanvasWhite() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    function linearInterpolation(a: number, b: number, t: number) {
        return a + (b - a) * t;
    }
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
            amplitude: 5,
            frequency: 0.05,
            direction: 1,
        };
        let increment = wave.frequency;

        function animate() {
            if (!canvas || !ctx) {
                return;
            }

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.beginPath();
            ctx.moveTo(0, wave.y);

            for (let i = 0; i < canvas.width; i++) {
                const x = i + wave.direction * 5;

                const y = linearInterpolation(wave.y, wave.y + wave.amplitude, i / canvas.width);

                if (y < 0 || y > canvas.height) {
                    wave.direction *= -1;
                }

                ctx.lineTo(x, y);
            }

            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.strokeStyle = 'white';
            ctx.lineWidth = 1;
            ctx.setLineDash([1, 1]);
            ctx.fill();
            increment += wave.frequency;
            requestAnimationFrame(animate);
        }

        animate();

        return () => cancelAnimationFrame(animate as unknown as number);
    }, []);

    return <canvas ref={canvasRef} className={styles._canvas_white} />;
}
