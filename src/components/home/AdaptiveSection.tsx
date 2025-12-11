import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type Service = {
    title: string;
    description: string;
    items: string[];
};

const services: Service[] = [
    {
        title: "Desenvolvimento Web",
        description:
            "Sites e sistemas web modernos, responsivos e otimizados para performance.",
        items: ["React/Vue", "E-commerce", "CRM", "ERP", "SEO Otimizado", "CI/CD"],
    },
    {
        title: "Aplicativos Mobile",
        description:
            "Apps nativos e híbridos para iOS e Android com experiência excepcional.",
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
        items: [
            "Arquitetura",
            "Code Review",
            "Desenvolvimento",
            "Roadmap",
            "Testes Automatizados",
        ],
    },
];

type CardProps = {
    service: Service;
    index: number;
    progress: any;
    range: number[];
    targetScale: number;
};

function ServiceCard({ service, index, progress, range, targetScale }: CardProps) {
    const scale = useTransform(progress, range, [1, targetScale]);
    const opacity = useTransform(
        progress,
        [range[0] - 0.1, range[0], range[1] - 0.1, range[0]],
        [0.3, 1, 1, 0.9]
    );

    return (
        <div
            className="h-[64vh] flex items-center justify-center sticky"
            style={{
                top: `calc(10% + ${index * 20}px)`,
            }}
        >
            <motion.div
                style={{
                    scale,
                    opacity,
                }}
                className="group relative w-full max-w-lg h-[450px] md:h-[500px] overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 backdrop-blur-xl p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.9)] hover:border-purple-400/80 hover:shadow-[0_0_80px_rgba(168,85,247,0.4)] transition-all duration-500"
            >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

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
                            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse flex-shrink-0" />
                            <span className="group-hover:text-white transition-colors duration-300">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                <motion.div
                    className="pointer-events-none absolute inset-0"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute -inset-10 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 blur-3xl" />
                </motion.div>

                <motion.div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/30 rounded-3xl"
                    style={{ opacity }}
                />
            </motion.div>
        </div>
    );
}

export function AdaptiveSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        container: scrollContainerRef,
    });

    return (
        <section
            id="adapt"
            className="w-full h-screen bg-[#05050A] relative snap-start border-t border-white/5 overflow-hidden"
        >
            <style>{`
                .invisible-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .invisible-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {/* Fundos fixos (absolute dentro da section) */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />
            <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500/40 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />
            <div className="absolute -bottom-24 -right-10 w-64 h-64 bg-blue-500/30 blur-3xl rounded-full opacity-60 pointer-events-none z-0" />

            {/* Container scrollável */}
            <div
                ref={scrollContainerRef}
                className="invisible-scrollbar absolute inset-0 overflow-y-auto overflow-x-hidden"
            >
                <div className="flex flex-col md:flex-row">
                    {/* Lado Esquerdo: Stack de Cards (scrolla) */}
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
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Espaçador para o lado direito fixo */}
                    <div className="w-full md:w-1/2" style={{ height: `${services.length * 70}vh` }} />
                </div>
            </div>

            {/* Lado Direito: Conteúdo de Texto (absolute dentro da section) */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full flex items-center justify-center p-8 md:p-20 z-20 pointer-events-none">
                <div className="max-w-xl pointer-events-auto">
                    <motion.h2
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6 leading-tight"
                    >
                        Nossos Serviços
                    </motion.h2>

                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-gray-300 leading-relaxed"
                    >
                        Oferecemos soluções completas em tecnologia para empresas que buscam
                        inovação e crescimento sustentável.
                    </motion.p>

                    <motion.p
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="mt-4 text-sm md:text-base text-gray-400 max-w-lg"
                    >
                        Da criação de interfaces modernas ao desenvolvimento contínuo e
                        manutenção de sistemas, a Levanta cuida de toda a jornada digital
                        da sua empresa com foco em performance, experiência do usuário e
                        escalabilidade.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
