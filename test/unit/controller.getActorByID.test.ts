import { describe, expect, test } from "@jest/globals"
import controller from "../../src/controllers/api/v1/actors.controller"

describe("controller.getActorByID", () => {
    test("getActorByID function is defined", () => {
        expect(typeof controller.getActorByID).toBe("function")
    })
})
 