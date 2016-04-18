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
  var result = [], asc;
  if(strcase == 'upper'){
    this.split('').forEach(function(e){
      asc = e.charCodeAt(0);
      if(asc > 96 && asc < 123){
        result.push(String.fromCharCode(asc - 32));
      } else {
        result.push(e);
      }

    });
  } else {
    this.split('').forEach(function(e){
      asc = e.charCodeAt(0);
      if(asc > 64 && asc < 91){
        result.push(String.fromCharCode(e.charCodeAt(0) + 32));
      } else {
        result.push(e);
      }

    });
  }
  return result.join('');
}
