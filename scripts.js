document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const emailInput = e.target.email.value.trim();
  const messageEl = document.getElementById('signupMessage');

  if (!emailInput || !validateEmail(emailInput)) {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Please enter a valid email address.';
    return;
  }

  // Simulate API call to your email capture service (e.g., Mailchimp)
  try {
    // Replace this with your actual API integration later
    await fakeApiCall(emailInput);

    messageEl.style.color = '#00ffe0';
    messageEl.textContent = 'Thanks for joining the waitlist. Stay tuned!';
    e.target.reset();
  } catch (err) {
    messageEl.style.color = 'red';
    messageEl.textContent = 'Oops, something went wrong. Try again later.';
  }
});

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

// Fake API call function (replace with your actual backend/API)
function fakeApiCall(email) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), 1200);
  });
}