import express from 'express';
import attachHealthRouter from './api/health';

export default function attachApiRoutes(parent) {
    var apiRouter = express.Router();

    apiRouter = attachHealthRouter(apiRouter);

    parent.use('/api', apiRouter);
    return parent;
};
