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

  const rsvpForm = document.getElementById("rsvpForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const guestsInput = document.getElementById("guests");
  const formMessage = document.getElementById("formMessage");

  rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const error = validateForm(nameInput.value, emailInput.value);

    if (error) {
      formMessage.textContent = error;
      formMessage.className = "message error";
      return;
    }

    saveRSVP(id, {
      name: nameInput.value.trim(),
      email: emailInput.value.trim(),
      guests: guestsInput.value
    });

    formMessage.textContent = "RSVP successful! You're all set.";
    formMessage.className = "message success";
  });
});