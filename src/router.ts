import type { FastifyInstance } from "fastify"
import { app } from "./server.js"

export async function registerRoutes(app: FastifyInstance) {

    app.get('/', async (req, res) => {
    return { hello: 'world' }
    })

    app.get('/teste', getTeste)

    async function getTeste(){
        return { hello: 'teste' }
    }
}