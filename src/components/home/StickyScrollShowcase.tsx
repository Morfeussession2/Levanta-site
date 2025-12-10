import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface ShowcaseItem {
    id: string;
    title: string;
    category: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    theme: 'light' | 'dark';
}

const items: ShowcaseItem[] = [
    {
        id: "augastino",
        title: "Augastino",
        category: "Personal Casual Photography",
        description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions,",
        imageSrc: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b47361002b698d6230535_sea-7831815_1280.webp",
        imageAlt: "Augastino Showcase",
        theme: 'light'
    },
    {
        id: "anne",
        title: "Anne",
        category: "Personal Photography",
        description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, contrairement à une...",
        imageSrc: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b47123b03a4413cfb0342_photographer-7902219_1280.webp",
        imageAlt: "Anne Showcase",
        theme: 'dark'
    },
    {
        id: "dream-co",
        title: "Dream co",
        category: "Real-Estate Photography",
        description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, contrairement à une...",
        imageSrc: "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/685c515787caddf5bba0c9f1_house-1836070_1280.webp",
        imageAlt: "Dream Co Showcase",
        theme: 'light'
    }
];

const Card = ({ item, index, progress, range, targetScale }: {
    item: ShowcaseItem;
    index: number;
    progress: MotionValue<number>;
    range: [number, number];
    targetScale: number;
}) => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start']
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
    const scale = useTransform(progress, range, [1, targetScale]);

    return (
        <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
            <motion.div
                style={{ scale, top: `calc(-5vh + ${index * 25}px)` }}
                className={`relative flex flex-col w-full max-w-[1000px] h-[80vh] md:h-[600px] rounded-[30px] p-8 md:p-14 origin-top
                    ${item.theme === 'dark' ? 'bg-green-900 text-white' : 'bg-neutral-200 text-stone-950'}
                `}
            >
                <div className="flex flex-col h-full justify-between">
                    <h2 className={`text-4xl sm:text-5xl lg:text-7xl font-medium ${item.theme === 'dark' ? 'text-blue-50' : 'text-stone-900'}`}>
                        {item.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-center flex-1">
                        <div className="relative w-full h-[60%] md:h-full rounded-2xl overflow-hidden">
                            {/* Optimized Image Logic with Scale */}
                            <motion.div style={{ scale: imageScale }} className="w-full h-full">
                                <img
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>

                        <div className="flex flex-col justify-center items-start">
                            <h3 className={`text-2xl md:text-3xl font-normal leading-8 mb-4 ${item.theme === 'dark' ? 'text-blue-50' : 'text-stone-900'}`}>
                                {item.category}
                            </h3>
                            <p className={`text-base md:text-lg ${item.theme === 'dark' ? 'text-white' : 'text-stone-900'}`}>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export function StickyScrollShowcase() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    return (
        <section id="work" className="bg-zinc-800 py-24 font-['Satoshi']">
            <div ref={container} className="w-full relative">
                {/* Intro Header */}
                <div className="text-center mb-0 md:mb-10 px-6">
                    <h2 className="text-white text-5xl md:text-8xl font-medium mb-8">My Work</h2>
                    <p className="text-white text-base md:text-lg max-w-lg mx-auto">
                        Specialize in capture marvelous moments that not only captivate audiences but also provide seamless confidence and peace.
                    </p>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                    {items.map((item, index) => {
                        const targetScale = 1 - ((items.length - index) * 0.05);
                        return (
                            <Card
                                key={item.id}
                                item={item}
                                index={index}
                                progress={scrollYProgress}
                                range={[index * 0.25, 1]}
                                targetScale={targetScale}
                            />
                        );
                    })}
                </div>
                {/* Extra space at bottom */}
                <div className="h-[10vh]"></div>
            </div>
        </section>
    );
}
