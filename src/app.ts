import express from "express"
// import path from "path"
// import cookieParser from "cookie-parser"
// import logger from "morgan"
// import helmet from "helmet"
// import cors from "cors"

// const indexRouter = require("./routes/index")
// const usersRouter = require("./routes/users")

// // ------------------------------------------------------------------

const app = express()

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

export { app }
