function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 === 0) {
    return true
  } else if (num1 % num2 !== 0) {
    return false
  }
}

function halfSquare(num) {
  return (Math.pow(num, 2) / 2)
  
}

function isLong(str) {
  if (str.length >= 15) {
    return true
  }else if (str.length < 15) {
    return false
  }
}



function exclaim(str) {

  let newString = "";

  for (let i = 0; i < str.length; i++) {

    if (str[i] !== '!') {

      newString += str[i];

    } 
   
  }

  return newString+ "!";

}

function countWords(str) {

  const wordArray = str.split(" ")

  return wordArray.length
  
}

function containsDigit(str) {
  let digits = '1234567890'

  for (let i = 0; i < str.length; i++) {
    if (digits.includes(str[i])) {
      return true
    }
    
  }
  return false
}

function containsLowerCase(str) {
  let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'

  for (let i = 0; i < str.length; i++) {
    if (lowerCaseLetters.includes(str[i])) {
      return true
    }
    
  }
  return false
}

function containsUpperCase(str) {
  let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  for (let i = 0; i < str.length; i++) {
    if (upperCaseLetters.includes(str[i])) {
      return true
    }
    
  }
  return false
}

function containsNonAlphanumeric(str) {
  let alphanumericChars = 'abcdefghijklmnopqrstuvwxyz1234567890'
  // let lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  // let upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  // let numbers = '1234567890'

  for (let i = 0; i < str.length; i++) {
    if (!alphanumericChars.includes(str[i].toLowerCase())) {
      return true
    }
    
  }
  return false
}

function containsSpace(str) {
  let space = " "

  for (let i = 0; i < str.length; i++) {
    
    if (space.includes(str[i])) {
      return true
    } 
    
  }
  return false
}

function digits(num) {
  // let numArr = num.split('')
  let numArr = []
  let numStr1 = String(num)

  let numbers = "1234567890"
  

  for (let i = 0; i < numStr1.length; i++) {
    
    if (numbers.includes(numStr1[i])) {
      numArr.push(Number(numStr1[i]));
    }
    
  }
  // return numStr.split('')

  

  return numArr
}

function truncate(str) {
  let shortStr = ""

  if (str.length < 15) {
    return str
  }

  for (let i = 0; i < 8; i++) {
    
    if (str.length >= 15) {
      shortStr += str[i]
      
    } 
  
  }
  return shortStr + "..."
}

function isValidPassword(str) {
  let result = false

  if ( containsDigit(str) === true && containsLowerCase(str) === true && containsUpperCase(str) === true && containsNonAlphanumeric(str) === true ) {
    result = true
  }
  if (containsSpace(str) === true) {
    result = false
  }
  return result 
}

function onlyPunchy(array) {
  

  for (let i = 0; i < array.length; i++) {
    //  made the string at each index in the array go through the exclaim function
    array[i] = exclaim(array[i]);

      // evaluates if the string at each index is greater than 15
    if (isLong(array[i]) === true) {
      // removes string at i index, and only removes that one thing, 
      // without the , 1 it would remove every index after.
      array.splice(i, 1)
    }
    
  }
  return array
}
// isLong, exclaim functions used
// returns only those titles that are shorter than 15 characters
// adds an exclamation point to any titles without exclamation points
// removes any excess exclamation points from any titles with multiple exclamation points
// does not factor in excess exclamation points when deciding if title is shorter than 15 characters


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}