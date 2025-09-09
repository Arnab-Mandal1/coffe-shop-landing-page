import {Button} from '../button/Button';

export function Hero() {
    const cafeInfo = {
        name: "The Local Cafe",
        tagline: "Your Daily Grind, Perfected."
    };

    return (
        <section id="hero"
                 className="h-screen flex items-center justify-center text-center text-white bg-cover bg-center"
                 style={{backgroundImage: "url('https://placehold.co/1920x1080/d1a36a/333333?text=Welcome!')"}}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 px-4">
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">{cafeInfo.name}</h1>
                <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto drop-shadow-md">{cafeInfo.tagline}</p>
                <div className="mt-8">
                    <Button href="#menu" variant="primary">View Our Menu</Button>
                </div>
            </div>
        </section>
    );
}