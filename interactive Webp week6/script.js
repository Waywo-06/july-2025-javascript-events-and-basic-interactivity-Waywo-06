//  Theme Toggle: Switch between light and dark mode
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

//  Goal Counter: Increment goal count on button click
let goalCount = 0;
const scoreBtn = document.getElementById('scoreBtn');
const goalDisplay = document.getElementById('goalCount');

scoreBtn.addEventListener('click', () => {
  goalCount++;
  goalDisplay.textContent = goalCount;
});

//  FAQ Toggle: Show/hide answer when question is clicked
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');

question.addEventListener('click', () => {
  answer.classList.toggle('hidden');
});

//  Form Validation: Validate name, email, and password
const form = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

const nameFeedback = document.getElementById('nameFeedback');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');
const formMessage = document.getElementById('formMessage');

// Helper function to validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Helper function to validate password strength
function isStrongPassword(password) {
  return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password);
}

// Form submission handler
form.addEventListener('submit', (e) => {
  e.preventDefault();

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    nameFeedback.textContent = 'Name is required.';
    valid = false;
  } else {
    nameFeedback.textContent = '';
  }

  // Email validation
  if (!isValidEmail(emailInput.value)) {
    emailFeedback.textContent = 'Please enter a valid email.';
    valid = false;
  } else {
    emailFeedback.textContent = '';
  }

  // Password validation
  if (!isStrongPassword(passwordInput.value)) {
    passwordFeedback.textContent= 'Password must be at least 6 characters and include a number.';
    valid = false;
  } else {
    passwordFeedback.textContent = '';
  }

  // Final message
  if (valid) {
    formMessage.textContent = '🎉 Welcome to Wavy FC!';
    form.reset();
  } else {
    formMessage.textContent = 'Please fix the errors above.';
  }
});


