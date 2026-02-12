export function saveRSVP(eventId, data) {
    localStorage.setItem(`rsvp_${eventId}`, JSON.stringify(data));
}

export function getRSVP(eventId) {
    const data = localStorage.getItem(`rsvp_${eventId}`);
    return data ? JSON.parse(data) : null;
}
