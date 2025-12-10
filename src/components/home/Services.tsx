export function Services() {
    return (
        <section id="services" className="bg-stone-900 py-24 font-['Satoshi']">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-white text-5xl md:text-8xl font-medium">Services</h2>
                </div>

                <div className="max-w-screen-xl mx-auto rounded-2xl bg-zinc-800 bg-[linear-gradient(#1e1e1e,#154628)] p-8 md:p-16 flex flex-col md:flex-row gap-12 backdrop-blur-[20px]">
                    <div className="md:w-1/3">
                        <p className="text-white text-lg leading-relaxed">
                            On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.
                        </p>
                    </div>

                    <div className="md:w-2/3 flex flex-wrap gap-4 justify-end content-start">
                        {[
                            "Fashion Photography",
                            "Commercial",
                            "Photography",
                            "Travel",
                            "Portrait Photography",
                            "portfolio",
                            "Event Photography",
                            "Landscape Photography"
                        ].map((service, index) => (
                            <div
                                key={index}
                                className={`px-8 py-3 rounded-full text-base md:text-xl font-normal transition-transform hover:scale-105 cursor-default
                                    ${index % 2 === 0 ? 'bg-white text-green-900' : 'bg-white text-green-900'}
                                `}
                            >
                                {service}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
