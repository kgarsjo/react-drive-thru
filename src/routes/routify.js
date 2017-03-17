import express from 'express';
import attachApiRoutes from './api';
import attachPageRoutes from './page';

export default function routify(app) {
    app = attachApiRoutes(app);
    app = attachPageRoutes(app);
    return app;
};
