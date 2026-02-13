export async function getEvents() {
    const res = await fetch("./data/events.json");

    if (!res.ok) {
        throw new Error("Could not load events.");
    }

    return await res.json();
}

export async function getEventById(id) {
    const events = await getEvents();
    return events.find(e => e.id === id);
}
