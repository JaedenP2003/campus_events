import { getEventById } from "./events.js";
import { getEventId } from "./router.js";
import { saveRSVP, getRSVP } from "./storage.js";
import { validateForm } from "./validation.js";

document.addEventListener("DOMContentLoaded", async () => {

  const id = getEventId();
  const event = await getEventById(id);
  const details = document.getElementById("eventDetails");

  if (!event) {
    details.innerHTML = "<p>Event not found.</p>";
    return;
  }

  details.innerHTML = `
    <h2>${event.title}</h2>
    <p><strong>Location:</strong> ${event.location}</p>
    <p><strong>Starts:</strong> ${new Date(event.start).toLocaleString()}</p>
    <p>${event.description}</p>
  `;

  const existing = getRSVP(id);
  if (existing) {
    name.value = existing.name;
    email.value = existing.email;
    guests.value = existing.guests;
  }

  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const error = validateForm(name.value, email.value);

    if (error) {
      formMessage.textContent = error;
      formMessage.style.color = "red";
      return;
    }

    saveRSVP(id, {
      name: name.value,
      email: email.value,
      guests: guests.value
    });

    formMessage.textContent = "RSVP saved!";
    formMessage.style.color = "green";
  });
});