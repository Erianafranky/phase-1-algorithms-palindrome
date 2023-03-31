function isPalindrome(word) {
  // Write your algorithm here
  if (word === word.split("").reverse().join('')){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  split the word into an array of substrings
  reverse the array which has being split
  join the characters together into a single word
  check if the string given is the same as the reversed string
*/

/*
  Add written explanation of your solution here
  The function checks if a given word is a palindrome
  that is the word should be the same when read forward or backwards
  In the solution we should first split the word into an array of subtrings
  after that we reverse the array then join the array together into a string of one word.
  We then check if it matches the original word and return true if it does
  if they don't match we return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
