var quotes =[
    {
        quote:"Be yourself; everyone else is already taken",
        author:"Oscar Wilde"
    },
    {
        quote:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me",
        author:" Marilyn Monroe"
    },
    {
        quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author:"Albert Einstein"
    },
    {
        quote:"So many books, so little time.",
        author:"Frank Zappa"
    },
    {
        quote:"A room without books is like a body without a soul.",
        author:"Marcus Tullius Cicero"
    },
    {
        quote:"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        author:"Bernard M. Baruch"
    },
    ];
    
    
    
    
    function getQuote(){
  var index = Math.floor(Math.random()*quotes.length)
    
    
        document.getElementById("quote").innerHTML=quotes[index].quote
        document.getElementById("auther").innerHTML=quotes[index].author
    }
    









