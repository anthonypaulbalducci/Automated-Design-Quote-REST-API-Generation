var randomQuote;
var displayedQuote = [];

fetchQuote();

function fetchQuote() {

$("#quote").empty();
$("#author").empty();
$("#controls").empty();

$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback='?" + Math.round(new Date().getTime() / 1000), function(a) {
randomQuote = a[0].content;
author = a[0].title;
writeQuote();
});
}

function writeQuote() {
 randomQuote = $(randomQuote).text();
  displayedQuote = randomQuote.split("");
  console.log(displayedQuote);
var counter = 0;

var interval = setInterval(function() {
  $("#quote").append(displayedQuote.shift());

  if (counter == randomQuote.length) {
    clearInterval(interval);
     $("#author").hide().append("<p>&#8212;" + author + "</p>").fadeIn("slow");
     $("#controls").append("<a href='https://www.twitter.com/intent/tweet?text=" + randomQuote + "&#8212;" + author + "'> <img src='http://www.pngall.com/wp-content/uploads/2016/07/Twitter-Download-PNG.png' width='30px' alt='Retweet Quote'></a> <img src ='https://res.cloudinary.com/dj2fvdnhm/image/upload/v1515293111/Recycling_symbol_tv0hvx.svg' id='recycleQuote' onclick='fetchQuote()' alt='Display a new quote'>");
  }

  counter++;
}, 60); 
  }