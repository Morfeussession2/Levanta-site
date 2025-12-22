import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

function ImageGallery({ images, name }: { images: string[], name: string }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    if (!images || images.length === 0) return null;

    return (
        <div className="relative w-full group overflow-hidden bg-black/50 rounded-2xl border border-white/10">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`${name} case ${currentIndex + 1}`}
                        className="w-full h-auto block"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => {
                            e.stopPropagation();
                            setCurrentIndex(i);
                        }}
                        className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                    }}
                    className="p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex((prev) => (prev + 1) % images.length);
                    }}
                    className="p-2 rounded-full bg-black/20 backdrop-blur-md border border-white/10 text-white hover:bg-black/40 transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Info Overlay */}
            <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />
        </div>
    );
}

interface Company {
    id: string;
    name: string;
    logo: string;
    description: string;
    service: string;
    images: string[];
    color: string;
    linksite: string;
    cardBg?: string;    // Custom background for the carousel card
    logoHeight?: string; // Custom height for the logo (e.g., 'h-16 md:h-24')
}

const companies: Company[] = [
    {
        id: '1',
        name: 'Costa Das Palmeiras',
        logo: '/costa.png',
        description: 'Desenvolvemos o website oficial da associação, proporcionando um espaço moderno e acessível para seus moradores. Além do site institucional, criamos um portal de notícias dinâmico, permitindo que a comunidade acompanhe atualizações, eventos e comunicados de forma prática e organizada.',
        service: 'Site institucional',
        images: [
            '/costa1.png',
            '/costa2.png'
        ],
        color: 'from-green-500 to-green-400',
        linksite: 'https://costadaspalmeiras.com.br',
        cardBg: 'bg-green-500/10',
        logoHeight: 'h-24 md:h-24'
    },
    {
        id: '2',
        name: 'Herdeiros Store',
        logo: '/herdeiros.png',
        description: 'Desenvolvemos um projeto completo para a empresa, incluindo a criação de um site moderno e um e-commerce totalmente integrado à Nuvemshop. Criamos um layout personalizado, pensado para proporcionar a melhor experiência ao usuário, além de uma área de controle e gestão de estoque robusta, com emissão de relatórios detalhados e acompanhamento de custos, garantindo eficiência e praticidade na operação do negócio.',
        service: 'E-commerce',
        images: [
            '/herdeiros1.png',
            '/herdeiros2.png',
            '/herdeiros3.png'
        ],
        color: 'from-yellow-500 to-yellow-400',
        linksite: 'https://www.herdeiros.store/',
        cardBg: 'bg-yellow-400/20',
        logoHeight: 'h-20 md:h-20'
    },
    {
        id: '3',
        name: 'Claro Musica',
        logo: '/logo-claro.png',
        description: 'Atuamos nos testes de performance e interface (UI) do aplicativo Claro Música, acompanhando de perto o desenvolvimento de novas features e garantindo a qualidade da experiência do usuário. Nossas principais atividades incluíram: Testes funcionais e de performance durante o desenvolvimento de novas funcionalidades.Testes de interface (UI) para garantir consistência visual e usabilidade. Execução e análise de testes em dispositivos mobile reais e simuladores, utilizando Xcode (iOS) e Android Studio (Android). Criação e mapeamento de casos de teste, documentação de resultados e reporte de bugs para a equipe de desenvolvimento. Colaboração com desenvolvedores e designers para ajustes rápidos e eficazes antes de cada release. Resultados: Identificação e correção de falhas críticas antes da publicação, evitando impactos na base de usuários Melhoria na estabilidade e responsividade do aplicativo em múltiplos dispositivos e sistemas operacionais. Obs: Nas imagens, dados sensíveis foram borrados.',
        service: 'Testes de Performance e Interface',
        images: [
            'claro1.jpeg',
            'claro2.jpeg'
        ],
        color: 'from-red-500 to-red-400',
        linksite: 'https://www.claro.com.br',
        cardBg: 'bg-red-500/10',
        logoHeight: 'h-24 md:h-24'
    },
    {
        id: '4',
        name: 'Nest Rental',
        logo: 'nest.svg',
        description: 'A Nest é uma empresa inovadora no setor de aluguel de máquinas, que busca oferecer soluções completas para a gestão eficiente de seus equipamentos. Desenvolvemos para a empresa um website moderno e funcional, um sistema de integração para aluguel de máquinas que conecta clientes e operações de forma prática, e um sistema de gerenciamento das máquinas, permitindo controle total sobre estoque, disponibilidade e manutenção. Com essas soluções, a Nest otimiza seus processos, melhora a experiência dos clientes e aumenta a eficiência operacional.',
        service: 'Site institucional e aluguel de máquinas',
        images: [
            'nest1.png',
            'nest2.png'
        ],
        color: 'from-blue-500 to-blue-400',
        linksite: 'https://alugue.nestrental.com.br/',
        cardBg: 'bg-blue-500/20',
        logoHeight: 'h-24 md:h-24'
    },
    {
        id: '5',
        name: 'Audita Company',
        logo: 'audita.png',
        description: 'Desenvolvemos o website completo da Audita Company, criando também landing pages personalizadas para seus anúncios digitais, com layout focado em conversão e experiência do usuário. Criamos também uma área administrativa para gestão do site.',
        service: 'Site institucional e landing pages',
        images: [
            'audita1.png',
            'audita2.png'
        ],
        color: 'from-yellow-500 to-yellow-400',
        linksite: 'https://www.auditacompany.com.br/',
        cardBg: 'bg-yellow-500/10',
        logoHeight: 'h-24 md:h-24'
    }
];

