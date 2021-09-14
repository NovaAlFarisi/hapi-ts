import { Server, ServerOptions } from '@hapi/hapi'
import Config from './config'
import Routes from './routes'


const options: ServerOptions = {
    port: Config.port
}

const server = new Server(options)

export const initServer = async (): Promise<Server> => {
    await server.route(Routes)
    // await server.register(plugins)
    await server.initialize()

    await server.start()

    console.log(`Server running at: ${server.info.uri}`);

    return server
}
