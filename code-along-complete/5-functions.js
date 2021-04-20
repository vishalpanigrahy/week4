let modernMovies = [
  { title: `Star Wars`, quote: `May the Force be with you.` },
  { title: `Titanic`, quote: `I'm the king of the world!` },
  { title: `Forrest Gump`, quote: `My mama always said life was like a box of chocolates. You never know what you're gonna get.` },
  { title: `A Few Good Men`, quote: `You can't handle the truth!` },
  { title: `Field of Dreams`, quote: `If you build it, he will come.` },
  { title: `The Godfather, Part II`, quote: `Keep your friends close, but your enemies closer.` },
  { title: `Taxi Driver`, quote: `You talking to me?` },
  { title: `When Harry Met Sally`, quote: `I'll have what she's having.` },
  { title: `Jerry McGuire`, quote: `You had me at 'hello'.` }
]

// Goal: Print a list of famous movies and quotes from those movies
// Something like, "May the Force by with you" is a quote from Star Wars.

// Print modern movies
printMovies(modernMovies)

let classicMovies = [
  { title: `The Wizard of Oz`, quote: `There's no place like home.` },
  { title: `Casablanca`, quote: `Here's looking at you, kid.` },
  { title: `Jaws`, quote: `You're gonna need a bigger boat.` },
  { title: `Goldfinger`, quote: `A martini. Shaken, not stirred.` },
  { title: `Auntie Mame`, quote: `Life is a banquet, and most poor suckers are starving to death!` },
  { title: `The Maltese Falcon`, quote: `The stuff that dreams are made of.` },
  { title: `Cool Hand Luke`, quote: `What we've got here is failure to communicate.` },
]

// Print classic movies
printMovies(classicMovies)

// A function that prints an Array of movie Objects
function printMovies(movies) {
  // Loop through the movies Array
  for (let i=0; i < movies.length; i++) {
    // Store each item in the Array in memory
    let movie = movies[i]

    // Create a sentence to be written out to the JavaScript console
    let sentence = `"${movie.quote}" is a quote from ${movie.title}.`

    // Write the sentence to the JavaScript console
    console.log(sentence)
  }
}