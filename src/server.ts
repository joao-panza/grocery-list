import fastify from "fastify"
import { registerRoutes } from "./router.js"

export const app = fastify({logger: true})

await registerRoutes(app)

try {
    await app.listen({port:3000})
} catch (err){
    app.log.error(err)
}