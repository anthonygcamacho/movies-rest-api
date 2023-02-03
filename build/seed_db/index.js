"use strict"

const path = require("path")
const fs = require("fs")
const wait = require("wait")
const { db } = require("../db")
const { seedOrder } = require("./seed-order")

// -----------------------------------------------------------------------------

let dbCreatePath = path.join(__dirname)

async function seedDB() {
    for (let i = 0; i < seedOrder.length; i++) {
        console.log(`${dbCreatePath}/${seedOrder[i]}`)
        const seedQuery = fs.readFileSync(`${dbCreatePath}/${seedOrder[i]}`, {
            encoding: "utf8",
        })
        try {
            await db.none(seedQuery)
            console.log("Seeding Completed!")
            await wait(10000)
        } catch (err) {
            console.log("catch error", err)
        }
    }
}
seedDB()
