var	genericForm = document.getElementById('genericForm'),
		result = document.getElementById('result'),
		expanded = false,
		oldButton,
		i,
		functionContainer = document.getElementById('functionContainer'),
		answer = document.getElementById('answer'),
		printInput = document.getElementById('printInput'),
		theCode = document.getElementById('functionCode'),
		textField = document.getElementById('textField');




// Object literal template, use for adding new functions
//
// {
// 	title: '',
// 	description: '',
// 	placeholder: 'Type me anything',
// 	primaryFunction:,
// 	helperFunction: undefined
// },

///////////////////////////////////////////////////////////////////////////////////
// Big Coderbyte Object Array
//
//
var arrayOfObjects = [
{
	title: 'abCheck',
	description: 'Reports whether the letters \'a\' and \'b\' occur in a string, and are also separated by 3 places.',
	placeholder: 'Type me anything',
	primaryFunction:
	function abCheck(str) {
		'use strict';
		if (str.match(/[aA]...[bB]/g) || str.match(/[bB]...[aA]/g)) {
			return 'Well yes, they are!';
		} return 'No such luck...';
	},
	helperFunction: undefined
},

{
	title: 'alphabetSoup',
	description: 'Alphabetizes a string, numbers first',
	placeholder: 'Type me anything',
	primaryFunction:
		function alphabetSoup(str) {
			'use strict';
			return str.split('').sort().join('');
		},
	helperFunction: undefined
},

{
	title: 'dashInsert',
	description: 'Inserts a dash between any two adjacent odd numbers in a string.<br>0 doesn\'t count as odd',
	placeholder: 'Type me anything',
	primaryFunction:
		function dashInsert (num) {
			'use strict';
			var str = num.toString();
			var newStr = '';
			for (var i = 0; i < str.length; i++) {
				if ((str.charAt(i) % 2 === 1) && (str.charAt(i+1) % 2 === 1)) {
					newStr += str.charAt(i) + '-';
				} else newStr += str.charAt(i);
			}
			return newStr;
		},
	helperFunction: undefined
},

{
	title: 'firstFactorial',
	description: 'Takes number, returns factorial',
	placeholder: 'Type me a number',
	primaryFunction:
	function firstFactorial (num) {
		'use strict';
		if (isNaN(num)) {
			return '<span class="red">I need a number, please!</span>';
		} else if (parseInt(num) === 0) {
			return num + '!' + ' is equal to 1';
		} else if (num < 0) {
			return '<span class="red">I need a POSITIVE number, please!</span>';
		} else {
			var result = num;
			for (var i = num; i > 1; i--) {
				result *= (i -1);
			}
			return num + '!' + ' is equal to ' + Math.round(result);
		}
	},
	helperFunction: undefined
},

{
	title: 'firstReverse',
	description: 'This function reverses a string',
	placeholder: 'Type me anything',
	primaryFunction:
		function firstReverse(str) {
			'use strict';
			return 'Reversed: ' + str.split('').reverse().join('');
		},
	helperFunction: undefined
},

{
	title: 'letterCapitalize',
	description: 'Capitalize the first letter of each word.',
	placeholder: 'Type me anything',
	primaryFunction:
		function letterCapitalize (str) {
			'use strict';
			var newStr = str.charAt(0).toUpperCase();
			for (var i = 1; i < str.length; i++) {
				if (str.charAt(i - 1) === ' ') {
					newStr += str.charAt(i).toUpperCase();
				} else newStr += str.charAt(i);
			}
		return newStr;
	},
	helperFunction: undefined
},

{
	title: 'letterChanges',
	description: 'A function that takes a string, and replaces every letter in the string with the letter that follows in the alphabet.<br>Then, it capitalizes all vowels.<br>Numbers stay the same.',
	placeholder: 'Type me anything',
	primaryFunction:
		function letterChanges(str) {
		'use strict';
		str.toLowerCase();
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((/z/i).test(str.charAt(i))) {
				newStr += 'a';
			} else if ((/[a-y]/i).test(str.charAt(i))) {
				newStr += String.fromCharCode((str.charCodeAt(i) + 1));
			} else newStr += str.charAt(i);
		}
		return this.helperFunction(newStr);
	},
	helperFunction:
		function capitalizeVowels(str) {
		'use strict';
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((/[aeiou]/i).test(str.charAt(i))) {
				newStr += str.charAt(i).toUpperCase();
			} else newStr += str.charAt(i);
		}
		return newStr;
	}
},

{
	title: 'longestWord',
	description: 'Returns the longest word in a sentence.<br>If there is more than one longest word with the same length, it returns the first.<br>Symbols and punctuation are <em>not</em> accounted for.',
	placeholder: 'Type me anything',
	primaryFunction:
		function longestWord(sen) {
			'use strict';
			var noPunc = sen.replace(/[^\w\s]|_/g, '');
			var wordArray = noPunc.split(' ');
			var longWord = wordArray[0];
			for( var i=1; i < wordArray.length; i++ ){
				if (wordArray[i].length > longWord.length){
					longWord = wordArray[i];
				}
			}
			return 'The longest word is: ' + longWord;
},
	helperFunction: undefined
},

