 export default function generateRandomTimeSlots() {
    const timeSlots = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
        "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
        "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
    ];

    const availableSlots = [];

    function getRandomDate(start, end) {
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    }

    function getRandomTime() {
        const index = Math.floor(Math.random() * timeSlots.length);
        return timeSlots[index];
    }

    const numSlots = Math.floor(Math.random() * 100) + 50; // Generates between 50 and 150 slots for randomness.

    for (let i = 0; i < numSlots; i++) {
        const date = getRandomDate(new Date(2023, 9, 1), new Date(2023, 10, 30)); // months are 0-indexed
        const time = getRandomTime();

        const slot = {
            date: date,
            time: time
        };

        // Check if the slot already exists, if not, add it.
        const exists = availableSlots.some(existingSlot => existingSlot.date === slot.date && existingSlot.time === slot.time);
        if (!exists) {
            availableSlots.push(slot);
        }
    }
    return availableSlots;
}

// const slots = generateRandomTimeSlots();
// console.log(slots);
