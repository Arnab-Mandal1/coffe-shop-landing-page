import {MenuItem} from '../menuItem/MenuItem';

interface MenuItemData {
    name: string;
    description: string;
    price: string;
    isSpecial?: boolean;
}

interface MenuCategoryData {
    category: string;
    items: MenuItemData[];
}

type MenuCategoryProps = {
    category: MenuCategoryData;
};

export function MenuCategory({category}: MenuCategoryProps) {
    return (
        <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-amber-900 border-b-2 border-amber-200 pb-2 mb-6">
                {category.category}
            </h3>
            <div className="divide-y divide-amber-100">
                {category.items.map(item => (
                    <MenuItem key={item.name} item={item}/>
                ))}
            </div>
        </div>
    );
}