import type { FastifyInstance } from "fastify"
import { getAllLists } from "./controller/listsController.js"

export async function registerRoutes(app: FastifyInstance) {

    app.get('/', async (req, res) => {
    return { hello: 'world' }
    })

    app.get('/lists', getAllLists)

    app.get('/teste', getTeste)

    async function getTeste(){
        return { hello: 'teste' }
    }
}