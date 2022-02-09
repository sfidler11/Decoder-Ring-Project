const { expect } = require("chai");
const { caesar } = require("../src/caesar");
/*
1) test positive shift
2) test negative shift
3) test a loop around the alphabet case
4) test when no shift is given (return false)
5) test when a shift value is above 25 of below -25 or is 0 (return false)
6) test decoding a message when encode = false
*/

describe("caesar()", () => {
    it(("correctly shifts the message positively"), () => {
        const expected = "wklqnixo";
        const actual = caesar("thinkful", 3);
        expect(actual).to.equal(expected);
    });

    it(("correctly shits the message negatively"), () => {
        const expected = "qefkhcri";
        const actual = caesar("thinkful", -3);
        expect(actual).to.equal(expected);
    });

    it(("successfully wraps around the alphabet"), () => {
        const expected = "bpqa qa i amkzmb umaaiom!";
        const actual = caesar("This is a secret message!", 8);
        expect(actual).to.equal(expected);
    });

    it(("decodes a message when 'encode' is set to false"), () => {
        const expected = "thinkful";
        const actual = caesar("wklqnixo", 3, false);
        expect(actual).to.equal(expected);
    });

    it(("ignores capital letters"), () => {
        const expected = "this is a secret message!";
        const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
        expect(actual).to.equal(expected);
    });

    it(("returns false when no shift number is given"), () => {
        const actual =  caesar("thinkful");
        expect(actual).to.be.false;
    });

    it(("returns false when shift is 0"), () => {
        const actual =  caesar("thinkful", 0);
        expect(actual).to.be.false;
    });

    it(("returns false when shift is greater than 25"), () => {
        const actual = caesar("thinkful", 99);
        expect(actual).to.be.false;
    });

    it(("returns false when shift is below -25"), () => {
        const actual = caesar("thinkful", -26);
        expect(actual).to.be.false;
    })
});