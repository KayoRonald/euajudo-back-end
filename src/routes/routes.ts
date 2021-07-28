import { Router } from 'express';

import registionRoutes from '../modules/Registration/routes/Register.routes';

const routes = Router();

routes.use('/registionPoint', registionRoutes);

export default routes;
