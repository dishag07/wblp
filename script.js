  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Simple validation
    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const userMessage = form.querySelector('textarea').value.trim();

    if (name && email && userMessage) {
      message.classList.remove('hidden');
      form.reset();
    } else {
      alert('Please fill in all fields.');
    }
  });

// Array of quotes
const quotes = [
    "Neha and her team are amazing. As a new small business owner she has been invaluable in helping me plan for my tax liabilities both personal and professional. After the first year I also began using her bookkeeping services and it has made knowing the financial health at a glance. I highly recommend her services!!",
    "This team completely changed how we handle our finances. Highly recommend!",
    "Professional, friendly, and always reliable. Couldn’t ask for better service.",
    "Thanks to them, my business taxes are always stress-free!",
    "Incredible attention to detail and outstanding customer service!"
  ];
  
  const quoteText = document.getElementById('quoteText');
  
  let currentQuote = 0;
  function changeQuote() {
    quoteText.textContent = quotes[currentQuote];
    currentQuote = (currentQuote + 1) % quotes.length;
  }
  
  changeQuote();  // Show the first quote immediately
  setInterval(changeQuote, 5000);  // Change every 500 seconds
  