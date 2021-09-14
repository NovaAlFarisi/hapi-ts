import { Request, ResponseToolkit } from '@hapi/hapi'
import indexController from '../../controllers/index.controller'

export interface iRoute {
    method: String | String[],
    path: String,
    handler(request: Request, h: ResponseToolkit): any
}

const route: iRoute = {
    path: '/',
    method: 'GET',
    handler: indexController
}

export default route