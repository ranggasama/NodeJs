var soap = require("soap");

var url = 'http://10.1.72.144:8090/crmws/crmws?wsdl';
var args = {
    PersonID: '98945'
};
var options = {
    hasNonce: false,
    hasTimeStamp: false,
    hasTokenCreated: false
};
var wsSecurity = new soap.WSSecurity('as_cs', '123', options);

soap.createClient(url, function(err, client) {
    client.setSecurity(wsSecurity);
    client.dsPersonFindByID2(args, function(err, result) {
        console.log("Result: %j", result);
        console.log('last request: ', client.lastRequest)
    });

});