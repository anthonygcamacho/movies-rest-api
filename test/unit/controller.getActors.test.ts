import { describe, expect, test } from "@jest/globals"

function sum(a: number, b: number) {
    return a + b
}

describe("two numbers added together", () => {
    test("add two nums", () => {
        expect(sum(1, 2)).toBe(3)
    })
})
