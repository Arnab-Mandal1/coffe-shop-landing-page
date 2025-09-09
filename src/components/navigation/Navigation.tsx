export function Navigation() {
    const navLinks = [
        {name: 'Menu', href: '#menu'},
        {name: 'Hours', href: '#hours'},
        {name: 'Find Us', href: '#location'},
    ];

    return (
        <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
                <a key={link.name} href={link.href}
                   className="text-lg text-amber-900 hover:text-amber-700 font-medium transition-colors">
                    {link.name}
                </a>
            ))}
        </nav>
    );
}