import {useEffect, useState} from 'react';
import {StatusBadge} from '../statusBadge/StatusBadge';
import {HoursTable} from '../hoursTable/HoursTable';

type HoursData = { [key: string]: string; };

const cafeHours: HoursData = {
    "Monday": "7:00 AM - 6:00 PM",
    "Tuesday": "7:00 AM - 6:00 PM",
    "Wednesday": "7:00 AM - 6:00 PM",
    "Thursday": "7:00 AM - 6:00 PM",
    "Friday": "7:00 AM - 8:00 PM",
    "Saturday": "8:00 AM - 8:00 PM",
    "Sunday": "8:00 AM - 4:00 PM"
};

export function Hours() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        const parseTime = (timeStr: string): number => {
            const [time, modifier] = timeStr.split(' ');
            let [hours, minutes] = time.split(':').map(Number);
            if (modifier === 'PM' && hours < 12) hours += 12;
            if (modifier === 'AM' && hours === 12) hours = 0;
            return hours * 60 + minutes;
        };

        const checkStatus = () => {
            const now = new Date();
            const dayOfWeek = now.toLocaleString('en-US', {weekday: 'long'});
            const hoursToday = cafeHours[dayOfWeek];

            if (!hoursToday || hoursToday.toLowerCase() === 'closed') {
                setIsOpen(false);
                return;
            }

            const [startTimeStr, endTimeStr] = hoursToday.split(' - ');
            const startTime = parseTime(startTimeStr);
            const endTime = parseTime(endTimeStr);
            const currentTime = now.getHours() * 60 + now.getMinutes();
            setIsOpen(currentTime >= startTime && currentTime < endTime);
        };

        checkStatus();
        const interval = setInterval(checkStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hours" className="py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">Hours & Status</h2>
                <StatusBadge isOpen={isOpen}/>
                <HoursTable/>
            </div>
        </section>
    );
}