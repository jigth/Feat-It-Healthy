import { Express, Request, Response } from 'express';
import { ProductsController } from '../../../modules/products/infrastructure/controllers/products';

const getAppControllers = (): any[] => {
    const productsController = new ProductsController();
    return [
        productsController
    ]
}

/** Load all controllers of the app in the routes they defined */
export const loadAppRoutes = (app: Express): void => {
    const controllers = getAppControllers();

    controllers.forEach(controller => {
        app.use(controller.path, controller.router);
    })

    // Check health route
    app.get('/', (req: Request, res: Response) => {
        res.json({ msg: "Welcome to Feat it" })
    });
}