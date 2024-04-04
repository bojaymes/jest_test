const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 73 for 42 + 31", () => {
            expect(addition(42, 31)).toBe(73);
        });
    });
    function addition (num1, num2) {
        return num1 + num2;
    }
    module.exports = addition;

    describe("Subtraction function", () => {

    });
    describe("Multiply function", () => {

    });
    describe("Division function", () => {

    });
})