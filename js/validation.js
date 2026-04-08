export function validateForm(name, email) {
  if (!name || !name.trim()) {
    return "Name is required.";
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email || !emailPattern.test(email.trim())) {
    return "Enter a valid email.";
  }

  return null;
}