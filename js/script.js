// 25.05
// сложение чисел
let arr = [2, 5, 8, 12, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === 'number') {
    sum += arr[i];
  }
}

console.log(sum);



// отрицательные числа
let arr_2 = [-2, -5, 8, -12, 5];
let sum_2 = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr_2[i]) {
    sum_2 += arr_2[i];
  }
}

console.log(sum_2);

// попытка номер 2
let arr_3 = [-2, -5, 8, -12, 5];
let sum_3 = 0;

for (let i = 0; i < arr_3.length; i++) {
  if (arr_3[i] < 0) {
    sum_3 += arr_3[i];
  }
}

console.log(sum_3);








// 27.05
// calcAverage
function calc(arg1, arg2, operator) {
    if (operator === "+") {
      return arg1 + arg2;
    } else if (operator === "-") {
      return arg1 - arg2;
    } else if (operator === "*") {
      return arg1 * arg2;
    } else if (operator === "/") {
      return arg1 / arg2;
    } else {
      return "Неправильный оператор";
    }
  }
  
  console.log(calc(2, 3, "+")); 
  console.log(calc(5, 2, "-"));  
  console.log(calc(4, 2, "*"));  
  console.log(calc(10, 2, "/")); 
  






// Палиндромы
function isPalindrome(word) {
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
      reversedWord += word[i];
    }
    
    return word === reversedWord;
  }
  
  function printPalindromeWords(words) {
    for (let i = 0; i < words.length; i++) {
      let currentWord = words[i];
      let isWordPalindrome = isPalindrome(currentWord);
      console.log(currentWord + ': ' + isWordPalindrome);
    }
  }
  
  let words = ['level', 'deed', 'hello', 'world', 'nun'];
  printPalindromeWords(words);




//   глассные буквы
function countVowels(word) {
    var vowelCount = 0;
    var vowels = ['a', 'e', 'i', 'o', 'u'];
  
    for (var i = 0; i < word.length; i++) {
      var letter = word[i].toLowerCase();
  
      if (vowels.includes(letter)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  var word = "Sensation";
  var count = countVowels(word);
  console.log("Гласные в слове '" + word + "': " + count);
  
  