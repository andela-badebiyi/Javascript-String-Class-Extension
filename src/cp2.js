if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement /*, fromIndex*/ ) {
    'use strict';
    var O = Object(this);
    var len = parseInt(O.length) || 0;
    if (len === 0) {
      return false;
    }
    var n = parseInt(arguments[1]) || 0;
    var k;
    if (n >= 0) {
      k = n;
    } else {
      k = len + n;
      if (k < 0) {k = 0;}
    }
    var currentElement;
    while (k < len) {
      currentElement = O[k];
      if (searchElement === currentElement ||
         (searchElement !== searchElement && currentElement !== currentElement)) { // NaN !== NaN
        return true;
      }
      k++;
    }
    return false;
  };
}

String.prototype.hasVowels = function(){
  var regex = /[aeiou|AEIOU]/ ;
  return regex.test(this);
};

String.prototype.toUpper = function(){
  return this.caseConverter('upper');
};

String.prototype.toLower = function(){
  return this.caseConverter('lower');
};

String.prototype.ucFirst = function(){
  return this.replace(/^\w/, this[0].toUpper())
};

String.prototype.isQuestion = function(){
  return /\?$/.test(this);
};

String.prototype.words = function(){
    var strStripped = this.replace(/[^\w+ ^\s]/g, '').trim();
    var words = [];
    var start = 0;
    var end = 0;
    while(/\s/.test(strStripped)){
        start = strStripped.search(/\w+/);
        end = strStripped.search(/\s/);
        words.push(strStripped.substring(start, end));
        strStripped = strStripped.slice(end).trim();
    }
    //if its an empty string dont push it into the array
    if(strStripped !== '')
      words.push(strStripped);
    return words;
};

String.prototype.wordCount = function(){
  return this.words().length;
};

String.prototype.toCurrency = function(){
  var startIndex = (this.indexOf('.') == -1) ? this.length : this.indexOf('.');
  var value = this;
  //if number isn't longer than 3 digits
  if(startIndex < 3)
    return value;
  while(startIndex > 3){
    value = value.insertAt(',', startIndex-3);
    startIndex = value.indexOf(',');
  }
  return value;
};

String.prototype.fromCurrency = function(){
  return this.replace(/,/g, '');
}

String.prototype.insertAt = function(ins, i){
  return this.substring(0, i) + ins + this.substring(i);
}

String.prototype.caseConverter = function(strcase){
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var result = [];
  var type = [];
  this.split('').forEach(function(element){
    type = (strcase == 'upper') ? lower : upper;
    oppositeType = (strcase == 'upper') ? upper : lower;

    if(type.includes(element)){
        result.push(oppositeType[type.indexOf(element)]);
    } else {
      result.push(element);
    }
  });

  var output = result.join('');
  return output;
}
