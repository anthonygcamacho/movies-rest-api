const express = require("express")
const path = require("path")
const cookieParser = require("cookie-parser")
const logger = require("morgan")
const helmet = require("helmet")
const cors = require("cors")

// const indexRouter = require("./routes/index")
// const usersRouter = require("./routes/users")

// // ------------------------------------------------------------------

// const app = express()




// // Security
// app.use(helmet())
// app.use(cors())

// // App settings
// app.use(logger("dev"))
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

// // Routes
// app.use("/", indexRouter)
// app.use("/users", usersRouter)

// module.exports = app
