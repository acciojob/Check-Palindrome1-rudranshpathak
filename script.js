// complete the given function

function palindrome(str){
	// Remove non-alphanumeric characters and convert to lowercase
  var formattedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Check if the formatted string is equal to its reverse
  return formattedStr === formattedStr.split('').reverse().join('');

	

}
module.exports = palindrome
