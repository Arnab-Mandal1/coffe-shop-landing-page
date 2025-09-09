import {MenuCategory} from '../menuCategory/MenuCategory';

const menuData = [
    {
        category: "Espresso & Coffee",
        items: [
            {name: "Espresso", description: "A concentrated coffee beverage.", price: "$3.00"},
            {name: "Latte", description: "Espresso with steamed milk.", price: "$4.50", isSpecial: true},
        ]
    },
    {
        category: "Pastries & Snacks",
        items: [
            {name: "Croissant", description: "A buttery, flaky pastry.", price: "$3.50"},
            {name: "Avocado Toast", description: "Smashed avocado on sourdough.", price: "$8.50", isSpecial: true},
        ]
    }
];

export function Menu() {
    return (
        <section id="menu" className="py-16 md:py-24 bg-amber-50">
            <div className="container mx-auto px-6 md:px-8">
                <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-12">Our Menu</h2>
                <div className="max-w-4xl mx-auto">
                    {menuData.map(category => (
                        <MenuCategory key={category.category} category={category}/>
                    ))}
                </div>
            </div>
        </section>
    );
}