const key = require('ckey');
const OAuthClient = require('intuit-oauth');

let oauthClient, authUri;

class Quickbooks {

    createConnection(config) {
        try {
            oauthClient = new OAuthClient(config);
            authUri = oauthClient.authorizeUri({ scope: [OAuthClient.scopes.Accounting] });
            return authUri;
        } catch (err) {
            return err;
        }
    }

    async getToken(url) {
        try {
            let token = await oauthClient.createToken(url);
            return token.json;
        } catch (err) {
            return err;
        }
    }

    async getVendor() {
        try {
            const companyID = oauthClient.getToken().realmId;
            const url = oauthClient.environment == "sandbox" ? OAuthClient.environment.sandbox : OAuthClient.environment.production;
            let vendor = await oauthClient.makeApiCall({ url: `${url}v3/company/${companyID}/query?query=select%20*%20from%20vendor&minorversion=51` });
            return vendor;
        } catch (err) {
            return err;
        }
    }

    async getCompanyInfo() {
        try {
            const companyID = oauthClient.getToken().realmId;
            const url = oauthClient.environment == "sandbox" ? OAuthClient.environment.sandbox : OAuthClient.environment.production;
            let companyName = await oauthClient.makeApiCall({ url: `${url}v3/company/${companyID}/companyinfo/${companyID}` });
            return companyName;
        } catch (err) {
            return err;
        }
    }

    async getClass() {
        try {
            const companyID = oauthClient.getToken().realmId;
            const url = oauthClient.environment == "sandbox" ? OAuthClient.environment.sandbox : OAuthClient.environment.production;
            let companyName = await oauthClient.makeApiCall({ url: `${url}v3/company/${companyID}/companyinfo/${companyID}` });
            return companyName;
        } catch (err) {
            return err;
        }
    }

    async getAccount(params) {
        try {
            const companyID = oauthClient.getToken().realmId;
            const url = oauthClient.environment == "sandbox" ? OAuthClient.environment.sandbox : OAuthClient.environment.production;
            let account = await oauthClient.makeApiCall({ url: `${url}v3/company/${companyID}/query?query=select%20*%20from%20Account%20where%20Classification%20=%20'${params}'&minorversion=51` });
            return account;
        } catch (err) {
            return err
        }
    }

    async getTerm() {
        try {
            const companyID = oauthClient.getToken().realmId;
            const url = oauthClient.environment == "sandbox" ? OAuthClient.environment.sandbox : OAuthClient.environment.production;
            let term = await oauthClient.makeApiCall({ url: `${url}v3/company/${companyID}/query?query=select%20*%20from%20Term` });
            return term;
        } catch (err) {
            return err
        }
    }
};

module.exports = Quickbooks;
