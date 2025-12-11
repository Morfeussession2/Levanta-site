import { useState, useEffect, useCallback } from "react";
import { ChevronUp, ChevronDown, Pause, Play } from "lucide-react";

interface DeviceSlide {
    id: string;
    title: string;
    description: string;
    image: string;
}

const slides: DeviceSlide[] = [
    {
        id: "1",
        title: "Design Personalizado",
        description: "Interfaces únicas que refletem a identidade da sua marca, sem templates prontos.",
        image: "",
    },
    {
        id: "2",
        title: "Performance Otimizada",
        description: "Sites ultrarrápidos com as tecnologias mais modernas do mercado.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
    },
    {
        id: "3",
        title: "Código Limpo",
        description: "Desenvolvimento do zero, sem plugins desnecessários ou código duplicado.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
    },
    {
        id: "4",
        title: "Deploy Instantâneo",
        description: "Seu site no ar em minutos com infraestrutura escalável e segura.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
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
                    <div className="relative w-[260px] h-[300px] md:w-[380px] md:h-[440px] lg:w-[480px] lg:h-[560px] rounded-[1.2rem] md:rounded-[1.5rem] overflow-hidden bg-slate-950">
                        {/* Content with transition */}
                        <div className="relative w-full h-full">
                            {slides.map((slide, index) => (
                                <div
                                    key={slide.id}
                                    className={cn(
                                        "absolute inset-0 transition-all duration-700 ease-out",
                                        index === currentIndex
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-95"
                                    )}
                                >
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                                    {/* UI Elements overlay to simulate app interface */}

                                </div>
                            ))}
                        </div>
                    </div>

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
        </div>
    );
}
