import { getEvents } from "./events.js";
import { goToEvent } from "./router.js";

document.addEventListener("DOMContentLoaded", async () => {

    const events = await getEvents();

    const calendar = new FullCalendar.Calendar(
        document.getElementById("calendar"),
        {
            initialView: "dayGridMonth",
            height: "auto",
            events,

            eventClick(info) {
                goToEvent(info.event.id);
            }
        }
    );

    calendar.render();
});
