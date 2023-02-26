import express from "express"
import helmet from "helmet"
import cors from "cors"
// import path from "path"
// import cookieParser from "cookie-parser"
import morgan from "morgan"

import swaggerUi from "swagger-ui-express"
import { swaggerSpec } from "./utils/swagger"

import routes from "./routes"

// -------------------------------------------------------------------------------

const app = express()

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec))

// // Security
app.use(helmet())
app.use(cors())

// // App settings
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", routes)

export { app }
