function reverseString(word){
  return word;
  // creating an array from the input string
  const wordArray = word.split("");
  // reversing the wordArray
  const reversedWordArray = wordArray.reverse();
  // joining the string from the reversed array
  const reversedWord = reversedWordArray.join("");
  // return the reversed string
  return reversedWord;
}


function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string 
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord){
    return true;

  }else {
    return false;
  }
}
let robot = "word";

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the input string 
  const reversedWord = reverseString(word);
  // if the reversed string is the same as the input
  if (word === reversedWord){
    return true;

  }else {
    return false;
  }
}

/* 
  Add your pseudocode here
  reverse the input string,
  if the reversed string is the same as the input
    return true
  else 
    return false
*/

/*
  Add written explanation of your solution here
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
