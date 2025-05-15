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
    "𝗗𝗮𝘄𝗻 𝗧𝗼𝗿𝗿𝗲𝘀: ⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐ Neha and her team are amazing. As a new small business owner she has been invaluable in helping me plan for my tax liabilities both personal and professional. After the first year I also began using her bookkeeping services and it has made knowing the financial health at a glance. I highly recommend her services!!",
    "𝗪𝘂𝗻𝗴𝗸𝗶 𝗣𝗮𝗿𝗸: ⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐ Neha is incredible, professional and thorough. I trust her financial recommendation. She discovered and corrected an item that my previous tax advisor and I have filed wrong for years. She is an awesome advisor.",
    "𝗠𝗮𝗿𝗸 𝗗𝗲𝘀𝗹𝗼𝗻𝗱𝗲: ⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐ Neha is very friendly and extremely knowledgeable. We had a confusing year tax wise and had many questions which she answered very patiently and clearly. She even gave us a little insight into what we might expect for the coming tax year. This is our first time with Neha and we’re very grateful that we found her.",
    "𝗚𝗲𝗻𝗮 𝗦𝗽𝗶𝗹: ⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐ I have been working with Neha for several years. We do it all online. She is very attentive and thorough with my returns. She is responsive and communicating is easy, making the whole process run smoothly.",
    "𝗧𝗮𝘆𝗹𝗼𝗿 𝗔𝗱𝗻𝗮𝗻: ⭐⭐⭐⭐⭐/⭐⭐⭐⭐⭐ Neha has been an incredible help and an amazing resource. She responds quickly to any and all questions within her area of expertise and she has proven to be a massive help. I would strong recommend her for anyone's CPA needs."
  ];
  
  const quoteText = document.getElementById('quoteText');
  
  let currentQuote = 0;
  function changeQuote() {
    quoteText.textContent = quotes[currentQuote];
    currentQuote = (currentQuote + 1) % quotes.length;
  }
  
  changeQuote();  // Show the first quote immediately
  setInterval(changeQuote, 5000);  // Change every 500 seconds
  
