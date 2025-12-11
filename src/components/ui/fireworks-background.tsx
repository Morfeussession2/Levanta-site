"use client";

import React, { useEffect, useRef } from "react";

interface FireworksBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
    population?: number;
    color?: string | string[];
    fireworkSpeed?: number | { min: number; max: number };
    fireworkSize?: number | { min: number; max: number };
    particleSpeed?: number | { min: number; max: number };
    particleSize?: number | { min: number; max: number };
    canvasProps?: React.ComponentProps<"canvas">;
}

export function FireworksBackground({
    population = 1,
    color,
    fireworkSpeed = { min: 4, max: 8 },
    fireworkSize = { min: 2, max: 5 },
    particleSpeed = { min: 2, max: 7 },
    particleSize = { min: 1, max: 5 },
    canvasProps,
    className,
    ...props
}: FireworksBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const colors = Array.isArray(color)
            ? color
            : color
                ? [color]
                : ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];

        const getRandom = (value: number | { min: number; max: number }) => {
            if (typeof value === "number") return value;
            return Math.random() * (value.max - value.min) + value.min;
        };

        class Particle {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
            color: string;
            alpha: number;
            decay: number;

            constructor(x: number, y: number, color: string) {
                this.x = x;
                this.y = y;
                const speed = getRandom(particleSpeed);
                const angle = Math.random() * Math.PI * 2;
                this.vx = Math.cos(angle) * speed;
                this.vy = Math.sin(angle) * speed;
                this.size = getRandom(particleSize);
                this.color = color;
                this.alpha = 1;
                this.decay = Math.random() * 0.02 + 0.01;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.1; // gravity
                this.alpha -= this.decay;
            }

            draw(ctx: CanvasRenderingContext2D) {
                ctx.save();
                ctx.globalAlpha = this.alpha;
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }
        }

        class Firework {
            x: number;
            y: number;
            targetY: number;
            speed: number;
            size: number;
            color: string;
            exploded: boolean;
            particles: Particle[];

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height;
                this.targetY = Math.random() * (canvas.height * 0.5) + canvas.height * 0.1;
                this.speed = getRandom(fireworkSpeed);
                this.size = getRandom(fireworkSize);
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.exploded = false;
                this.particles = [];
            }

            update() {
                if (!this.exploded) {
                    this.y -= this.speed;
                    if (this.y <= this.targetY) {
                        this.explode();
                    }
                } else {
                    this.particles = this.particles.filter((p) => p.alpha > 0);
                    this.particles.forEach((p) => p.update());
                }
            }

            explode() {
                this.exploded = true;
                const particleCount = 50 + Math.random() * 50;
                for (let i = 0; i < particleCount; i++) {
                    this.particles.push(new Particle(this.x, this.y, this.color));
                }
            }

            draw(ctx: CanvasRenderingContext2D) {
                if (!this.exploded) {
                    ctx.fillStyle = this.color;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    this.particles.forEach((p) => p.draw(ctx));
                }
            }

            isDead() {
                return this.exploded && this.particles.length === 0;
            }
        }

        const fireworks: Firework[] = [];

        const animate = () => {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Add new fireworks
            if (fireworks.length < population && Math.random() < 0.05) {
                fireworks.push(new Firework());
            }

            // Update and draw fireworks
            for (let i = fireworks.length - 1; i >= 0; i--) {
                fireworks[i].update();
                fireworks[i].draw(ctx);
                if (fireworks[i].isDead()) {
                    fireworks.splice(i, 1);
                }
            }

            requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [population, color, fireworkSpeed, fireworkSize, particleSpeed, particleSize]);

    return (
        <div className={className} {...props}>
            <canvas ref={canvasRef} className="w-full h-full" {...canvasProps} />
        </div>
    );
}
