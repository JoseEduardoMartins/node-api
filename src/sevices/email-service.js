'use strict';

var config = require('../config');
var sendgrid = require('sendgrid')(config.sendgridkey);

exports.send = async(to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'm4rt1ns.jose@gmail.com',
        subject: subject,
        html: body
    });
}