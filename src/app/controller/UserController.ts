import { UserService } from "@service/UserService";
import { UserEntity } from '@entity/UserEntity';
import { Context } from "koa";

import formatResponse from "@middleware/ApiCallResponseHandler";

interface greetUserPayload {
    email: string
}

interface createUserPayload {
    values: object
}

interface updateUserPayload {
    id: number,
    values: object
}

export class UserController {

    // Sample call (Step 2): Request user name / Return custom message
    // Business logic: Concatenate full name string and message
    // NOTE: Example of custom responses
    static async greetUser(payload: unknown, ctx: Context): Promise<any>{
        const data = <greetUserPayload>payload;
        const name = await UserService.getUserName(data.email);

        if(name) {
            return {
                message: 'User greeting created.',
                greeting: 'Welcome to the website ' + name + '.'
            }
        } else {
            ctx.status = 404;
            return {
                message: 'No user found to greet.',
                data: null
            }
        }
    }

    // Basic calls
    // NOTE: Example of auto generated responses using a formatReponse handler

    static async getUser(id: number, ctx: Context): Promise<Object> {
        const fnReturn = await UserService.getUser(id);

        return formatResponse.fromSingleResult(fnReturn, ctx);
    }

    static async getAllUsers(ctx: Context): Promise<Object> {
        const fnReturn = await UserService.getAllUsers();

        return formatResponse.fromResultCollection(fnReturn, ctx);
    }

    static async createUser(reqPayload: unknown, ctx: Context): Promise<Object> {
        const data = <createUserPayload>reqPayload;
        const fnReturn = await UserService.createUser(data.values);

        return formatResponse.fromSingleResult(fnReturn, ctx);
    }

    static async updateUser(userId: number, reqPayload: unknown, ctx: Context): Promise<Object> {
        const data = <updateUserPayload>reqPayload;
        const fnReturn = await UserService.updateUser(userId, data.values);

        return formatResponse.fromResultCount(fnReturn, ctx);
    }

    static async deleteUser(userId: number, ctx: Context): Promise<Object> {
        const fnReturn = await UserService.deleteUser(userId);

        return formatResponse.fromResultCount(fnReturn, ctx);
    }

}