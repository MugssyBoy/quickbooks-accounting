# quickbooks-accounting
Simplified NodeJS Quickbooks Accounting Integration

## Install via NPM
```js npm i quickbooks-accounting ```

## Usage
Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:
```js
/**
 * set sandbox to test sandbox environment
 * set production to test production environment
*/
#environment sample content

QUICKBOOKS_CLIENT_ID= // account client id
QUICKBOOKS_CLIENT_SECRET= // account secret key
QB_ENVIRONMENT=production
QUICKBOOKS_REDIRECT_URI = // callback uri
```

## Initial Set up

```js
const Quickbooks = require('quickbooks-accounting');
const qb = new Quickbooks();

let token,
    authUri = qb.createConnection({
        clientId: process.env.QUICKBOOKS_CLIENT_ID,
        clientSecret: process.env.QUICKBOOKS_CLIENT_SECRET,
        environment: process.env.QUICKBOOKS_ENVIRONMENT,
        redirectUri: process.env.QUICKBOOKS_REDIRECT_URI //serves to be the callback uri
})
```

## To connect to Quickbooks

```js

app.get('/app', function(req, res) {
    res.redirect(authUri);
});

app.get('/callback', function(req, res) {
    token = await qb.getToken(req.url); // getting token
    /**
     * you can either choose to send token to front end server res.status(200).json(token)
     * or redirect somewhere if using template engine res.render('some_route', {token})
     * */
})
```

## Contribute
We are at the very early stage of this repository. Any help and contribution is welcome.
 - Please Feel free to submit pull request.

## Authors
- 🐰 Alex

License
The MIT License (MIT)