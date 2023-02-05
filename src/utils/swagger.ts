import { Express, Request, Response } from "express"
import swaggerJsdoc from "swagger-jsdoc"

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "REST API Docs",
            version: "1.0.0",
        },
        components: {
            securitySchemas: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ["./src/routes/api/v1/*.ts"],
}

export const swaggerSpec = swaggerJsdoc(options)
