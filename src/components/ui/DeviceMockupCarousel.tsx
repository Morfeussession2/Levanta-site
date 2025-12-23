import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { ChevronUp, ChevronDown, Pause, Play } from "lucide-react";

interface DeviceSlide {
    id: string;
    title: string;
    description: string;
    video: string;
}

const slides: DeviceSlide[] = [
    {
        id: "1",
        title: "Dashboard Personalizada",
        description: "Personalize do seu jeito para otimizar seus processos.",
        video: "/Dashboard.mp4",
    },
    {
        id: "2",
        title: "Métricas detalhadas",
        description: "Veja as métricas de vendas e clientes em tempo real.",
        video: "/metricas.mp4",
    },
    {
        id: "3",
        title: "Edição de Conteúdo",
        description: "Edite o seu conteúdo do jeito que quiser com poucos cliques.",
        video: "/conteudo.mp4",
    },
    {
        id: "4",
        title: "Categorização de Produtos",
        description: "Categorize seus produtos de forma intuitiva e eficiente.",
        video: "/categorias.mp4",
    },
];

const AUTO_SCROLL_INTERVAL = 4000;

function cn(...classes: (string | boolean | undefined)[]) {
    return classes.filter(Boolean).join(' ');
}

export function DeviceMockupCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    const [aspectRatio, setAspectRatio] = useState(16 / 9);

    const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
        const { videoWidth, videoHeight } = e.currentTarget;
        setAspectRatio(videoWidth / videoHeight);
    };

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
        setProgress(0);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        setProgress(0);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setProgress(0);
    }, []);

    const toggleAutoPlay = useCallback(() => {
        setIsAutoPlaying((prev) => !prev);
        setProgress(0);
    }, []);

    // Auto-scroll functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    nextSlide();
                    return 0;
                }
                return prev + 100 / (AUTO_SCROLL_INTERVAL / 50);
            });
        }, 50);

        return () => clearInterval(interval);
    }, [isAutoPlaying, nextSlide]);

    const currentSlide = slides[currentIndex];

    return (
        <div className="relative flex items-center gap-6 md:gap-10">
            {/* Left - Vertical Progress Indicator */}
            <div className="flex flex-col items-center gap-3">
                {/* Vertical line with progress */}
                <div className="relative w-0.5 h-40 md:h-52 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-400 via-blue-400 to-pink-400 transition-all duration-100 ease-linear rounded-full"
                        style={{
                            height: `${((currentIndex + progress / 100) / slides.length) * 100}%`,
                        }}
                    />
                </div>
                {/* Dots */}
                <div className="flex flex-col gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={cn(
                                "w-2 h-2 rounded-full transition-all duration-300",
                                index === currentIndex
                                    ? "bg-purple-400 scale-125 shadow-lg shadow-purple-400/50"
                                    : "bg-white/20 hover:bg-white/40"
                            )}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>

            </div>

            {/* Center - Device Mockup (Polaroid Style) */}
            <div className="relative">
                {/* Polaroid Frame */}
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-[2rem] md:rounded-[2.5rem] p-2 md:p-3 pb-20 md:pb-24 shadow-2xl border border-white/10">
                    {/* Camera notch area */}
                    <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-slate-700/80" />

                    {/* Screen / Image Area */}
                    <motion.div
                        layout
                        animate={{ aspectRatio }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-[280px] md:w-[450px] lg:w-[800px] max-w-[80vw] max-h-[70vh] rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden bg-slate-950"
                    >
                        {/* Content with transition */}
                        <div className="relative w-full h-full">
                            {slides.map((slide, index) => (
                                <motion.div
                                    key={slide.id}
                                    layout
                                    className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-out flex items-center justify-center",
                                        index === currentIndex
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-95"
                                    )}
                                >
                                    {index === currentIndex && (
                                        <video
                                            src={slide.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            onLoadedMetadata={handleLoadedMetadata}
                                            className="w-full h-full object-contain"
                                        />
                                    )}

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Title and Description - Inside frame at bottom (Polaroid style) */}
                    <div className="absolute bottom-0 left-0 right-0 px-4 md:px-6 pb-3 md:pb-4 pt-2">
                        <h2
                            key={currentSlide.id + "-title"}
                            className="text-lg md:text-xl lg:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-1 animate-fade-in"
                        >
                            {currentSlide.title}
                        </h2>
                        <p
                            key={currentSlide.id + "-desc"}
                            className="text-xs md:text-sm text-gray-300 line-clamp-2 animate-fade-in"
                            style={{ animationDelay: "0.1s" }}
                        >
                            {currentSlide.description}
                        </p>
                    </div>
                </div>

                {/* Reflection/Glow effect */}
                <div className="absolute -inset-4 bg-purple-500/10 rounded-[3rem] blur-2xl -z-10" />
            </div>

            {/* Right - Navigation Controls */}
            <div className="flex flex-col items-center gap-2 md:gap-3">
                {/* Up Arrow (Previous) */}
                <button
                    onClick={prevSlide}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-200 border border-white/10"
                    aria-label="Previous slide"
                >
                    <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
                </button>

                {/* Pause/Play Button */}
                <button
                    onClick={toggleAutoPlay}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-200 border border-white/10"
                    aria-label={isAutoPlaying ? "Pause autoplay" : "Resume autoplay"}
                >
                    {isAutoPlaying ? (
                        <Pause className="w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                        <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
                    )}
                </button>

                {/* Down Arrow (Next) */}
                <button
                    onClick={nextSlide}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-pink-400 hover:bg-pink-500/10 transition-all duration-200 border border-white/10"
                    aria-label="Next slide"
                >
                    <ChevronDown className="w-5 h-5 md:w-6 md:h-6" />
                </button>
            </div>
        </div >
    );
}
