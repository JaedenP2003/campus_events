export function goToEvent(id) {
    window.location.href = `event.html?id=${id}`;
}

export function getEventId() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
}
