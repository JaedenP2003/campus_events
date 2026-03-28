export async function getEvents() {
  const response = await fetch("./data/events.json");

  if (!response.ok) {
    throw new Error("Failed to load events.");
  }

  const jsonEvents = await response.json();
  const userEvents = JSON.parse(localStorage.getItem("userEvents")) || [];

  return [...jsonEvents, ...userEvents];
}

export async function getEventById(id) {
  const events = await getEvents();
  return events.find((event) => event.id === id);
}