var soap = require("soap");

var url = 'http://10.1.72.144:8090/crmws/crmws?wsdl';
var username = 'as_cs';
var password = '123';

var options = {
    hasNonce: false,
    hasTimeStamp: false,
    hasTokenCreated: false
};
var wsSecurity = new soap.WSSecurity(username, password, options);


var args = {
    PersonList:{
        PersonID: '98945'
    },
    PersonIdentityCardList: {
        PersonID: '98945',
        IdentityCardID: '520377',
        BaseIdentityCardFlag: false,
        ActiveFlag: false
    }
};

soap.createClient(url, function(err, client) {
    client.setSecurity(wsSecurity);
    client.dsPersonMassModify(args, function(err, result) {
        console.log("Result: %j", result);
        console.log('last request: ', client.lastRequest)
    });

});