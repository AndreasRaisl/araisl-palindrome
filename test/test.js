
let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {
    describe("#palindrome", function() {
        it("Should return false for a non-palindrome", function() {
            let nonPalindrome = new Phrase("Apple");
            assert(!nonPalindrome.palindrome());
        });

        it("Should return true for a plain palindrome", function() {
            let plainPalindrome = new Phrase("racecar");
            assert(plainPalindrome.palindrome());
        });

        it("should return true for a mixed-case palindrome", function() {
            let mixedCasedPalindrome = new Phrase("RaceCar");
            assert(mixedCasedPalindrome.palindrome());
        });

        it("should return true for a palindrome with punctuation", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam");
            assert(punctuatedPalindrome.palindrome());
        });
    });

    describe("#letters", function() {
        it("Should return only the letters of a punctuated sentence", function() {
            let punctuatedPalindrome = new Phrase("Madam, I'm Adam");
            assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
        });
        
        it("Should return an empty String if the string has no letters", function() {
            let noLettersPalindrome = new Phrase("§$%*+");
            assert.strictEqual(noLettersPalindrome.letters(), "");
        })

    });
});