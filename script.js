const apiUrl = "https://api.quotable.io/random";
const quoteBtn = document.getElementById("quote-btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const tweetBtn = document.getElementById("tweet");

// get the quote from the api
quoteBtn.addEventListener("click", async function getQuote() {
  const response = await fetch(apiUrl);

  let data = await response.json();
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
});

// tweet the quote with the author name
tweetBtn.addEventListener("click", () => {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      quote.innerHTML +
      " -by " +
      author.innerHTML +
      ".",
    "Tweet Window",
    "width= 600, height=600"
  );
});