{
	title: 'numberAddition',
	description: 'Adds all numbers found in a string (with or without letters & symbols).<br>Adjacent numbers matter (AKA 88sb3 = 91; 8b8b3 = 19)',
	placeholder: 'Type me anything',
	primaryFunction:
		function numberAddition (str) {
			'use strict';
			var total = 0;
			var num = 0;
			for (var i = 0; i < str.length; i++) {
				if (str.charAt(i) === ' ') {
					total += parseInt(num);
					num = 0;
				}
				else if (!isNaN(str.charAt(i))) {
					num += str.charAt(i);
				}
				else {
					total += parseInt(num);
					num = 0;
				}
			}
			total += parseInt(num);
			return total;
		},
	helperFunction: undefined
},

{
	title: 'palindrome',
	description: 'Determines whether or not a string is a Palindrome.<br>Ignores numbers and punctuation.<br>Spaces don\'t count.',
	placeholder: 'Type me anything',
	primaryFunction:
	function palindrome(str) {
		'use strict';
    var newStr = '';
	

		var removeSpaces = function(str){
			var noSpaceStr = '';
			for (var i = 0; i < str.length; i++){
				if (str.charAt(i) !== ' '){
					noSpaceStr += str.charAt(i);
				}
			}
			return noSpaceStr;
		};
		for (var i = removeSpaces(str).length; i >= 0; i--){
			newStr = newStr + removeSpaces(str).charAt(i);
		}
		if (removeSpaces(str) === newStr){
			return 'Success! Palindrome!';
		} else return 'Sorry, not a palindrome...';
	},
	helperFunction: undefined
},

{
	title: 'simpleAdding',
	description: 'Adds all the numbers up from 1 to n (n being your input)',
	placeholder: 'Type me a number',
	primaryFunction:
		function simpleAdding(num) {
			'use strict';
			if (isNaN(num)) {
				return '<span class="red">I need a number, please!</span>';
			} else if (parseInt(num) === 0) {
				return num + '!' + ' is equal to 1';
			} else if (num > 10000000) {
				return '<span class="red">A number that big might kill your browser!</span>';
			} else if (num < 0) {
				return '<span class="red">I need a POSITIVE number, please!</span>';
			} else if (num % 1 !== 0) {
				return '<span class="red">No decimals, please!</span>';
			} else if (parseInt(num) === 1) {
				return 1;
			} else if (parseInt(num) === 2) {
				return '1 + 2 = 3';
			} else
			{
				var temp = 0;
				for(var i = 1; i <= num; i++){
					temp = temp + i;
				}
				return '1 + 2 + 3 + (...) = ' + temp;
			}
		},
	helperFunction: undefined
},

{
	title: 'simpleSymbols',
	description: 'Determines if a string is an acceptable sequence.<br>\'Acceptable\' means that any letter must be surrounded by a \'+\' symbol',
	placeholder: 'Type me anything',
	primaryFunction:
		function simpleSymbols(str) {
			'use strict';
			var isIt = false;
			for (var i = 0; i < str.length; i++) {
				if (/[a-zA-Z]/.test(str.charAt(i))) {
					if (str.charAt(i + 1) === '+' && str.charAt(i - 1) === '+') {
						isIt = true;
					} else return '<span class="red">NOT</span>  acceptable!';
				}
			}
			if (isIt) {
				return 'Acceptable!';
			}
		},
	helperFunction: undefined
},

{
	title: 'swapCase',
	description: 'Swaps the upper/lower case of each letter, depending on their original case.<br>Numbers and symbols stay the same.',
	placeholder: 'Type me anything',
	primaryFunction:
	function swapCase(str) {
		'use strict';
		var newStr = '';
		for (var i = 0; i < str.length; i++)
			if (str.charAt(i) == str.charAt(i).toUpperCase()) {
				newStr = newStr + str.charAt(i).toLowerCase();
			} else if (str.charAt(i) == str.charAt(i).toLowerCase()) {
				newStr = newStr + str.charAt(i).toUpperCase();
			}
			return newStr;
		},
	helperFunction: undefined
},

{
	title: 'vowelCount',
	description: 'This function counts the number of vowels in a sentence or word.',
	placeholder: 'Type me anything',
	primaryFunction:
		function vowelCount(str) {
			'use strict';
			var matchArray = str.match(/[aeiou]/gi);
			if (str === '') {
				return '';
			} else if (matchArray === null) {
				return '0 vowels total';
			} else return matchArray.length + ' vowels total in ' + '"' + regexpColor(str, /[aeiou]/gi) + '"' ;
		},
	helperFunction: undefined
}
];
//
//
//
// End Big CoderByte Object Array
////////////////////////////////////////////////////////////////////////////

