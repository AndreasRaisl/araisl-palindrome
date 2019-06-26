
module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
  }
  

function reverse(string)
{
    return Array.from(string).reverse().join("");
}

function palindrome(testString)
{
     return testString.toLowerCase() === reverse(testString).toLowerCase();    
}

function Phrase(content)
{
    this.content = content;

    this.processor = function processor()
    {
        return this.letters().toLowerCase();
    }

    this.processedContent = function processedContent() 
    {
        return this.processor();
    }

    this.letters = function letters() {        
        const letterRegex = /[a-z]/ig;
        return (this.content.match(letterRegex) || []).join("");                      
    }

    this.palindrome = function palindrome() 
    {
        if(this.processedContent()) return this.processedContent() === this.processedContent().reverse();
        else return false;
    } 
}



