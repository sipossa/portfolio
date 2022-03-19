const quotes = [
  {
    quote: "Neither comprehension nor learining can take place in an atmosphere of anxiety.",
    author: "Rose Kennedy",
  },
  {
    quote: "It is kind of fun to do the impossible. ",
    author: "Walt Disney",
  },
  {
    quote: "Tough times never last, but tough people do. ",
    author: " Robert H. Schuller",
  },
  {
    quote: "I’ve failed over and over and over again in my life and that is why I succeed. ",
    author: "Michael Jordan",
  },
  {
    quote: "Grind Hard, Shine Hard. ",
    author: "Dwayne Johnson",
  },
  {
    quote: "Take time to deliberate, but when the time for action has arrived, stop thinking and go in.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "I count him braver who overcomes his desires than him who overcomes his enemies.",
    author: "Aristotle",
  },
  {
    quote: "Men are equal; it is not birth but virtue that makes the difference.",
    author: "Voltaire",
  },
  {
    quote: "Courage is the ladder on which all the other virtues mount.",
    author: "Clare Booth Luce",
  },
  {
    quote: "The greatest risk is the risk of riskless living",
    author: "Stephen Covey",
  },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;