const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generateQuoteButton = document.getElementById("generate");
const url = "https://api.quotable.io/random";
const body = document.body;

function randomBackgroundColor() {
  let hex = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e'];
  let a;

  //Function to generate random color
  function populate(a) {
      for (let i = 0; i < 6; i++) {
          let x = Math.round(Math.random() * 14);
          let y = hex[x];
          a += y;
      }
      return a;
  }
  let color1 = populate("#");
  let color2 = populate("#");
  let color3 = populate("#");

  var angle = 'center';
  let gradient = '-webkit-radial-gradient(' + angle + ',' + color1 + ',' + color2 + ',' + color3 + ')';
  document.body.style.background = gradient;
}


let getQuote = () => {
    fetch(url)
      .then((data) => data.json())
      .then((item) => {
        quote.innerText = item.content;
        author.innerText = item.author;
        randomBackgroundColor();
      });
  };

generateQuoteButton.addEventListener("click", getQuote);