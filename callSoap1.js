var soap = require("soap");

var url = 'http://appmdwdev04.dev.corp.btpn.co.id:5555/ws/com.btpn.customer.ws.provider.BtpnCustomer360?wsdl';
var args = {
    RequestGetCustomerPortofolio: {
        CommonParam: {
            processingCode: '640065',
            channelId: 'FESJo',
            node: 'FESJo',
            transmissionDateTime: '2016-11-30 17:42:41.322',
            requestId: '3ff652f1-fesjo',
            referenceNo: 'fesjo123',
            userId: 'FESE'
        },
        crn: '012997JJ',
        dataType: 'AC'
    }
};

soap.createClient(url, function(err, client) {
    client.getCustomerPortofolio(args, function(err, result) {
        console.log("Result: %j", result);
    });

});