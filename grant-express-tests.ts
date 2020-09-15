import * as express from 'express'
import * as grant from './index'

const app = express();

// grant(123) // this should raise tsc-error

app.use(
    grant({
        defaults: {
            protocol: 'http',
            host: 'localhost:8080',
            transport: 'session',
            state: true,
        },
        google: {
            key: 'GOOGLE_CLIENT_ID',
            secret: 'GOOGLE_CLIENT_SECRET',
            scope: ['profile', 'email'],
            callback: '/login/google',
        },
    }),
);
