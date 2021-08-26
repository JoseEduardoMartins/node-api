'use strict';

var config = require('../config');
var sendgrid = require('sendgrid')('sendgridkey');

exports.send = async(to, sebject, body) => {
    sendgrid.send({
        to: to,
        from: 'hello@balta.io',
        subject: subject,
        html: body
    });
}