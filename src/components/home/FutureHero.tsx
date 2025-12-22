import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useHero } from "../../contexts/HeroContext";

function morphText(
    from: string,
    to: string,
    setText: (val: string) => void,
    totalDuration = 1400
) {
    const maxLen = Math.max(from.length, to.length);
    const toChars = to.padEnd(maxLen, " ").split("");
    const perCharDelay = totalDuration / maxLen;

    for (let i = 0; i < maxLen; i++) {
        setTimeout(() => {
            setText(prev => {
                const padded = prev.padEnd(maxLen, " ");
                const arr = padded.split("");
                arr[i] = toChars[i];
                return arr.join("").trimEnd();
            });
        }, i * perCharDelay);
    }
}

function splitLines(text: string) {
    return text.split("\n");
}

export function FutureHero() {
    const { heroContent, triggerUpdate } = useHero();

    const [subtitleDisplay, setSubtitleDisplay] = useState(heroContent.subtitle);
    const [descriptionDisplay, setDescriptionDisplay] = useState(
        heroContent.description
    );

    useEffect(() => {
        if (!triggerUpdate) return;

        morphText(subtitleDisplay, heroContent.subtitle, setSubtitleDisplay, 1800);
        morphText(
            descriptionDisplay,
            heroContent.description,
            setDescriptionDisplay,
            1600
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [triggerUpdate]);

    const subtitleLines = useMemo(
        () => splitLines(subtitleDisplay || ""),
        [subtitleDisplay]
    );
    const descriptionLines = useMemo(
        () => splitLines(descriptionDisplay || ""),
        [descriptionDisplay]
    );

    return (
        <section
            id="home"
            className="w-full h-screen bg-black flex items-center justify-center relative overflow-hidden snap-start"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black opacity-50" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[128px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="mb-6"
                >
                    {/* <span className="inline-block py-1 px-4 rounded-full border border-purple-500/50 bg-purple-500/10 text-purple-300 text-sm tracking-widest font-mono uppercase">
                        Levanta v2
                    </span> */}
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mb-8 flex justify-center"
                >
                    <img
                        src="/LEVANTA LOGObranco-01.png"
                        alt="LEVANTA"
                        className="w-full max-w-2xl h-auto object-contain"
                    />
                </motion.div>

                <div className="max-w-3xl mx-auto flex flex-col items-center">
                    {/* SUBTÍTULO – bloco próprio, altura mínima + alinhamento central */}
                    <div className="min-h-[3rem] md:min-h-[3.0rem] flex items-center justify-center text-xl md:text-3xl text-gray-300 font-light">
                        <div className="inline-block">
                            {subtitleLines.map((line, lineIndex) => (
                                <div
                                    key={`sub-line-${lineIndex}`}
                                    className="whitespace-pre-wrap"
                                >
                                    {Array.from(line).map((ch, index) => (
                                        <motion.span
                                            key={`sub-${lineIndex}-${index}-${subtitleDisplay.length}`}
                                            initial={{
                                                opacity: 0,
                                                filter: "blur(10px)",
                                                y: 4,
                                                textShadow:
                                                    "0 0 0px rgba(192,132,252,0), 0 0 0px rgba(59,130,246,0)"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                filter: "blur(0px)",
                                                y: 0,
                                                textShadow: [
                                                    "0 0 0px rgba(192,132,252,0), 0 0 0px rgba(59,130,246,0)",
                                                    "0 0 20px rgba(192,132,252,0.9), 0 0 40px rgba(59,130,246,0.8)",
                                                    "0 0 0px rgba(192,132,252,0), 0 0 0px rgba(59,130,246,0)"
                                                ]
                                            }}
                                            transition={{
                                                duration: 0.5,
                                                ease: "easeOut",
                                                delay: index * 0.035 + lineIndex * 0.12
                                            }}
                                            className="inline-block whitespace-pre"
                                        >
                                            {ch}
                                        </motion.span>
                                    ))}
                                    {lineIndex < subtitleLines.length - 1 && <br />}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ESPAÇAMENTO OBRIGATÓRIO ENTRE SUBTÍTULO E DESCRIÇÃO */}
                    <div className="h-4 md:h-6" />

                    {/* DESCRIÇÃO – bloco próprio, sempre abaixo */}
                    <div className="min-h-[3rem] md:min-h-[3.5rem] flex items-center justify-center text-base md:text-2xl text-white font-medium leading-relaxed">
                        <div className="inline-block text-left md:text-center">
                            {descriptionLines.map((line, lineIndex) => (
                                <div
                                    key={`desc-line-${lineIndex}`}
                                    className="whitespace-pre-wrap"
                                >
                                    {Array.from(line).map((ch, index) => (
                                        <motion.span
                                            key={`desc-${lineIndex}-${index}-${descriptionDisplay.length}`}
                                            initial={{
                                                opacity: 0,
                                                filter: "blur(10px)",
                                                y: 4,
                                                textShadow:
                                                    "0 0 0px rgba(129,140,248,0), 0 0 0px rgba(56,189,248,0)"
                                            }}
                                            animate={{
                                                opacity: 1,
                                                filter: "blur(0px)",
                                                y: 0,
                                                textShadow: [
                                                    "0 0 0px rgba(129,140,248,0), 0 0 0px rgba(56,189,248,0)",
                                                    "0 0 18px rgba(129,140,248,0.9), 0 0 32px rgba(56,189,248,0.8)",
                                                    "0 0 0px rgba(129,140,248,0), 0 0 0px rgba(56,189,248,0)"
                                                ]
                                            }}
                                            transition={{
                                                duration: 0.45,
                                                ease: "easeOut",
                                                delay: index * 0.03 + lineIndex * 0.1
                                            }}
                                            className="inline-block whitespace-pre"
                                        >
                                            {ch}
                                        </motion.span>
                                    ))}
                                    {lineIndex < descriptionLines.length - 1 && <br />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
