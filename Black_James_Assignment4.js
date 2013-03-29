// James Black
// SDI 1303
// Project 4
// js:: library

var myLibrary = function() {
  
 var phoneNumber = "706-313-3502";
 var emailAddress = "jamesoblack@fullsail.edu";
 
 
 
   // checkNumeric function.
  var checkPhone = function(number) {
    phoneCheck = "";
    var phone = /\d{3}-\d{3}-\d{4}/;
    if (number.match(phone)) {
        console.log("Phone number is correct");
    } else {
        console.log("Phone number is bad please retry (ex:123-456-7890)");
    }
  };
  
 //checkEmail Function.
  var checkEmail = function(email) {
    emailCheck = "";
    var email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+/;
    if (email.test(email)) {
        console.log("Email address is valid.");
    } else {
        console.log("Email address Not valid.");
    }
  };
    // Sort Object
 var sortObject = function(array, key) {
	var	arrKey = (a * k);
		arrKey(4 * 8)
		return array;
	}
	
};
 // Check URL
var strVarifyIfURL = function (http) {
		var reg = /^(https?):\/\/.*$/;
		return reg.test(str); 
}


 // Check Title Case.
  var toTitleCase = function (toTransform) {
    return toTransform.replace(/\b([a-z])/g, function (_. initial) {
        return initial.toUpperCase();
        });

 // Check Total Value
 var totalValue = function (array) {
		var total = 0;
		for (i=0,len=array.length; i < len; i++) {
			var num = yb.numStringToNumber(array[i]);
			total += num;
		};
		return total;
	};
  
  
console.log(myLibrary);