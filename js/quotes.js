const quotes = [
    {
        quote:"Don't let the fear of losing be greater than the excitement of winning.",
        author:"Robert Kiyosaki",
    },
    {
        quote:"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
        author:"Dale Carnegie",
    },
    {
        quote: "Action is the foundational key to all success.",
        author:"Pablo Picasso",
    },
    {
        quote:"The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.",
        author:"Vince Lombardi",
    },
    {
        quote:"It is your determination and persistence that will make you a successful person.",
        author: "Kenneth J Hutchins",
    },
    {
        quote:"You can waste your life drawing lines. Or you can live your life crossing them.",
        author:"Shonda Rhimes",
    },
    {
        quote:"Be poor, humble and driven. Don't be afraid to shift or pivot.",
        author: "Alex Rodriguez"
    },
    {
        quote:"Respect a man, he will do the more.",
        author:"James Howell"
    },
    {
        quote:"All that really belongs to us is time; even he who has nothing else has that.",
        author:"Baltasar Gracian",
    },
    {
        quote:"You cannot change what you are, only what you do.",
        author:"Philip Pullman",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;

