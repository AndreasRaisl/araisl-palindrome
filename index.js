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
        return this.content.toLowerCase();
    }

    this.processedContent = function processedContent() 
    {
        return this.processor();
    }

    this.palindrome = function palindrome() 
    {
        return this.processedContent() === this.processedContent().reverse();
    } 
}

function TranslatedPhrase(content, translation)
{
    this.content = content;
    this.translation = translation; 
    this.processedContent = function processedContent()
    {
        return this.translation.toLowerCase();
    }       
}

TranslatedPhrase.prototype = new Phrase();


