var querystring   = require('querystring');

var args = {
    PersonList:["<type:PersonID>98945</type:PersonID>", "<type:PersonID>98985</type:PersonID>"],
    PersonIdentityCardList: {
        PersonID: '98945',
        IdentityCardID: '520377',
        BaseIdentityCardFlag: false,
        ActiveFlag: false
    },
    PersonIdentityCardList: {
        PersonID: '98985',
        IdentityCardID: '85128',
        BaseIdentityCardFlag: false,
        ActiveFlag: false
    }
};
console.log('%j', args);