// Some self-explanatory show/hide functions
function showElement (element) {
	'use strict';
	element.style.display = 'block';
}

function hideElement (element) {
	'use strict';
	element.style.display = 'none';
}


// Takes a string and regular expression, returns a HTML string with the regexp matches highlighted in a <span>
function regexpColor(str, regexp) {
		'use strict';
		var newStr = '',
				len = str.length;
		for (var i = 0; i < len; i++) {
			if ((str.charAt(i)).match(regexp)) {
				newStr += '<span class=\"red\">' + str.charAt(i) + '</span>';
			} else newStr += str.charAt(i);
		} return newStr;
	}

// Takes a string (preferably code) and attempts to return HTML with the appropriate return and tab spaces in place
function prettyCode(str) {
	'use strict';
	var newStr = '';
	for (var i = 0; i < str.length; i++) {
		
		if (str[i].match(/\n/)) {
			newStr += '<br>';
		} else if (str[i].match(/\t/)) {
		newStr += '&nbsp;&nbsp;';

		}else newStr += str[i];
	} return newStr;
}

// Loops through an object array and builds HTML buttons when the appropriate properties are present
function buildButtons (array) {
	'use strict';
	var len = array.length;
	for (var i = 0; i < len; i++) {
		var buttons = document.getElementById('buttons'),
				newButton = document.createElement('button');
				
		newButton.id=arrayOfObjects[i].title;
		newButton.className='btn';
		newButton.dataset.index=[i];
		newButton.innerHTML=arrayOfObjects[i].title;
		buttons.appendChild(newButton);
	}
}

// This is the initial button build 
buildButtons(arrayOfObjects);

// Takes and array and an index
// Based on that index, populates HTML with text from the associated object
function populateForm (array, index) {
	'use strict';
	var	functionTitle = document.getElementById('functionTitle'),
			description = document.getElementById('description'),
			textField = document.getElementById('textField');

	functionTitle.innerHTML=arrayOfObjects[index].title;
	description.innerHTML=arrayOfObjects[index].description;
	textField.placeholder=arrayOfObjects[index].placeholder;
}



// Event Listeners Follow


// Possibly somewhat convoluted means of hiding/showing the appropriate elements at the appropriate times depending on state and button clicked
document.getElementById('buttons').addEventListener('click', function(e) {
	'use strict';

	var currentButton = e.target,
			showCode = document.getElementById('showCode'),
			index = currentButton.getAttribute('data-index');
			i = index;
		
	if (expanded === false) { // If nothing has been expanded...	
		// console.log('first');
		oldButton = currentButton;
		expanded = true;
		hideElement(result);
		genericForm.reset();
		textField.focus();
		currentButton.className = 'btn btn-primary';
		populateForm(arrayOfObjects, index);
		showElement(functionContainer);
		showElement(showCode);
	} else if (expanded === true && index === oldButton.dataset.index) { // If a pane is expanded, clicking the same button will close it again
		// console.log('second');
		oldButton = currentButton;
		expanded = false;
		textField.value = '';
		textField.focus();
		hideElement(functionContainer);
		hideElement(showCode);
		hideElement(result);
		genericForm.reset();
		currentButton.className = 'btn';
		oldButton.className = 'btn';
	} else if (expanded === true && index !== oldButton.dataset.index) { // If a pane is expanded, clicking a different button will re-populate fields with the appropriate data
		// console.log('third');
		oldButton.className = 'btn';
		oldButton = currentButton;
		expanded = true;
		textField.focus();
		currentButton.className = 'btn btn-primary';
		populateForm(arrayOfObjects, index);
		hideElement(result);
		showElement(showCode);
		genericForm.reset();
	}
}, false);


// This button is responsible for executing whatever funcion is currently expanded
document.getElementById('submitButton').addEventListener('click', function(e) {
	'use strict';
	var boom = arrayOfObjects[i].primaryFunction(textField.value);
	
	if (textField.value !== '') { // If the user has input data, execute the function and show some stuff
		printInput.innerHTML=textField.value;
		answer.innerHTML=boom;
		genericForm.reset();
		showElement(result);
		textField.focus();
		textField.value = '';
		e.preventDefault();
	} else { // If the input field is empty, do nothing
		hideElement(result);
		textField.focus();
		e.preventDefault();
	}
}, false);


// These buttons show and hide the code for the related function.  Grabbed via 'i' from the array object and pretty printed via whiteSpace function
document.getElementById('showCode').addEventListener('mouseover', function() {
	'use strict';
	var stringCode = arrayOfObjects[i].primaryFunction.toString();
	theCode.innerHTML = prettyCode(stringCode);
	showElement(theCode);
}, false);

document.getElementById('showCode').addEventListener('mouseout', function() {
	'use strict';
	hideElement(theCode);
}, false);