export function TrustedBy() {
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Triple the array to ensure smooth infinite loop
    const displayCompanies = [...companies, ...companies, ...companies];

    return (
        <section className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden snap-start border-t border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-600/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16 text-center w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6">
                        Empresas que confiam
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Parcerias estratégicas que impulsionam a inovação e o crescimento digital.
                    </p>
                </motion.div>
            </div>

            {/* Carousel Container */}
            <div
                className="relative flex items-center overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-black to-transparent z-20" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-black to-transparent z-20" />

                <motion.div
                    className="flex gap-12 whitespace-nowrap py-10"
                    animate={{
                        x: [0, "-33.33%"],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: isHovered ? 60 : 25,
                            ease: "linear",
                        },
                    }}
                >
                    {displayCompanies.map((company, index) => (
                        <motion.div
                            key={`${company.id}-${index}`}
                            className="flex-shrink-0 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setSelectedCompany(company)}
                        >
                            <div className={`relative group p-5 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 flex flex-col items-center justify-center ${company.cardBg || 'bg-white/5'}`}>
                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />
                                <img
                                    src={company.logo}
                                    alt={company.name}
                                    className={`${company.logoHeight || 'h-16 md:h-24'} w-auto grayscale group-hover:grayscale-0 transition-all duration-500 object-contain brightness-200`}
                                />
                                {/* <div className="mt-2 text-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span className="text-xs font-mono uppercase tracking-widest text-purple-400">Ver Case</span>
                                </div> */}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedCompany && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-6 bg-black/90 backdrop-blur-xl"
                        onClick={() => setSelectedCompany(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-[1120px] bg-[#0A0A0F] border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedCompany(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors z-30"
                            >
                                <X size={20} />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                                {/* Info Side */}
                                <div className="p-8 md:p-12 flex flex-col justify-between">
                                    <div>
                                        <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${selectedCompany.color} text-black text-xs font-bold uppercase mb-6 tracking-widest`}>
                                            {selectedCompany.service}
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                            {selectedCompany.name}
                                        </h3>
                                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8">
                                            {selectedCompany.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4">
                                        <a href={selectedCompany.linksite} target="_blank" className="flex items-center justify-center gap-2 group p-4 rounded-xl bg-white text-black font-bold transition-all hover:bg-purple-500 hover:text-white">
                                            Visitar Site <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                {/* Images Side */}
                                <div className="relative p-6 md:p-12 md:pl-0 flex items-center justify-center">
                                    <ImageGallery images={selectedCompany.images} name={selectedCompany.name} />
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
