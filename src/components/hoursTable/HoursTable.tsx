export function HoursTable() {
    const hours = {
        "Monday": "7:00 AM - 6:00 PM",
        "Tuesday": "7:00 AM - 6:00 PM",
        "Wednesday": "7:00 AM - 6:00 PM",
        "Thursday": "7:00 AM - 6:00 PM",
        "Friday": "7:00 AM - 8:00 PM",
        "Saturday": "8:00 AM - 8:00 PM",
        "Sunday": "8:00 AM - 4:00 PM"
    };

    return (
        <div className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg border border-amber-100">
            <ul className="space-y-3 text-lg">
                {Object.entries(hours).map(([day, time]) => (
                    <li key={day} className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">{day}</span>
                        <span className="text-gray-900">{time}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}