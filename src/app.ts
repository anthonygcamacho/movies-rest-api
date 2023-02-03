import express from "express"
// import path from "path"
// import cookieParser from "cookie-parser"
// import logger from "morgan"
import helmet from "helmet"
// import cors from "cors"

import routes from "./routes"
// const { notFoundPage } = require('../../controllers/pages/404.controller')

// // ------------------------------------------------------------------

const app = express()

// // Security
app.use(helmet())
// app.use(cors())

// // App settings
// app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(cookieParser())
// app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use('/', routes)

// // Throw error when user enters wrong Endpoints
// app.use((req, res) => res.status(404).send({
//     error: 'Oops! Endpoint not found, Please Check that you are entering the right thing!',
// }));

// app.use((err, req, res, next) => {
//     res.status(500).send({
//         error: 'Invalid Request! Please Check that you are entering the right thing!',
//     });
// });

// router.get('*', notFoundPage)

export { app }
