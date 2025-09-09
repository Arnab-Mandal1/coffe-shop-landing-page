interface MenuItemData {
    name: string;
    description: string;
    price: string;
    isSpecial?: boolean;
}

function Badge() {
    return (
        <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full bg-amber-200 text-amber-800 mt-1`}>
      Special
    </span>
    )
}

type MenuItemProps = {
    item: MenuItemData;
};

export function MenuItem({item}: MenuItemProps) {
    return (
        <div className="py-4">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="text-xl font-semibold text-amber-900">{item.name}</h4>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <div className="text-right ml-4 flex-shrink-0">
                    <p className="text-xl font-bold text-amber-800">{item.price}</p>
                    {item.isSpecial && <Badge/>}
                </div>
            </div>
        </div>
    );
}