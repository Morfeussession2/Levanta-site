import React, { useMemo, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

type Service = {
    title: string;
    description: string;
    items: string[];
};

const services: Service[] = [
    {
        title: "Desenvolvimento Web",
        description: "Sites e sistemas web modernos, responsivos e otimizados para performance.",
        items: ["React/Vue", "E-commerce", "CRM", "ERP", "SEO Otimizado", "CI/CD"],
    },
    {
        title: "Aplicativos Mobile",
        description: "Apps nativos e híbridos para iOS e Android com experiência excepcional.",
        items: ["React Native", "Flutter", "UI/UX Design", "CI/CD"],
    },
    {
        title: "Design",
        description:
            "Criação de identidade visual, layout e design focado na melhor experiência do usuário.",
        items: ["Figma", "UI/UX", "Monitoramento"],
    },
    {
        title: "Manutenção",
        description:
            "Melhorias, testes e continuidade de desenvolvimento de sistemas e projetos já existentes.",
        items: ["Arquitetura", "Code Review", "Desenvolvimento", "Roadmap", "Testes Automatizados"],
    },
];

type CardProps = {
    service: Service;
    index: number;
    progress: any;
    range: number[];
    targetScale: number;
    lowPower: boolean;
};

function ServiceCard({ service, index, progress, range, targetScale, lowPower }: CardProps) {
    // Quando lowPower=true, "congela" as transforms (sem scrub por scroll).
    const scale = useTransform(progress, range, lowPower ? [1, 1] : [1, targetScale]);
    const opacity = useTransform(
        progress,
        [range[0] - 0.1, range[0], range[1] - 0.1, range[1]],
        lowPower ? [1, 1, 1, 1] : [0.6, 1, 1, 0.9]
    );

    const cardClassName = useMemo(() => {
        // Versão leve: sem backdrop-blur, sombras menores, hover mais simples.
        if (lowPower) {
            return [
                "group relative w-full max-w-lg h-[430px] md:h-[480px] overflow-hidden rounded-3xl",
                "border border-white/10 bg-slate-900/85 p-6 md:p-8 shadow-xl",
                "transition-colors duration-200 hover:border-purple-400/60",
            ].join(" ");
        }

        // Versão normal (ainda otimizada vs original): sem backdrop blur forte e sem mega sombras.
        return [
            "group relative w-full max-w-lg h-[450px] md:h-[500px] overflow-hidden rounded-3xl",
            "border border-white/15 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6 md:p-8",
            "shadow-2xl transition-all duration-300 hover:border-purple-400/70",
        ].join(" ");
    }, [lowPower]);

    return (
        <div
            className="h-[64vh] flex items-center justify-center sticky"
            style={{ top: `calc(10% + ${index * 20}px)` }}
        >
            <motion.div style={{ scale, opacity }} className={cardClassName}>
                {/* Linha superior (barata) */}
                {!lowPower && (
                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />
                )}

                <div className="flex items-start gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                            {service.title}
                        </h3>
                        <p className="mt-3 text-base md:text-lg text-gray-200 leading-relaxed">
                            {service.description}
                        </p>
                    </div>
                </div>

                <ul className="mt-6 space-y-3 text-base md:text-lg text-gray-200">
                    {service.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-gray-200">
                            {/* Removido animate-pulse (custinho constante). */}
                            <span className="h-2 w-2 rounded-full bg-purple-400 flex-shrink-0" />
                            <span className={!lowPower ? "group-hover:text-white transition-colors" : ""}>
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* Removidos overlays com blur e hover glow (caros). */}
                {!lowPower && (
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/25 rounded-3xl opacity-70" />
                )}
            </motion.div>
        </div>
    );
}

export function AdaptiveSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Se o usuário/OS pedir menos movimento, ativamos modo leve automaticamente.
    const reducedMotion = useReducedMotion();
    const lowPower = reducedMotion; // pode expandir depois p/ um toggle manual também. [web:21][web:27]

    const { scrollYProgress } = useScroll({
        container: scrollContainerRef,
    });

    return (
        <section
            id="servicos"
            className="w-full min-h-screen bg-[#05050A] relative snap-start border-t border-white/5 py-20 md:py-0 md:h-screen md:overflow-hidden"
        >
            <style>{`
        .invisible-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .invisible-scrollbar::-webkit-scrollbar {
          display: none;
        }
        @media (prefers-reduced-motion: reduce) {
          .reduce-motion * {
            scroll-behavior: auto !important;
          }
        }
      `}</style>

            {/* Fundos fixos (otimizados) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />

            {/* Orbs: sem blur no modo leve */}
            {!lowPower ? (
                <>
                    <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500/30 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />
                    <div className="absolute -bottom-24 -right-10 w-64 h-64 bg-blue-500/25 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />
                </>
            ) : (
                <>
                    <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-500/12 rounded-full opacity-60 pointer-events-none z-0" />
                    <div className="absolute -bottom-28 -right-20 w-80 h-80 bg-blue-500/10 rounded-full opacity-60 pointer-events-none z-0" />
                </>
            )}

            {/* Mobile Layout - Text First, Cards Below */}
            <div className="md:hidden relative z-10 px-4 mt-20">
                {/* Texto no topo (mobile) */}
                <div className="mb-8">
                    <motion.h2
                        initial={lowPower ? { opacity: 1, x: 0 } : { x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={lowPower ? { duration: 0 } : { duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-4 leading-tight"
                    >
                        Nossos Serviços
                    </motion.h2>

                    <motion.p
                        initial={lowPower ? { opacity: 1, x: 0 } : { x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={lowPower ? { duration: 0 } : { duration: 0.5, delay: 0.08 }}
                        viewport={{ once: true }}
                        className="text-sm text-gray-300 leading-relaxed mb-3"
                    >
                        Oferecemos soluções completas em tecnologia para empresas que buscam inovação e
                        crescimento sustentável.
                    </motion.p>

                    <motion.p
                        initial={lowPower ? { opacity: 1, x: 0 } : { x: -60, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={lowPower ? { duration: 0 } : { duration: 0.5, delay: 0.16 }}
                        viewport={{ once: true }}
                        className="text-xs text-gray-400"
                    >
                        Da criação de interfaces modernas ao desenvolvimento contínuo e manutenção de sistemas,
                        a Levanta cuida de toda a jornada digital da sua empresa com foco em performance,
                        experiência do usuário e escalabilidade.
                    </motion.p>
                </div>

                {/* Cards abaixo (mobile) - Horizontal Scroll com Drag */}
                <div className="relative -mx-4">
                    <motion.div
                        className="flex gap-4 px-4 cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: -((services.length - 1) * 320), right: 0 }}
                        dragElastic={0.1}
                        dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    >
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative flex-shrink-0 w-[300px] h-auto overflow-hidden rounded-2xl border border-white/15 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 shadow-xl"
                            >
                                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60" />

                                <div className="flex items-start gap-3">
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white tracking-wide">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-gray-200 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                                <ul className="mt-4 space-y-2 text-sm text-gray-200">
                                    {service.items.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-gray-200">
                                            <span className="h-1.5 w-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Scroll Indicator */}

                </div>
            </div>

            {/* Desktop Layout - Original Scroll Effect */}
            <div className="hidden md:block">
                {/* Container scrollável */}
                <div
                    ref={scrollContainerRef}
                    className={`invisible-scrollbar absolute inset-0 overflow-y-auto ${lowPower ? "reduce-motion" : ""
                        }`}
                >
                    <div className="flex flex-col md:flex-row">
                        {/* Lado Esquerdo: Cards */}
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative z-10 py-10 px-4">
                                {services.map((service, index) => {
                                    const targetScale = 1 - (services.length - index) * 0.05;
                                    const range = [index * 0.25, (index + 1) * 0.25];

                                    return (
                                        <ServiceCard
                                            key={service.title}
                                            service={service}
                                            index={index}
                                            progress={scrollYProgress}
                                            range={range}
                                            targetScale={targetScale}
                                            lowPower={lowPower}
                                        />
                                    );
                                })}
                            </div>
                        </div>

                        {/* Espaçador do lado direito */}
                        <div className="w-full md:w-1/2" style={{ height: `${services.length * 70}vh` }} />
                    </div>
                </div>

                {/* Lado Direito: Texto fixo (reduzido no modo leve) */}
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-20 z-20 pointer-events-none">
                    <div className="max-w-xl pointer-events-auto">
                        <motion.h2
                            initial={lowPower ? { opacity: 1, x: 0 } : { x: 60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={lowPower ? { duration: 0 } : { duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6 leading-tight"
                        >
                            Nossos Serviços
                        </motion.h2>

                        <motion.p
                            initial={lowPower ? { opacity: 1, x: 0 } : { x: 60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={lowPower ? { duration: 0 } : { duration: 0.5, delay: 0.08 }}
                            viewport={{ once: true }}
                            className="text-lg md:text-xl text-gray-300 leading-relaxed"
                        >
                            Oferecemos soluções completas em tecnologia para empresas que buscam inovação e
                            crescimento sustentável.
                        </motion.p>

                        <motion.p
                            initial={lowPower ? { opacity: 1, x: 0 } : { x: 60, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={lowPower ? { duration: 0 } : { duration: 0.5, delay: 0.16 }}
                            viewport={{ once: true }}
                            className="mt-4 text-sm md:text-base text-gray-400 max-w-lg"
                        >
                            Da criação de interfaces modernas ao desenvolvimento contínuo e manutenção de sistemas,
                            a Levanta cuida de toda a jornada digital da sua empresa com foco em performance,
                            experiência do usuário e escalabilidade.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
