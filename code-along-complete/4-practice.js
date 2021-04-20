// Cryptocurrency is all the rage. You have decided to create your own,
// KelloggCoin, that will massively disrupt financial markets at the Global
// Hub.

// Don't change the following code, which represents a series of transactions, each
// of which represents a transfer of KelloggCoin from one user to another – the first 
// transaction is the "ICO" (Initial Coin Offering)
let blockchain = [
  { fromUser: 'brian', toUser: 'ben', amount: 9000 },
  { fromUser: 'brian', toUser: 'evan', amount: 7000 },
  { fromUser: 'ben', toUser: 'evan', amount: 400 },
  { fromUser: 'evan', toUser: 'nate', amount: 4500 },
  { fromUser: 'nate', toUser: 'anthony', amount: 1200 },
  { fromUser: 'anthony', toUser: 'nate', amount: 150 },
  { fromUser: 'ben', toUser: 'nate', amount: 2000 }
]

// Goal: Loop through the blockchain, printing the details of each 
// transaction with each iteration of the loop, e.g. 
// `brian transferred 7000 KelloggCoin to evan`, to the 
// JavaScript console

// for (declare a variable for counting ("counter variable"); determine the criteria for the number of times to loop; increment the counter)
// then, inside the loop, try two different "recipes":

// Recipe (algorithm) #1: One line of code inside the loop
// - write each "transaction" to the JavaScript console using a single line of code
console.log(`=== RECIPE #1 ===`)
for (let i=0; i < blockchain.length; i++) {
  console.log(`${blockchain[i].fromUser} transferred ${blockchain[i].amount} KelloggCoin to ${blockchain[i].toUser}`)
}

console.log(`=== RECIPE #2 ===`)
// Recipe (algorithm) #2: Two lines of code inside the loop
// - create a variable for each "transaction" in the blockchain
// - write each "transaction" to the JavaScript console
for (let i=0; i < blockchain.length; i++) {
  let transaction = blockchain[i]
  console.log(`${transaction.fromUser} transferred ${transaction.amount} KelloggCoin to ${transaction.toUser}`)
}