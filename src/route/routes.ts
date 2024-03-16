import Router from "@koa/router";
import Koa, { Context, Next } from "koa";

import { UserController } from '@controller/UserController';
import { GroupController } from '@controller/GroupController';

export function setupRoutes(app: Koa): void {
    const router = new Router();

    // Sample Call (Step 1): POST call to Controller
    // App flow demo: Router -> Controller -> Service -> Repository -> Entity
    router.post('/users/greet', async (ctx: Context, next: Next) => {
        return ctx.body = await UserController.greetUser(ctx.request.body);
    });

    /* User routes */

    // Get user by id
    router.get('/users/:id', async (ctx: Context, next: Next) => {
        return ctx.body = await UserController.getUser(ctx.params.id);
    });

    // Get all users
    router.get('/users', async (ctx: Context, next: Next) => {
        return ctx.body = await UserController.getAllUsers();
    });

    // Create user
    router.post('/users/create', async (ctx: Context, next: Next) => {
        return ctx.body = await UserController.createUser(ctx.request.body);
    });

    // Update user
    router.post('/users/update', async (ctx: Context, next: Next) => {
        return ctx.body = await UserController.updateUser(ctx.request.body);
    });

    // Delete user
    router.get('/users/delete/:id', async (ctx: Context, next: Next) => {
        return ctx.body = await UserController.deleteUser(ctx.params.id);
    });

    /* Group routes */

    // Get user by id
    router.get('/groups/:id', async (ctx: Context, next: Next) => {
        return ctx.body = await GroupController.getGroup(ctx.params.id);
    });

    // Get all users
    router.get('/groups', async (ctx: Context, next: Next) => {
        return ctx.body = await GroupController.getAllGroups();
    });

    // Create user
    router.post('/groups/create', async (ctx: Context, next: Next) => {
        return ctx.body = await GroupController.createGroup(ctx.request.body);
    });

    // Update user
    router.post('/groups/update', async (ctx: Context, next: Next) => {
        return ctx.body = await GroupController.updateGroup(ctx.request.body);
    });

    // Delete user
    router.get('/groups/delete/:id', async (ctx: Context, next: Next) => {
        return ctx.body = await GroupController.deleteGroup(ctx.params.id);
    });

    app.use(router.routes());
    app.use(router.allowedMethods());

}
