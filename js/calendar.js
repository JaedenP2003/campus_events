import { getEvents } from "./events.js";
import { goToEvent } from "./router.js";
import { saveUserEvent, getUserEvents } from "./addEvent.js";

let calendar;

document.addEventListener("DOMContentLoaded", async () => {

  const baseEvents = await getEvents();
  const userEvents = getUserEvents();

  const allEvents = [...baseEvents, ...userEvents];

  calendar = new FullCalendar.Calendar(
    document.getElementById("calendar"),
    {
      initialView: "dayGridMonth",
      height: "auto",
      events: allEvents,

      eventClick(info) {
        if(info.event.id){
          goToEvent(info.event.id);
        }
      }
    }
  );

  calendar.render();

  setupForm();

});

function setupForm(){

  const form = document.getElementById("eventForm");
  const message = document.getElementById("eventMessage");

  form.addEventListener("submit", (e)=>{

    e.preventDefault();

    const newEvent = {
      id: crypto.randomUUID(),
      title: title.value,
      start: start.value,
      end: end.value,
      location: location.value,
      description: description.value
    };

    saveUserEvent(newEvent);

    calendar.addEvent(newEvent);

    message.textContent = "Event added!";
    message.style.color = "green";

    form.reset();

  });

}