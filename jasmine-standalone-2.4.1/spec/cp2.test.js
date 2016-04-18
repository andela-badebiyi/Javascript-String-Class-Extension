describe('Testing hasVowels() function for strings', function(){
    it('should return false when a string contains no vowel', function(){
      expect('lyth'.hasVowels()).toBe(false);
    });

    it('should return true when a string contains one or more vowels', function(){
      expect('lion'.hasVowels()).toBe(true);
    });
});

describe('Testing toUpper() function for strings', function(){
    it('should return \'HELLO\' for \'hello\'', function(){
      expect('hello'.toUpper()).toBe('HELLO');
    });

    it('should return \'FIRE\' for \'FiRe\'', function(){
      expect('FiRe'.toUpper()).toBe('FIRE');
    });
});

describe('Testing toLower() function for strings', function(){
  it('should return \'hello\' for \'HELLO\'', function(){
    expect('HELLO'.toLower()).toBe('hello');
  });

  it('should return \'fire\' for \'FiRe\'', function(){
    expect('FiRe'.toLower()).toBe('fire');
  });
});

describe('Testing ucFirst() function for strings', function(){
  it('should return "John" for "john"', function(){
    expect('john'.ucFirst()).toBe('John');
  });
});

describe('Testing isQuestion() function for strings', function(){
  it('should return true for "Hello world?"', function(){
    expect('Hello World?'.isQuestion()).toBe(true);
  });
  it('should return false for "Hello World"', function(){
    expect('Hello World'.isQuestion()).toBe(false);
  });
  it('should return false for "Hello? World"', function(){
    expect("Hello? World".isQuestion()).toBe(false);
  });
});

describe('Testing words() function for strings', function(){
  it('should return ["hello", "beautiful", "people"] for "hello beautiful people"',
  function(){
    expect("hello beautiful people".words()).toEqual(['hello', 'beautiful', 'people']);
  });
  it('should return ["hello"] for "hello"', function(){
    expect('hello'.words()).toEqual(['hello']);
  });
  it('should return ["hello", "world", "you", "rock"] for "hello, world you. rock"',
  function(){
    expect('hello, world you. rock'.words()).toEqual(['hello', 'world', 'you', 'rock']);
  });
});

describe('Testing wordCount() function for strings', function(){
  it('should return 2 for "hello world"', function(){
    expect('hello world'.wordCount()).toBe(2);
  });
  it('should return 0 for ""', function(){
    expect(''.wordCount()).toBe(0);
  });
  it('should return 5 for "hello, world. go be? beautiful"', function(){
    expect("hello, world. go be? beautiful".wordCount()).toBe(5);
  });
});

describe('Testing toCurrency() function for strings', function(){
  it('should return "1,000" for "1000"', function(){
    expect('1000'.toCurrency()).toBe('1,000');
  });
  it('should return "1,000,000,000.00" for "1000000000.00"', function(){
    expect("1000000000.00".toCurrency()).toBe("1,000,000,000.00");
  });
  it('should return "100.00" for "100.00"', function(){
    expect("100.00".toCurrency()).toEqual("100.00");
  });
});

describe("Testing fromCurrency() function for strings", function(){
  it('should return "1000" for "1,000"', function(){
    expect("1,000".fromCurrency()).toBe("1000");
  });
  it('should return "1000000" for "1,000,000"', function(){
    expect('1,000,000'.fromCurrency()).toBe('1000000');
  });
  it('should return "1000000.12" for "1,000,000.12"', function(){
    expect('1,000,000.12'.fromCurrency()).toBe('1000000.12');
  });
});
