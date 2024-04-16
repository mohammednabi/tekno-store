'use strict';

/**
 * user-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::user-payment.user-payment');
