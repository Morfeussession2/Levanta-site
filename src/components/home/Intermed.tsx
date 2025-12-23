export function Intermed() {
    return (
        <section className="snap-start snap-proximity scroll-smooth w-full h-[25vh] bg-[#05050A] relative border-b border-white/5 overflow-visible">
            {/* Background Effects matching PlatformIntro */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            </div>

            <div style={{ paddingTop: '5rem' }} className=" relative z-10 w-full h-full flex flex-col items-center justify-center text-center">
                <div className="w-px h-24 bg-gradient-to-b from-purple-500 to-transparent" />
                <span className="mt-4 text-xs font-mono uppercase tracking-[0.3em] text-gray-400 bg-black/20 backdrop-blur-sm px-2 py-1 rounded">
                    Role para explorar
                </span>
            </div>
        </section >
    );
}