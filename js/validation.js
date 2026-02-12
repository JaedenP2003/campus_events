export function validateForm(name, email) {

    if (!name.trim()) {
        return "Name is required.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return "Enter a valid email.";
    }

    return null;
}
