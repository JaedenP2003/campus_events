export function saveUserEvent(event) {

  const events = JSON.parse(localStorage.getItem("userEvents")) || [];

  events.push(event);

  localStorage.setItem("userEvents", JSON.stringify(events));
}

export function getUserEvents() {

  return JSON.parse(localStorage.getItem("userEvents")) || [];

}