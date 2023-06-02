// Regular expressions for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[0-9]{10}$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

// Validate email
export function validateEmail(email:any) {
  return emailRegex.test(email);
}

// Validate phone
export function validatePhone(phone:any) {
  return phoneRegex.test(phone);
}

// Validate password
export function validatePassword(password:any) {
  return passwordRegex.test(password);
}
