const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
    describe("default parameters()", () => {
        it("returns false when the encoding alphabet is not 26 characters in length", () => {
            const actual = substitution("thinkful", "short");
            expect(actual).to.be.false;
        });

        it("returns false when characters are repeated in the encoding alphabet", () => {
            const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
            expect(actual).to.be.false;
        });
    });

    describe("encoding()", () => {
        it("successfully encodes a message", () => {
            const expected = "jrufscpw";
            const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        });

        it("decodes a message using non-letter characters", () => {
            const expected = "y&ii$r&";
            const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
            expect(actual).to.equal(expected);
        });

        it("maintains spaces in message", () => {
            const expected = "elp xhm xf mbymwwmfj dne";
            const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
            expect(actual).to.equal(expected);
        })

    });

    describe("decoding()", () => {
        it("successfully decodes a message", () => {
            const expected = "thinkful";
            const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });

        it("decodes messages with any kind of character", () => {
            const expected = "message";
            const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            expect(actual).to.equal(expected);
        });

        it("maintains spaces while decoding", () => {
            const expected = "you are an excellent spy";
            const actual = substitution("elp xhm xf mbymwwmfj dne", "xoyqmcgrukswaflnthdjpzibev", false);
            expect(actual).to.equal(expected);
        });
    });
}) 