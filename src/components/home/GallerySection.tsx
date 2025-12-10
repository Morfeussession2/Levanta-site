
const galleryImages = [
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/67daf15bc1be0f3cfb48e433_gallary%200.1.webp",
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b46ca45d714537f662927_photographer-5149664_1280.webp",
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b46a275179f701b9f6bd7_nature-7398357_1280.webp",
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b47361002b698d6230535_sea-7831815_1280.webp",
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b46ed2a09ea9e8fbcfd5b_portrait-7942151_1280.webp",
    "https://proxy.extractcss.dev/https://cdn.prod.website-files.com/67d2e97c49802cd631d95ff1/683b47123b03a4413cfb0342_photographer-7902219_1280.webp"
];

export function GallerySection() {
    return (
        <section id="gallery" className="bg-zinc-800 py-24 font-['Satoshi']">
            <div className="max-w-screen-2xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-white text-5xl md:text-8xl font-medium mb-8">Gallery</h2>
                    <p className="text-gray-300 text-lg max-w-lg mx-auto">
                        Specialize in capture marvelous moments that not only captivate audiences but also provide seamless confidence and peace.
                    </p>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="break-inside-avoid rounded-2xl overflow-hidden hover:opacity-90 transition-opacity">
                            <img
                                src={src}
                                alt={`Gallery item ${index + 1}`}
                                className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
