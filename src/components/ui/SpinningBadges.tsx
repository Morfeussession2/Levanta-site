import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Badge {
    title: string;
    icon: string;
    color: string;
}

interface SpinningBadgesProps {
    badges: Badge[];
}

export default function SpinningBadges({ badges }: SpinningBadgesProps) {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 1) % 360); // Velocidade mais rápida
        }, 30); // Intervalo menor = mais fluido

        return () => clearInterval(interval);
    }, []);

    // Configuração dos 3 anéis com velocidades BEM diferentes
    const orbitConfig = [
        { radius: 120, size: 'w-16 h-16', iconSize: 'text-2xl', speed: 1.5, badges: badges.slice(0, 2) },     // Anel 1 - RÁPIDO
        { radius: 200, size: 'w-20 h-20', iconSize: 'text-3xl', speed: 1.0, badges: badges.slice(2, 4) },     // Anel 2 - MÉDIO
        { radius: 280, size: 'w-24 h-24', iconSize: 'text-4xl', speed: 0.5, badges: badges.slice(4, 7) },     // Anel 3 - LENTO
    ];

    return (
        <div className="relative w-full h-full flex items-center justify-center">
            {/* Os 3 anéis */}
            {orbitConfig.map((orbit, index) => (
                <div
                    key={`ring-${index}`}
                    className="absolute rounded-full border border-white/5"
                    style={{
                        width: `${orbit.radius * 2}px`,
                        height: `${orbit.radius * 2}px`,
                    }}
                />
            ))}

            {/* Pontos decorativos nas órbitas */}
            {orbitConfig.map((orbit, orbitIndex) => (
                [...Array(Math.floor(orbit.radius / 10))].map((_, i) => {
                    const angle = (360 / Math.floor(orbit.radius / 10)) * i;
                    const x = Math.cos((angle * Math.PI) / 180) * orbit.radius;
                    const y = Math.sin((angle * Math.PI) / 180) * orbit.radius;
                    return (
                        <motion.div
                            key={`dot-${orbitIndex}-${i}`}
                            className="absolute w-0.5 h-0.5 rounded-full bg-blue-400/10"
                            style={{
                                left: '50%',
                                top: '50%',
                                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
                            }}
                        />
                    );
                })
            ))}

            {/* Centro - Logo */}
            <motion.div
                className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden"
                animate={{
                    rotate: rotation * 0.5,
                }}
                transition={{ duration: 0, ease: "linear" }}
            >
                {/* Anel interno girando */}
                <div className="relative z-10 text-xl"></div>
            </motion.div>

            {/* Linha colorida CURVA percorrendo anel 1 (AZUL) */}
            <motion.div
                className="absolute"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{
                    rotate: rotation * orbitConfig[2].speed,
                }}
                transition={{ duration: 0, ease: "easeInOut" }}
            >
                <svg
                    width={orbitConfig[0].radius * 2}
                    height={orbitConfig[0].radius * 2}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                    <defs>
                        <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(96, 165, 250)" stopOpacity="0" />
                            <stop offset="50%" stopColor="rgb(96, 165, 250)" stopOpacity="1" />
                            <stop offset="100%" stopColor="rgb(96, 165, 250)" stopOpacity="0" />
                        </linearGradient>
                        <filter id="blue-glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <path
                        d={`M ${orbitConfig[0].radius} 0 A ${orbitConfig[0].radius} ${orbitConfig[0].radius} 0 0 1 ${orbitConfig[0].radius * 2} ${orbitConfig[0].radius}`}
                        fill="none"
                        stroke="url(#blue-gradient)"
                        strokeWidth="2"
                        filter="url(#blue-glow)"
                    />
                </svg>
            </motion.div>

            {/* Linha colorida CURVA percorrendo anel 2 (ROXA) */}
            <motion.div
                className="absolute"
                style={{
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
                animate={{
                    rotate: rotation * orbitConfig[2].speed + 200,
                }}
                transition={{ duration: 0, ease: "linear" }}
            >
                <svg
                    width={orbitConfig[1].radius * 2}
                    height={orbitConfig[1].radius * 2}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                >
                    <defs>
                        <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgb(192, 132, 252)" stopOpacity="0" />
                            <stop offset="50%" stopColor="rgb(192, 132, 252)" stopOpacity="1" />
                            <stop offset="100%" stopColor="rgb(192, 132, 252)" stopOpacity="0" />
                        </linearGradient>
                        <filter id="purple-glow">
                            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>
                    <path
                        d={`M ${orbitConfig[1].radius} 0 A ${orbitConfig[1].radius} ${orbitConfig[1].radius} 0 0 1 ${orbitConfig[1].radius * 2} ${orbitConfig[1].radius}`}
                        fill="none"
                        stroke="url(#purple-gradient)"
                        strokeWidth="2"
                        filter="url(#purple-glow)"
                    />
                </svg>
            </motion.div>

            {/* Badges circulares em cada anel */}
            {orbitConfig.map((orbit, orbitIndex) =>
                orbit.badges.map((badge, badgeIndex) => {
                    // Distribuir badges uniformemente no anel
                    const angleOffset = (360 / orbit.badges.length) * badgeIndex;
                    const angle = (rotation * orbit.speed + angleOffset) * (Math.PI / 180);
                    const x = Math.cos(angle) * orbit.radius;
                    const y = Math.sin(angle) * orbit.radius;

                    return (
                        <motion.div
                            key={`badge-${orbitIndex}-${badgeIndex}`}
                            className="absolute"
                            style={{
                                left: '50%',
                                top: '50%',
                                x: x,
                                y: y,
                                translateX: '-50%',
                                translateY: '-50%',
                            }}
                        >
                            {/* Badge circular */}
                            <div className={`
                                ${orbit.size}
                                rounded-full
                                ${badge.color}
                                backdrop-blur-xl
                                border border-white/10
                                shadow-xl
                                flex items-center justify-center
                                transition-all duration-300
                            `}>
                                {/* Icon */}
                                <span className={orbit.iconSize}>{badge.icon}</span>
                            </div>

                            {/* Glow sutil */}
                            <div className={`
                                absolute inset-0 rounded-full
                                ${badge.color}
                                blur-lg opacity-40
                                -z-10
                            `} />
                        </motion.div>
                    );
                })
            )}
        </div>
    );
}
