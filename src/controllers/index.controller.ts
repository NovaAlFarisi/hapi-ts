import {Request, ResponseToolkit} from '@hapi/hapi'
import response from '../utils/response'


export default async (request: Request, h: ResponseToolkit): Promise<any> => {

    let payload = response(200, {
        message: "Hello Hapi TS"
    });

    return h.response(payload)

}