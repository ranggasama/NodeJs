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

var personID = ['98945','98985'];
var identityCardID = ['520377','85128'];

var args = { 
    _xml: `<ns1:DsPersonMassModifyReq
    xmlns:ns1="http://support.diasoft.ru/type/request"
    xmlns="http://support.diasoft.ru/type/request">
<ns1:PersonList>
	<ns2:PersonID xmlns:ns2="http://support.diasoft.ru/type">${personID[0]}</ns2:PersonID>
</ns1:PersonList>
<ns1:PersonList>
    <ns2:PersonID xmlns:ns2="http://support.diasoft.ru/type">${personID[1]}</ns2:PersonID>
</ns1:PersonList>
<ns1:PersonIdentityCardList>
	<ns2:PersonID xmlns:ns2="http://support.diasoft.ru/type">${personID[0]}</ns2:PersonID>
	<ns2:IdentityCardID xmlns:ns2="http://support.diasoft.ru/type">${identityCardID[0]}</ns2:IdentityCardID>
	<ns2:BaseIdentityCardFlag xmlns:ns2="http://support.diasoft.ru/type">true</ns2:BaseIdentityCardFlag>
	<ns2:ActiveFlag xmlns:ns2="http://support.diasoft.ru/type">true</ns2:ActiveFlag>
</ns1:PersonIdentityCardList>
<ns1:PersonIdentityCardList>
	<ns2:PersonID xmlns:ns2="http://support.diasoft.ru/type">${personID[1]}</ns2:PersonID>
	<ns2:IdentityCardID xmlns:ns2="http://support.diasoft.ru/type">${identityCardID[1]}</ns2:IdentityCardID>
	<ns2:BaseIdentityCardFlag xmlns:ns2="http://support.diasoft.ru/type">true</ns2:BaseIdentityCardFlag>
	<ns2:ActiveFlag xmlns:ns2="http://support.diasoft.ru/type">true</ns2:ActiveFlag>
</ns1:PersonIdentityCardList>
</ns1:DsPersonMassModifyReq>`
};

soap.createClient(url, function(err, client) {
    client.setSecurity(wsSecurity);
    client.dsPersonMassModify(args, function(err, result) {
        console.log("Result: %j", result);
        console.log('last request: ', client.lastRequest)
    });

});