import Router from "@koa/router";
import Koa, { Context, Next } from "koa";

import { UserController } from '@controller/UserController';

const userController = new UserController();

export function setupRoutes(app: Koa): void {
    const router = new Router();

    // Sample Call (Step 1): POST call to Controller
    // App flow demo: Router -> Controller -> Service -> Repository -> Entity
    router.post('/users/greet', async (ctx: Context, next: Next) => {
        return ctx.body = await userController.greetUser(ctx.request.body);
    });

    app.use(router.routes());
    app.use(router.allowedMethods());

}
