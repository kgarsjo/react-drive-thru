import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';

import Index from '../components/index';
import {isProduction} from '../config';

export default function attachPageRoutes(parent) {
    const pageRouter = express.Router();

    pageRouter.get('/', function (req, res) {
        const production = isProduction();
        res.send(renderToString(<Index production={production} />));
    });

    parent.use('/', pageRouter);
    parent.use(express.static('public'));
    return parent;
}
