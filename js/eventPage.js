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

    // Load saved RSVP
    const existing = getRSVP(id);
    if (existing) {
        document.getElementById("name").value = existing.name;
        document.getElementById("email").value = existing.email;
        document.getElementById("guests").value = existing.guests;
    }

    const form = document.getElementById("rsvpForm");
    const message = document.getElementById("formMessage");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const guests = document.getElementById("guests").value;

        const error = validateForm(name, email);

        if (error) {
            message.textContent = error;
            message.style.color = "red";
            return;
        }

        saveRSVP(id, { name, email, guests });

        message.textContent = "RSVP saved!";
        message.style.color = "green";
    });

});
