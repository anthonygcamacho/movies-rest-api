"use strict"

const path = require("path")
const fs = require("fs")
const wait = require("wait")
const db = require("../db")
const { seedingOrder } = require("./seeding-order")

// -----------------------------------------------------------------------------

let dbCreatePath = path.join(__dirname, "..", "..", "db_create")

async function seedDB() {
    for (let i = 0; i < seedingOrder.length; i++) {
        console.log(`${dbCreatePath}/${seedingOrder[i]}`)
        const seedQuery = fs.readFileSync(
            `${dbCreatePath}/${seedingOrder[i]}`,
            {
                encoding: "utf8",
            }
        )
        await db.query(seedQuery, (err, res) => {
            if (err) return console.log(err)
            console.log("Seeding Completed!")
            // pool.end()
        })
        await wait(10000)
    }
}
seedDB()
