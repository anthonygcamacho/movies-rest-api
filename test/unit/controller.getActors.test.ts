import { describe, expect, test } from "@jest/globals"
import actorsController from "../../src/controllers/api/v1/actors.controller"

describe("controller.getActors", () => {
    test("getActors function is defined", () => {
        expect(typeof actorsController.getActors).toBe("function")
    })
})
