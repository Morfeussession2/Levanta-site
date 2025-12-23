import { motion } from 'framer-motion';
import TiltedCard from '../ui/TiltedCard';

export function PlatformIntro() {
    return (
        <section id="platform" className="snap-start snap-proximity scroll-smooth w-full h-screen bg-[#05050A] flex flex-col items-center justify-center relative border-t border-white/5 overflow-visible">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-purple-600/5 blur-[160px] rounded-full animate-pulse" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 w-full h-full flex flex-col items-center justify-start pt-16 md:pt-10">
                {/* Main Visual Element: TiltedCard (Background Layer) */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-auto">
                    {/* Positioned lower as requested */}
                    <div className="mt-[50vh]">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 0.8, scale: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="w-full h-full shadow-[0_0_100px_rgba(168,85,247,0.15)] rounded-[20px]"
                        >
                            <TiltedCard
                                imageSrc="/apresentaLev.mp4"
                                altText="Plataforma Eleva"
                                captionText="Interface Eleva"
                                containerHeight="100%"
                                containerWidth="100%"
                                imageHeight="65vh"
                                imageWidth="1200px"
                                rotateAmplitude={6}
                                scaleOnHover={1.05}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={false}
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Text Content (Foreground Layer) */}
                <div className="relative z-10 text-center pointer-events-none flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="flex flex-col items-center mb-6">
                            <span className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 mb-6 leading-tight">
                                Apresentamos
                            </span>
                            <div className="relative">
                                <img
                                    className="w-48 md:w-60 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                                    src="/Eleva1_Prancheta 1.png"
                                    alt="Eleva Logo"
                                />
                                <div className="absolute -inset-4 bg-purple-500/10 blur-2xl rounded-full -z-10" />
                            </div>
                        </div>

                        <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                            Onde a <span className="text-white font-medium">criação</span> encontra a potência da <span className="text-white font-medium">gestão avançada</span>.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-20 w-64 h-64 bg-blue-500/5 blur-[100px] pointer-events-none"
            />
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-80 h-80 bg-pink-500/5 blur-[100px] pointer-events-none"
            />
        </section>
    );
}
