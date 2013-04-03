// James Black
// SDI 1303
// Project 4
// js:: library

var library = {
	// Strings

	strVarifyIfPhoneNumber: function (str) {
		var reg = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
		return reg.test(str); 
	},

	strVarifyIfEmail: function (str) {
		var reg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		return reg.test(str); 
	},

	strVarifyIfURL: function (str) {
		var reg = /^(https?):\/\/.*$/;
		return reg.test(str); 
	},

	strTitleCase: function (str) {
		return str.replace(/\w\S*/g, function(txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
	},

	strCsvChangeDelimiter: function (str,oldDelimiter,newDelimiter) {
		return str.replace(/oldDelimiter/g, newDelimiter);
	},

	// Numbers

	numDecimalPlaces: function (num,decPlaces) {
		return num.toFixed(decPlaces);
	},

	numFuzzyMatch: function (num1, num2, percentage) {
		
		return num1;
	},

	numDatesDiff: function (d1, d2, modifier) {
		var milliseconds = 1000;

		var date1 = new Date(d1).getTime();
		var date2 = new Date(d2).getTime();

		var difference 	= Math.round(Math.abs(date1 - date2) / milliseconds);
		var minutes 	= Math.round(difference / 60);
		var hours 		= Math.round(minutes / 60);
		var days 		= Math.round(hours / 24);

		
		if (modifier === 'm') {
			return minutes;
		} else if (modifier === 'h') {
			return hours;
		} else if (modifier === 'd') {
			return days;
		} else {
			console.log("Please identify a modifier of either m, h, or d");
		};	
	},


	numStringToNumber: function (str) {
		var num = parseInt(str); 
		if (isNaN(num)) {    	 
			console.log('The argument must be a number in string form.'); 
		} else {             	 
			return num;     	 
		};
	}, 

	// Arrays

	arrSmallestValue: function (array,min) {
		var arr = [];
		
		for (i=0,len=array.length; i < len; i++) {
			if (array[i] >= min) {
				arr.push([array.splice(i,1)]);
			};
		}

		var smallest = Math.min.apply(Math, arr);
		
		return smallest;
	},

	arrTotalValue: function (array) {
		
		var total = 0;
		for (i=0,len=array.length; i < len; i++) {
			var num = library.numStringToNumber(array[i]);
			total += num;
		};
		return total;
	},

	arrSortObject: function (array, key) {
		return array;
	}

};



var tests = function() {
	var numarr = [4,6,8,42,24,245]
	console.log(library.arrSmallestValue(numarr, 10));
	
}; 
tests();
