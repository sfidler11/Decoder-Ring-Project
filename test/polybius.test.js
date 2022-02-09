const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
    it(("correctly encodes a message"), () => {
        let expected = "4432423352125413";
        let actual = polybius("thinkful");
        expect(actual).to.equal(expected);
    });

    it(("should leave spaces in the correct position"), () => {
        let expected = "3251131343 2543241341";
        let actual = polybius("Hello world");
        expect(actual).to.equal(expected);
    });

    it(("should code 'i' and 'j' to 42"), () => {
        let expected = "4242";
        let actual = polybius("ij");
        expect(actual).to.equal(expected);
    });

    it(("should correctly decode a message"), () => {
        let expected = "hello world";
        let actual = polybius("3251131343 2543241341", false);
        expect(actual).to.equal(expected);
    });
    
    it(("should return '42' as both i and j when decoding"), () => {
        let expected = "th(i/j)nkful";
        let actual = polybius("4432423352125413", false);
        expect(actual).to.equal(expected);
    });

    it(("should return false if there is an odd length of numbers when decoding"), () => {
        let actual = polybius("44324233521254134", false);
        expect(actual).to.be.false;
    });
});