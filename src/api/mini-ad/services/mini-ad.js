'use strict';

/**
 * mini-ad service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mini-ad.mini-ad');
