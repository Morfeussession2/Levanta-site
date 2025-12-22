import { createContext, useContext, useState, ReactNode } from 'react';

interface HeroContent {
    subtitle: string;
    description: string;
}

interface HeroContextType {
    heroContent: HeroContent;
    updateHeroContent: (content: HeroContent) => void;
    triggerUpdate: boolean;
    setTriggerUpdate: (value: boolean) => void;
}

const HeroContext = createContext<HeroContextType | undefined>(undefined);

export function HeroProvider({ children }: { children: ReactNode }) {
    const [heroContent, setHeroContent] = useState<HeroContent>({
        subtitle: "Tecnologia que transforma negócios.",
        description: "Administre sua empresa de forma mais eficiente com a plataforma que você precisa."
    });
    const [triggerUpdate, setTriggerUpdate] = useState(false);

    const updateHeroContent = (content: HeroContent) => {
        setHeroContent(content);
    };

    return (
        <HeroContext.Provider value={{ heroContent, updateHeroContent, triggerUpdate, setTriggerUpdate }}>
            {children}
        </HeroContext.Provider>
    );
}

export function useHero() {
    const context = useContext(HeroContext);
    if (!context) {
        throw new Error('useHero must be used within HeroProvider');
    }
    return context;
}
