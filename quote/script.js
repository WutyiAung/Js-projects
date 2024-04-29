var quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Innovation distinguishes between a leader and a follower. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  ];

function generateQuote(){
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var quoteList = document.createElement("li");
  quoteList.textContent = quotes[randomIndex] ;
  
  document.querySelector("#main").style.display = "block" ;
  document.querySelector("#result").appendChild(quoteList);
}