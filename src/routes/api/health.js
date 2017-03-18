import express from 'express';

export default function attachHealthRoutes(parent) {
    const healthRouter = express.Router();

    healthRouter.get('/', function (req, res) {
        res.json({success: true});
    });

    parent.use('/health', healthRouter);
    return parent;
}
