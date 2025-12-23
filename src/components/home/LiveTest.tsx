import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
    ArrowLeft,
    Save,
    Eye,
    Plus,
    Menu,
    Type,
    FileText,
    ChevronLeft,
    ChevronRight,
    Trash2,
    Lock,
    AlertCircle,
} from "lucide-react";
import { useHero } from "../../contexts/HeroContext";


interface SectionElements {
    hasTitle: boolean;
    hasSubtitle: boolean;
    hasDescription: boolean;
}


export function LiveTest() {
    const { heroContent, updateHeroContent, setTriggerUpdate } = useHero();


    const [elements, setElements] = useState<SectionElements>({
        hasTitle: true,
        hasSubtitle: true,
        hasDescription: true,
    });


    const [subtitle, setSubtitle] = useState(heroContent.subtitle);
    const [description, setDescription] = useState(heroContent.description);
    const [contentExpanded, setContentExpanded] = useState(true);
    const [hasChanges, setHasChanges] = useState(false);


    const sections = [{ id: 1, name: "Bem-vindo à Levanta", active: true }];


    // Onboarding (balão) - mostra na primeira vez
    const [showOnboarding, setShowOnboarding] = useState(false);
    const [dontShowAgain, setDontShowAgain] = useState(false);


    useEffect(() => {
        const stored = localStorage.getItem("liveTestOnboardingDismissed");
        if (!stored) {
            // Delay para a animação do card aparecer primeiro
            const timer = setTimeout(() => {
                setShowOnboarding(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);


    const handleDismissOnboarding = () => {
        setShowOnboarding(false);
        if (dontShowAgain) {
            localStorage.setItem("liveTestOnboardingDismissed", "true");
        }
    };


    const toggleElement = (key: keyof SectionElements) => {
        setElements((prev) => ({ ...prev, [key]: !prev[key] }));
    };


    const handleTextChange = (value: string, setter: (val: string) => void) => {
        setter(value);
        setHasChanges(true);
    };


    const handleSave = () => {
        setTimeout(() => {
            updateHeroContent({ subtitle, description });


            setTriggerUpdate(true);
            setTimeout(() => setTriggerUpdate(false), 3000);
        }, 1200);


        setHasChanges(false);
    };


    const elementOptions = [
        {
            key: "hasTitle" as keyof SectionElements,
            label: "Título",
            icon: Type,
            locked: true,
        },
        {
            key: "hasSubtitle" as keyof SectionElements,
            label: "Subtítulo",
            icon: Type,
            locked: false,
        },
        {
            key: "hasDescription" as keyof SectionElements,
            label: "Descrição",
            icon: FileText,
            locked: false,
        },
    ];


    return (
        <section
            id="test"
            className="w-full h-screen bg-[#05050A] flex flex-col items-center justify-center relative snap-start border-t border-white/5 overflow-hidden py-12"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none z-0" />

            {/* Borrão azul - MAIS PARA CIMA */}
            <div className="absolute -top-32 -right-20 w-[600px] h-[600px] bg-blue-600/10 blur-3xl rounded-full opacity-30 pointer-events-none z-0" />

            {/* Borrão roxo - MAIS PARA BAIXO */}
            <div className="absolute -bottom-48 -left-16 w-[550px] h-[550px] bg-purple-700/20 blur-3xl rounded-full opacity-40 pointer-events-none z-0" />

            <style>{`
                .invisible-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                }
                .invisible-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>

            {/* Title */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-0 z-10"
            >
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                    Teste você mesmo!
                </h2>
                <p className="text-slate-400 mt-0 text-lg">
                    Experimente editar em tempo real
                </p>
            </motion.div>


            {/* Editor Container */}
            <div className="relative z-10 w-full flex-1 max-w-[1800px] mx-auto px-4 lg:px-6 flex flex-col overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 shrink-0">
                    <div className="flex items-center gap-4">
                        <button className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                            <ArrowLeft className="h-5 w-5 text-slate-400" />
                        </button>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-2xl font-bold text-white">Home</h1>
                                <span className="inline-flex items-center rounded-full bg-slate-800 border border-slate-700 px-2.5 py-0.5 text-xs font-normal text-slate-300">
                                    {sections.length} seções
                                </span>
                            </div>
                            <p className="text-sm text-slate-400">
                                Editando conteúdo da página
                            </p>
                        </div>
                    </div>


                    <div className="flex gap-2">
                        <a
                            href="#home"
                            onClick={handleSave}
                            className={`inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-all cursor-pointer ${hasChanges
                                ? "border-green-500/30 bg-green-500/10 text-green-400 hover:bg-green-500/20 hover:scale-105"
                                : "border-slate-700 bg-slate-800 text-slate-500 cursor-not-allowed opacity-50 pointer-events-none"
                                }`}
                        >
                            <Save className="h-4 w-4" />
                            Salvar
                        </a>
                        <button className="inline-flex h-10 items-center gap-2 rounded-md border border-blue-500/30 bg-blue-500/10 px-4 text-sm font-medium text-blue-400 hover:bg-blue-500/20 transition-colors">
                            <Eye className="h-4 w-4" />
                            Pré-visualizar
                        </button>
                        <button className="inline-flex h-10 items-center gap-2 rounded-md bg-purple-600 px-4 text-sm font-medium text-white hover:bg-purple-500 transition-colors">
                            <Plus className="h-4 w-4" />
                            Nova Seção
                        </button>
                    </div>
                </div>


                {/* Main Content */}
                <div className="relative flex flex-1 gap-6 overflow-hidden">
                    {/* Sidebar Navigation */}
                    <div className="group/sidebar absolute bottom-0 left-0 top-0 z-20 flex w-16 hover:w-72 flex-col rounded-xl border border-white/10 bg-slate-900/90 backdrop-blur-xl shadow-2xl transition-all duration-300 overflow-hidden">
                        <div className="flex items-center gap-3 border-b border-white/10 bg-slate-800/50 p-4">
                            <Menu className="h-5 w-5 text-slate-400 shrink-0" />
                            <span className="font-semibold text-slate-200 opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                Navegação
                            </span>
                        </div>


                        <div className="flex-1 overflow-hidden p-2">
                            {sections.map((section, idx) => (
                                <div
                                    key={section.id}
                                    className={`group/item relative flex items-center gap-3 rounded-lg p-2 cursor-pointer transition-colors ${section.active
                                        ? "bg-blue-500/20 text-blue-400"
                                        : "text-slate-400 hover:bg-white/5"
                                        } ${idx > 0 ? "mt-1" : ""}`}
                                >
                                    <div
                                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-xs font-bold ${section.active ? "bg-blue-500/30" : "bg-slate-700"
                                            }`}
                                    >
                                        {section.id}
                                    </div>
                                    <div className="flex flex-1 items-center justify-between opacity-0 group-hover/sidebar:opacity-100 transition-opacity duration-300">
                                        <span className="text-sm font-medium truncate pr-2">
                                            {section.name}
                                        </span>
                                        <button className="h-6 w-6 flex items-center justify-center rounded-md opacity-0 group-hover/item:opacity-100 hover:bg-red-500/20 hover:text-red-400 transition-all">
                                            <Trash2 className="h-3 w-3" />
                                        </button>
                                    </div>
                                    {section.active && (
                                        <div className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-500" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Editor Panel */}
                    <div className="ml-24 flex-1 flex flex-col overflow-hidden relative">
                        {/* Overlay central do aviso */}
                        <AnimatePresence>
                            {hasChanges && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                    transition={{ duration: 0.3 }}
                                    className="pointer-events-none absolute inset-0 flex items-center justify-center z-30"
                                >
                                </motion.div>
                            )}
                        </AnimatePresence>


                        <div className="flex h-full flex-col rounded-lg">
                            {/* Section Header */}
                            <div className="flex items-center justify-between px-1 mb-4 shrink-0">
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white">
                                        Seção 1
                                    </span>
                                    <span className="text-sm text-slate-400">ID: hero</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        disabled
                                        className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 opacity-50"
                                    >
                                        <ChevronLeft className="h-4 w-4 text-white" />
                                    </button>
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                                        <ChevronRight className="h-4 w-4 text-white" />
                                    </button>
                                </div>
                            </div>


                            {/* Scrollable Content */}
                            <div className="invisible-scrollbar flex-1 overflow-y-auto pr-2">
                                {/* DIV INTERMEDIÁRIA que contém os dois cards e o onboarding */}
                                <div className="relative space-y-6">
                                    {/* Onboarding backdrop e balão */}
                                    <AnimatePresence>
                                        {showOnboarding && (
                                            <>
                                                {/* Backdrop escurecido cobrindo apenas os dois cards */}
                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                    className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-xl z-40"
                                                    onClick={handleDismissOnboarding}
                                                />


                                                {/* Balão centralizado no meio dos dois cards */}
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                                    transition={{ duration: 0.35, ease: "easeOut" }}
                                                    className="absolute top-40 left-1/3 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
                                                >
                                                    <div className="relative rounded-2xl border border-white/20 bg-slate-900/95 backdrop-blur-xl shadow-[0_0_60px_rgba(15,23,42,0.9)] px-6 py-5">
                                                        <h3 className="text-lg font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 bg-clip-text text-transparent mb-4">
                                                            Como editar este conteúdo
                                                        </h3>


                                                        <div className="space-y-3 text-sm text-slate-100/90 mb-5">
                                                            <p className="flex items-start gap-2">
                                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-purple-500/20 text-purple-400 font-bold text-xs">
                                                                    1
                                                                </span>
                                                                <span>
                                                                    Clique no campo de{" "}
                                                                    <span className="font-semibold">Subtítulo</span> ou{" "}
                                                                    <span className="font-semibold">Descrição</span>.
                                                                </span>
                                                            </p>
                                                            <p className="flex items-start gap-2">
                                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs">
                                                                    2
                                                                </span>
                                                                <span>Faça as alterações que desejar no texto.</span>
                                                            </p>
                                                            <p className="flex items-start gap-2">
                                                                <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs">
                                                                    3
                                                                </span>
                                                                <span>
                                                                    Clique em <span className="font-semibold">Salvar</span> no
                                                                    topo para aplicar as mudanças na Home.
                                                                </span>
                                                            </p>
                                                        </div>


                                                        <div className="flex items-center justify-between gap-3 pt-4 border-t border-white/10">
                                                            <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={dontShowAgain}
                                                                    onChange={(e) => setDontShowAgain(e.target.checked)}
                                                                    className="h-3.5 w-3.5 rounded border-slate-500 bg-slate-800 text-purple-500 focus:ring-1 focus:ring-purple-500"
                                                                />
                                                                Não mostrar novamente
                                                            </label>
                                                            <button
                                                                onClick={handleDismissOnboarding}
                                                                className="text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-blue-500 px-5 py-2.5 rounded-lg hover:brightness-110 hover:scale-105 transition-all shadow-lg"
                                                            >
                                                                Entendi
                                                            </button>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )}
                                    </AnimatePresence>


                                    {/* Structure Card */}
                                    <div className="rounded-lg border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                                        <div className="flex flex-col border-b border-white/10 bg-white/5 px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <Type className="h-5 w-5 text-blue-400" />
                                                <h3 className="text-base font-semibold text-white">
                                                    Estrutura da Seção
                                                </h3>
                                            </div>
                                            <p className="text-sm text-slate-400 mt-1.5">
                                                Defina quais elementos estarão visíveis nesta seção
                                            </p>
                                        </div>


                                        <div className="p-6">
                                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                                {elementOptions.map((option) => {
                                                    const Icon = option.icon;
                                                    const isActive = elements[option.key];
                                                    const isLocked = option.locked;


                                                    return (
                                                        <div
                                                            key={option.key}
                                                            onClick={() => !isLocked && toggleElement(option.key)}
                                                            className={`flex flex-col gap-3 rounded-xl border p-3 shadow-sm transition-all ${isLocked
                                                                ? "border-slate-600 bg-slate-800/50 cursor-not-allowed opacity-60"
                                                                : isActive
                                                                    ? "border-blue-400/50 bg-blue-500/10 cursor-pointer"
                                                                    : "border-white/10 bg-white/5 hover:border-white/20 cursor-pointer"
                                                                }`}
                                                        >
                                                            <div className="flex items-center justify-between">
                                                                <Icon
                                                                    className={`h-5 w-5 ${isActive ? "text-blue-400" : "text-slate-400"
                                                                        }`}
                                                                />
                                                                {isLocked ? (
                                                                    <Lock className="h-4 w-4 text-slate-500" />
                                                                ) : (
                                                                    <button
                                                                        type="button"
                                                                        role="switch"
                                                                        aria-checked={isActive}
                                                                        className={`inline-flex h-6 w-11 items-center rounded-full transition-colors ${isActive ? "bg-blue-500" : "bg-slate-600"
                                                                            }`}
                                                                    >
                                                                        <span
                                                                            className={`block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${isActive ? "translate-x-5" : "translate-x-0.5"
                                                                                }`}
                                                                        ></span>
                                                                    </button>
                                                                )}
                                                            </div>
                                                            <label className="text-sm font-medium text-slate-200">
                                                                {option.label}
                                                            </label>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>


                                    {/* Text Content Accordion */}
                                    <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl">
                                        <button
                                            onClick={() => setContentExpanded(!contentExpanded)}
                                            className="flex w-full items-center justify-between p-4 font-medium"
                                        >
                                            <div className="flex items-center gap-2 text-white">
                                                <Type className="h-4 w-4 text-blue-400" />
                                                <span className="font-semibold">Conteúdo de Texto</span>
                                            </div>
                                            <ChevronRight
                                                className={`h-4 w-4 text-slate-400 transition-transform ${contentExpanded ? "rotate-90" : ""
                                                    }`}
                                            />
                                        </button>


                                        {contentExpanded && (
                                            <div className="px-4 pb-4 space-y-4">
                                                {/* Locked Title */}
                                                {elements.hasTitle && (
                                                    <div>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                                Título Principal
                                                            </label>
                                                            <div className="flex items-center gap-1 text-xs text-slate-500">
                                                                <Lock className="h-3 w-3" />
                                                                <span>Bloqueado</span>
                                                            </div>
                                                        </div>
                                                        <input
                                                            type="text"
                                                            value="LEVANTA"
                                                            disabled
                                                            className="mt-2 flex h-10 w-full rounded-md border border-slate-700 bg-slate-800/50 px-3 py-2 text-lg font-medium text-slate-500 cursor-not-allowed"
                                                        />
                                                    </div>
                                                )}


                                                {/* Editable Subtitle */}
                                                {elements.hasSubtitle && (
                                                    <div>
                                                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                            Subtítulo
                                                        </label>
                                                        <input
                                                            type="text"
                                                            value={subtitle}
                                                            onChange={(e) =>
                                                                handleTextChange(e.target.value, setSubtitle)
                                                            }
                                                            className="mt-2 flex h-10 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-base text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                                            placeholder="Digite o subtítulo..."
                                                        />
                                                    </div>
                                                )}


                                                {/* Editable Description */}
                                                {elements.hasDescription && (
                                                    <div>
                                                        <label className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                                                            Descrição
                                                        </label>
                                                        <textarea
                                                            value={description}
                                                            onChange={(e) =>
                                                                handleTextChange(e.target.value, setDescription)
                                                            }
                                                            rows={3}
                                                            className="mt-2 flex min-h-20 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                                                            placeholder="Digite a descrição..."
                                                        />
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                {/* FIM DA DIV INTERMEDIÁRIA */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
