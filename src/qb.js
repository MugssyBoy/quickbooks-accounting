const OAuthClient = require('intuit-oauth');

class Quickbooks {
    constructor(oauthClient, authUri) {
        this.oauthClient = oauthClient;
        this.authUri = authUri;
    }

    createConnection(config) {
        this.oauthClient = new OAuthClient(config);
        this.authUri = oauthClient.authorizeUri({
            scope: [
                OAuthClient.scopes.Accounting
            ]
        })
    }

    createToken(url) {
        let uri = this.oauthClient.createToken(url)
        console.log(uri)
    }

};

module.exports = Quickbooks;