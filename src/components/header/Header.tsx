import {useEffect, useState} from 'react';
import {Logo} from '../logo/Logo';
import {Navigation} from '../navigation/Navigation';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 md:px-8 flex justify-between items-center h-20">
                <Logo/>
                <Navigation/>
            </div>
        </header>
    );
}