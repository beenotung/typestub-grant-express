# TypeStub for grant-express

add types to npm package grant-express and allow consumer to directly import and develop with Typescript

[![npm Package Version](https://img.shields.io/npm/v/typestub-grant-express.svg?maxAge=2592000)](https://www.npmjs.com/package/typestub-grant-express)

Javascript source: https://github.com/simov/grant

Typescript stub: https://github.com/beenotung/typestub-grant-express

## Example
```typescript
import * as express from 'express'
import * as grant from 'typestub-grant-express'

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
```

## License
[BSD-2-Clause](./LICENSE) (Free Open Source Software)