const OAuthClient = require('intuit-oauth');

let oauthClient, authUri;

class Quickbooks {

    createConnection(config) {
        oauthClient = new OAuthClient(config);
        authUri = oauthClient.authorizeUri({
            scope: [
                OAuthClient.scopes.Accounting
            ]
        })
        return authUri
    }

    createToken(url) {
        let uri = oauthClient.createToken(url)
        console.log(uri)
    }

};

//module.exports = Quickbooks;

let qb = new Quickbooks()
let uri = qb.createConnection({
    clientId: "ABF9gSNPxeO3SNThCWyTMEVFk4Di1DmWFYo6UOxOAgVFhQ7W05",
    clientSecret: "Oc8sWrJd6Hl6y5TBz8Rx54bORRnI8MSrJBcem8S5",
    environment: "sandbox",
    redirectUri: "http://localhost:8000/callback"
    //redirectUri: `https://${req.hostname}/callback`
})
console.log(uri)