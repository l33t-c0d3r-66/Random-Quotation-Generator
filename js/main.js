const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateQuoteButton = document.getElementById("generate");
const url = "https://api.quotable.io/random";

let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
      });
  };

generateQuoteButton.addEventListener("click", getQuote);