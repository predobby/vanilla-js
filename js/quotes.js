const quotes = [
    {quote : "All our dreams can come true, if we have the courage to pursue them.",
     author : "Walt Disney"},
    {quote : "Whatever you do, maThe difference between genius and stupidity is that genius has its limits.ke it pay",
    author : "Albert Einstein"},
    {quote : "The only way to do great work is to love what you do.",
    author : "Steve Jobs"},
    {quote : "Be yourself; everyone else is already taken.",
    author : "Oscar Wilde"},
    {quote : "If you want to live a happy life, tie it to a goal, not to people or things.",
    author : "Albert Einstein"},
    {quote : "It does not matter how slowly you go as long as you do not stop.",
    author : "Confucius"},
    {quote : "If you don't stand for something, you will fall for anything.",
    author : "Malcolm X"},
    {quote : "It always seems impossible until it's done.",
    author : "Nelson Mandela"},
    {quote : "Believe you can and you're halfway there.",
    author : "Theodore Roosevelt"},
    {quote : "Don't watch the clock; do what it does. Keep going.",
    author : "Sam Levenson"}
];

const quote = document.querySelector("#quote span:first-child");

const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;