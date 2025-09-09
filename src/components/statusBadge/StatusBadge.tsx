type StatusBadgeProps = {
    isOpen: boolean;
};

export function StatusBadge({isOpen}: StatusBadgeProps) {
    const badgeClasses = `inline-block px-3 py-1 text-sm font-semibold rounded-full ${isOpen ? "bg-green-200 text-green-800" : "bg-red-200 text-red-800"}`;

    return (
        <span className={badgeClasses}>
      {isOpen ? "Open Now" : "Closed"}
    </span>
    );
}