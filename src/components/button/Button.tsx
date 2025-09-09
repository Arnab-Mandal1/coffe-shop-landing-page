import type {ReactNode} from 'react';

type ButtonProps = {
    href: string;
    variant?: 'primary' | 'secondary';
    children: ReactNode;
};

export function Button({href, variant = 'primary', children}: ButtonProps) {
    const baseClasses = "inline-block px-8 py-3 text-lg font-semibold text-center rounded-md transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
    const variantClasses = {
        primary: "bg-amber-800 text-white hover:bg-amber-700 focus:ring-amber-800",
        secondary: "bg-gray-200 text-amber-900 hover:bg-gray-300 focus:ring-gray-400"
    };

    return (
        <a href={href} className={`${baseClasses} ${variantClasses[variant]}`}>
            {children}
        </a>
    );
}